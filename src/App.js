import React, { useState, useEffect } from "react";
import Searcher from "./components/Searcher";
import Button from "./components/Button";

function App() {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const AUTH_ENDPOINT = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;
  const RESPONSE_TYPE = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE;
  const [token, setToken] = useState("");


  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (hash && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="App flex justify-center items-center h-screen">
      <header className="App-header">
        <div className="SearchContainer justify-center">
          <h1 className="text-4xl sm:text-6xl text-aqua font-bold flex justify-center items-center">Spotify player</h1>
          {!token ? (
            <div className="flex justify-center p-20">
              <a
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                className="bg-aqua py-2 px-4 rounded-md font-semibold whitespace-nowrap"
              >
                Login to to your Spotify account
              </a>
            </div>
          ) : (
            <div className="">
              <Searcher token={token} />
              <Button className="logOut bg-aqua" onClick={logout}>
                Logout
              </Button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

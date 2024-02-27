import React from 'react';

const Button = ({ onClick, className, children }) => {
  return (
    <button className={`px-4 py-2 rounded-md bg-white ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

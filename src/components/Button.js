import React from 'react';

const Button = ({ onClick, className, children }) => {
  return (
    <button className={`py-2 px-4 rounded-md font-semibold whitespace-nowrap ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

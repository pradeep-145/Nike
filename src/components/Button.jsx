import React from 'react';

const Button = (props) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 hover:scale-105 duration-200  rounded-full ${props.color}`} id="button">
      <p className="font-montserrat text-xl">{props.label}</p>
      {props.iconUrl && (
        <img
          src={props.iconUrl}
          alt="button icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
}

export default Button;

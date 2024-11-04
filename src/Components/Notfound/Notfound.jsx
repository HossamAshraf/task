import React from "react";
import errorImage from "../../Images/error.svg";
export default function Notfound() {
  return (
    <div>
      <img className="w-100" src={errorImage} alt="error" />
    </div>
  );
}

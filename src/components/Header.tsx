import React from "react";

const Header = (props: any) => {
  return (
    <div className="wrapper animated fadeIn faster">
      <a href="/" className="logo">
        <img src={process.env.PUBLIC_URL + "/logo.svg"} />
      </a>
      {props.open && (
        <div className="imgP">
          <img src={process.env.PUBLIC_URL + "/plogos.svg"} />
        </div>
      )}
    </div>
  );
};

export default Header;

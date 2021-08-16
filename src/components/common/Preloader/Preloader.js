import React from "react";
import preloader from "../../../assets/images/preloader.gif";

const Preloader = ({ loading }) => {
  return (
    <>
      {loading ? (
        <p>
          Loading <img src={preloader} alt="preloader gif" />
        </p>
      ) : null}
    </>
  );
};

export default Preloader;

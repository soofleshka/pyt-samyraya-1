import React from "react";
import preloader from "../../assets/images/preloader.gif";

const Preloader = ({ isFetching }) => {
  return (
    <>
      {isFetching && (
        <p>
          Loading <img src={preloader} alt="preloader gif" />
        </p>
      )}
    </>
  );
};

export default Preloader;

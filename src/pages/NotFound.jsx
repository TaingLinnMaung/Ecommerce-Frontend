import React from "react";
import styles from "../styles/styles";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate(); // Initialize useHistory

  const handleGoHome = () => {
    navigate("/"); // Redirect to home
  };
  return (
    <>
      <div
        className={`${styles.normalFlex} flex-col justify-center items-center pt-36`}
      >
        <div className="four_zero_four_bg w-full  ">
          <h1 className="text-center ">404</h1>
        </div>

        <div className=" w-full  text-center">
          <h3 className="h2">Look like you're lost</h3>

          <p>the page you are looking for not avaible!</p>

          <button onClick={handleGoHome} className="link_404">
            Go to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;

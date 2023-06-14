import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../module.css/pages.module.css";
import basunsaeng from "../../images/basunsaeng.png";

const Start = () => {
  const navigate = useNavigate();

  const buttonClick = () => {
    navigate("/q1");
  };
  return (
    <>
      <div className={styles.head}>어느날 집에 바선생이 나타났다?!</div>
      <img
        loading="eager"
        className={styles.startImage}
        src={basunsaeng}
        alt=""
      />
      <button onClick={buttonClick}>시작하기!</button>
    </>
  );
};

export default Start;

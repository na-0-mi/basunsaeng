import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../module.css/pages.module.css";
import basunsaeng from "../../images/basunsaeng.png";

const Q_1 = () => {
  const navigate = useNavigate();

  const overEndingClick = () => {
    navigate("/BadEnding");
  };
  const buttonClick = () => {
    navigate("/q2");
  };

  const previousClick = () => {
    navigate("/");
  };

  return (
    <>
      <img className={styles.images} src={basunsaeng} alt="" />
      <div className={styles.question}>
        집에 바선생이 나타난 당신, 어떻게 하시겠습니까?
      </div>
      <button className={styles.btn1} onClick={overEndingClick}>
        당연히 죽여야지. 너무 징그러우니 빨리 죽인다
      </button>
      <button className={styles.btn2} onClick={buttonClick}>
        바선생 너무 징그러워 도망가버린다.
      </button>
      <button className={styles.previousBtn} onClick={previousClick}>
        뒤로가기
      </button>
    </>
  );
};

export default Q_1;

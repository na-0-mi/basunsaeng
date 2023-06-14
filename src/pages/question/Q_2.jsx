import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../module.css/pages.module.css";
import insta from "../../images/insta.png";

const Q_2 = () => {
  const navigate = useNavigate();

  const buttonClick = () => {
    navigate("/q3");
  };

  const overEndingClick = () => {
    navigate("/BadEnding2");
  };

  const previousClick = () => {
    navigate("/q1");
  };

  return (
    <>
      <img loading="eager" className={styles.images} src={insta} alt="" />
      <div className={styles.question}>
        갑자기 바선생이 인스타 팔로우를 하자고 합니다. 당신의 선택은?
      </div>
      <button className={styles.btn1} onClick={buttonClick}>
        ㅇㅋ당여니할수있지~ 바선생과 인스타 맞팔을 한다.
      </button>
      <button className={styles.btn2} onClick={overEndingClick}>
        바선생이 인스타를 왜..? 딱 잘라 거절한다.
      </button>
      <button className={styles.previousBtn} onClick={previousClick}>
        뒤로가기
      </button>
    </>
  );
};

export default Q_2;

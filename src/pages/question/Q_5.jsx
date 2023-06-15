import React from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../cookies";
import styles from "../module.css/pages.module.css";
import vacation from "../../images/vacation.png";

const Q_5 = () => {
  const navigate = useNavigate();

  const button_1Click = () => {
    setCookie("result_3", "a_1");
    navigate("/Loading");
  };

  const button_2Click = () => {
    setCookie("result_3", "a_2");
    navigate("/Loading");
  };

  const previousClick = () => {
    navigate("/q4");
  };
  return (
    <>
      <img className={styles.images} src={vacation} alt="" />
      <div className={styles.question}>
        이야기를 잘 들어주는 당신에게 감동한 바선생, 여름 휴가를 함께하자고
        제안합니다.
      </div>
      <button className={styles.btn1} onClick={button_1Click}>
        마지막 여름휴가! 끝장나게 준비해서 즐겁게 다녀와야지
      </button>
      <button className={styles.btn2} onClick={button_2Click}>
        뭐 어떻게든 되지 않을까? 스트릿 바선생이 잘 해줄거야
      </button>
      <button className={styles.previousBtn} onClick={previousClick}>
        뒤로가기
      </button>
    </>
  );
};

export default Q_5;

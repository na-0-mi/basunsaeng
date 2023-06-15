import React from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../cookies";
import styles from "../module.css/pages.module.css";
import sad from "../../images/sad.png";

const Q_4 = () => {
  const navigate = useNavigate();

  const button_1Click = () => {
    setCookie("result_2", "a_1");
    navigate("/q5");
  };
  const button_2Click = () => {
    setCookie("result_2", "a_2");
    navigate("/q5");
  };

  const previousClick = () => {
    navigate("/q3");
  };
  return (
    <>
      <img className={styles.images} src={sad} alt="" />
      <div className={styles.question}>
        혼란스러운 머릿속을 정리하고 있는데, 바선생이 슬픈 가정사 이야기를
        합니다.
      </div>
      <button className={styles.btn1} onClick={button_1Click}>
        바선생의 입장도 좀 공감이 되는 것 같다. 바선생도 힘들었겠군..
      </button>
      <button className={styles.btn2} onClick={button_2Click}>
        글쿤...
      </button>
      <button className={styles.previousBtn} onClick={previousClick}>
        뒤로가기
      </button>
    </>
  );
};

export default Q_4;

import React from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../cookies";
import styles from "../module.css/pages.module.css";
import talking from "../../images/talking.png";

const Q_3 = () => {
  const navigate = useNavigate();

  const button_1Click = () => {
    setCookie("result_1", "a_1");
    navigate("/q4");
  };

  const button_2Click = () => {
    setCookie("result_1", "a_2");
    navigate("/q4");
  };

  const previousClick = () => {
    navigate("/q2");
  };
  return (
    <>
      <img className={styles.images} src={talking} alt="" width={400} />
      <div className={styles.question}>
        아니 근데 이 상황이 말이 되나요?
        <br />
        바선생이 어떻게 말을 하는거지..
      </div>
      <button className={styles.btn1} onClick={button_1Click}>
        말도 안돼. 거대한 바선생에게 가위눌리는 꿈을 꾸고 있는 것 같다
      </button>
      <button className={styles.btn2} onClick={button_2Click}>
        요즘 세상에 ai도 있는데 바선생이 말하는 것 정도야..
      </button>
      <button className={styles.previousBtn} onClick={previousClick}>
        뒤로가기
      </button>
    </>
  );
};

export default Q_3;

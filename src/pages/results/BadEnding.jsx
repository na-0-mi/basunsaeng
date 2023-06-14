import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../module.css/pages.module.css";
import death from "../../images/death.png";

export const BadEnding = () => {
  const navigate = useNavigate();

  const previousClick = () => {
    navigate("/");
  };
  return (
    <>
      <img className={styles.images} src={death} alt="" />
      <div className={styles.badEnding}>
        당신은 피도 눈물도 없는 사람이군요.
        <br />
        바선생도 생명인만큼 당신을 찾아온 바선생의 말을 경청하는게 좋지
        않았을까요? 바선생은 밤마다 당신을 찾아올 것입니다. 그가 당신을 왜
        찾아왔는지 한번쯤은 들어보는게 좋을 것 같군요...
      </div>
      <button className={styles.previousBtn} onClick={previousClick}>
        다시 시작하기
      </button>
    </>
  );
};

export const BadEnding2 = () => {
  const navigate = useNavigate();

  const previousClick = () => {
    navigate("/");
  };
  return (
    <>
      <img className={styles.images} src={death} alt="" />
      <div className={styles.badEnding}>
        바선생은 당신의 맞팔 제안 거절에 상처받았습니다. 바선생은 당신을 기억할
        것입니다. 바선생의 손자의 손자의 손자의 손자의 손자의 손자의
        손자들까지도요.
      </div>
      <button className={styles.previousBtn} onClick={previousClick}>
        다시 시작하기
      </button>
    </>
  );
};

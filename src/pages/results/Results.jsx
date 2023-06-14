import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../module.css/pages.module.css";

export const Esfj = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.head}>바선생은 내친구!</div>
      <div className={styles.results}>
        당신은 바선생에게 훌륭한 여행 기억을 선물했습니다. 앞으로 남은
        여름휴가도 바선생과 함께 할 것 같네요.
      </div>
      <button
        className={styles.reStarts}
        onClick={() => {
          navigate("/");
        }}
      >
        테스트 다시하기
      </button>
    </>
  );
};

export const Estj = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.head}>바선생의 해결사!</div>
      <div className={styles.results}>
        당신은 여전히 이 상황이 말이 안된다고 생각하지만 바선생에게 최선을
        다합니다. 바선생은 앞으로도 어려운 일이 있을때마다 당신을 찾아올
        것입니다.
      </div>
      <button
        className={styles.reStarts}
        onClick={() => {
          navigate("/");
        }}
      >
        테스트 다시하기
      </button>
    </>
  );
};

export const Esfp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.head}>바선생아 사랑해!</div>
      <div className={styles.results}>
        당신은 바선생과 떠난 여행에서 바선생과 사랑에 빠졌습니다. 모르는게 없는
        스트릿 바선생은 당신의 이상형에 완전히 부합합니다!
      </div>
      <button
        className={styles.reStarts}
        onClick={() => {
          navigate("/");
        }}
      >
        테스트 다시하기
      </button>
    </>
  );
};

export const Estp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.head}>인생샷 건져주는 바선생 최고!</div>
      <div className={styles.results}>
        당신과 바선생은 즐거운 휴가를 보내고 서로의 인생샷을 찍어준 후
        일상생활로 복귀했습니다. 당신과 바선생은 인스타 핫플에 같이 놀러 다니며
        앞으로도 많은 인생샷을 건질 것입니다.
      </div>
      <button
        className={styles.reStarts}
        onClick={() => {
          navigate("/");
        }}
      >
        테스트 다시하기
      </button>
    </>
  );
};

export const Entp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.head}>의외로 환상의 짝궁.</div>
      <div className={styles.results}>
        당신은 묘하게 바선생과 잘 맞습니다. 수 틀리면 세스코를 부를 생각이지만
        어쨌거나 만나면 즐거운 친구입니다.
      </div>
      <button
        className={styles.reStarts}
        onClick={() => {
          navigate("/");
        }}
      >
        테스트 다시하기
      </button>
    </>
  );
};

export const Enfp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.head}>바선생아 사랑해! </div>
      <div className={styles.results}>
        당신은 바선생과 떠난 여행에서 바선생과 사랑에 빠졌습니다. 모르는게 없는
        스트릿 바선생은 당신의 도파민 분비를 책임집니다.
      </div>
      <button
        className={styles.reStarts}
        onClick={() => {
          navigate("/");
        }}
      >
        테스트 다시하기
      </button>
    </>
  );
};

export const Enfj = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.head}>바선생은 내친구!</div>
      <div className={styles.results}>
        당신은 바선생에게 훌륭한 여행 기억을 선물했습니다. 바선생은 당신에게
        고마움의 표시로 바선생의 가족들을 소개시켜 줬습니다. 이 동네에 모르는
        바선생이 없네요!
      </div>
      <button
        className={styles.reStarts}
        onClick={() => {
          navigate("/");
        }}
      >
        테스트 다시하기
      </button>
    </>
  );
};

export const Entj = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.head}>즐거운 사업 파트너!</div>
      <div className={styles.results}>
        바선생은 당신이 짜온 여행 계획에 감동해 사업 아이디어를 제안합니다.
        당신은 바선생 박멸 회사를 만들어 의뢰가 들어올 때마다 바선생에게 뒷돈을
        주고 다른 보금자리를 소개시켜 줍니다. 꽤나 쏠쏠하지 않나요?
      </div>
      <button
        className={styles.reStarts}
        onClick={() => {
          navigate("/");
        }}
      >
        테스트 다시하기
      </button>
    </>
  );
};

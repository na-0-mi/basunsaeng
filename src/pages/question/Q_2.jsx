import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

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
      <div>갑자기 바선생이 인스타 팔로우를 하자고 합니다. 당신의 선택은?</div>
      <Button onClick={buttonClick}>
        ㅇㅋ당여니할수있지~ 바선생과 인스타 맞팔을 한다.
      </Button>
      <Button onClick={overEndingClick}>
        바선생이 인스타를 왜..? 딱 잘라 거절한다.
      </Button>
      <Button onClick={previousClick}>뒤로가기</Button>
    </>
  );
};

export default Q_2;

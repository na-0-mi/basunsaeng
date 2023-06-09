import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Q_1 = () => {
  const navigate = useNavigate();

  const overEndingClick = () => {
    navigate("/BadEnding");
  };
  const buttonClick = () => {
    navigate("/q2");
  };
  return (
    <>
      <div>갑자기 바선생이 인스타 팔로우를 하자고 합니다. 당신의 선택은?</div>
      <Button onClick={overEndingClick}>
        ㅇㅋ당여니할수있지~ 바선생과 인스타 맞팔을 한다.
      </Button>
      <Button onClick={buttonClick}>
        바선생이 인스타를 왜..? 딱 잘라 거절한다.
      </Button>
    </>
  );
};

export default Q_1;

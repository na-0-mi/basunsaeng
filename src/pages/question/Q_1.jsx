import React from "react";
import Button from "../../components/Button";
import Q_2 from "./Q_2";

import { useNavigate } from "react-router-dom";

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
      <div>집에 바선생이 나타난 당신, 어떻게 하시겠습니까?</div>
      <Button onClick={overEndingClick}>
        당연히 죽여야지. 너무 징그러우니 빨리 죽인다
      </Button>
      <Button onClick={buttonClick}>바선생 너무 징그러워 도망가버린다.</Button>
      <Button onClick={previousClick}>뒤로가기</Button>
    </>
  );
};

export default Q_1;

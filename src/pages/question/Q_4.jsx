import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../cookies";

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
      <div>
        혼란스러운 머릿속을 정리하고 있는데, 바선생이 슬픈 가정사 이야기를
        합니다.
      </div>
      <Button onClick={button_1Click}>
        바선생의 입장도 좀 공감이 되는 것 같다. 바선생도 힘들었겠군..
      </Button>
      <Button onClick={button_2Click}>글쿤</Button>
      <Button onClick={previousClick}>뒤로가기</Button>
    </>
  );
};

export default Q_4;

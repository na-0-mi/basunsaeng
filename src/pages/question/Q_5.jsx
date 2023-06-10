import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../cookies";

const Q_5 = () => {
  const navigate = useNavigate();

  const button_1Click = () => {
    setCookie("result_3", "q5_1");
    navigate("/");
  };

  const button_2Click = () => {
    setCookie("result_3", "q5_2");
    navigate("/");
  };

  const previousClick = () => {
    navigate("/q4");
  };
  return (
    <>
      <div>
        이야기를 잘 들어주는 당신에게 감동한 바선생, 여름 휴가를 함께하자고
        제안합니다.
      </div>
      <Button onClick={button_1Click}>
        일년에 한번뿐인 여름휴가! 끝장나게 준비해서 (바선생과) 즐겁게 다녀와야지
      </Button>
      <Button onClick={button_2Click}>
        뭐 어떻게든 되지 않을까? 스트릿 출신 바선생이 잘 해줄거야 ~
      </Button>
      <Button onClick={previousClick}>뒤로가기</Button>
    </>
  );
};

export default Q_5;

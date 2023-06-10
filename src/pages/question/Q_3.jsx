import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../cookies";

const Q_3 = () => {
  const navigate = useNavigate();

  const button_1Click = () => {
    setCookie("result_1", "q3_1");
    navigate("/q4");
  };

  const button_2Click = () => {
    setCookie("result_1", "q3_2");
    navigate("/q4");
  };

  const previousClick = () => {
    navigate("/q2");
  };
  return (
    <>
      <div>
        아니 근데 이 상황이 말이 되나요? 바선생이 어떻게 말을 하는거지..
      </div>
      <Button onClick={button_1Click}>
        말도 안돼. 거대한 바선생에게 가위눌리는 꿈을 꾸고 있는 것 같다
      </Button>
      <Button onClick={button_2Click}>
        요즘 세상에 ai도 있는데 바선생이 말하는 것 정도야..
      </Button>
      <Button onClick={previousClick}>뒤로가기</Button>
    </>
  );
};

export default Q_3;

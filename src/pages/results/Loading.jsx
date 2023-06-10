import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Loading = () => {
  const navigate = useNavigate();

  // 선택지에 따라 알맞은 결과로 보내는 알고리즘
  const [cookies] = useCookies(["result_1", "result_2", "result_3"]);
  const getResult = () => {
    const resultMap = {
      a_1a_1a_1: "/Esfj",
      a_1a_2a_1: "/Estj",
      a_1a_1a_2: "/Esfp",
      a_1a_2a_2: "/Estp",
      a_2a_2a_2: "/Entp",
      a_2a_1a_2: "/Enfp",
      a_2a_1a_1: "/Enfj",
      a_2a_2a_1: "/Entj",
    };

    const resultKey = cookies.result_1 + cookies.result_2 + cookies.result_3;
    const resultPath = resultMap[resultKey];

    if (resultPath) {
      navigate(resultPath);
    }
  };
  return (
    <>
      <div>당신과 바선생의 운명은 ...?</div>
      <Button onClick={getResult}>결과보기</Button>
    </>
  );
};

export default Loading;

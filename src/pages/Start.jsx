import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Start = () => {
  const navigate = useNavigate();

  const buttonClick = () => {
    navigate("/q1");
  };
  return (
    <>
      <div>어느날 집에 바선생이 나타났다?!</div>
      <Button onClick={buttonClick}>시작하기!</Button>
    </>
  );
};

export default Start;

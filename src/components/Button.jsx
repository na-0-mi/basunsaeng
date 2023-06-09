import React from "react";
import styled from "styled-components";

const Button = ({ onClick, children, ...props }) => {
  return (
    <>
      <ReusableButton onClick={onClick} {...props}>
        {children}
      </ReusableButton>
    </>
  );
};
export default Button;

const ReusableButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "#f1f1f1"};
  color: ${(props) => props.color || "#333"};
  border: ${(props) => props.border || "1px solid #ccc"};
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

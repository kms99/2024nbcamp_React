import React from "react";

type valueType = "email" | "password" | "nickname";

export default function validationCheck(value: string, type: valueType) {
  // 이메일 정규식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // 닉네임 정규식 (최소 2글자, 최대 8글자)
  const nicknameRegex = /^.{2,8}$/;
  // 비밀번호 정규식 (최소 8자, 최소 하나의 문자 및 하나의 숫자)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  switch (type) {
    case "email":
      if (!emailRegex.test(value)) return false;
      break;
    case "password":
      if (!passwordRegex.test(value)) return false;
      break;
    case "nickname":
      if (!nicknameRegex.test(value)) return false;
      break;
    default:
      return true;
  }
  return true;
}

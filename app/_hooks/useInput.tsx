"use client";

import React, { useState } from "react";

export default function useInput(
  initialValue: string
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
  const [value, setValue] = useState<string>(initialValue);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target?.value); // 입력 값으로 value 상태를 즉시 업데이트
  };

  const resetHandler = () => {
    setValue(initialValue); // 초기 값으로 value 상태를 리셋
  };

  return [value, changeHandler, resetHandler]; // debouncedKeyword도 반환
}

"use client";

import React, { useState } from "react";

export default function useInput(
  initialValue: string
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
  const [value, setValue] = useState<string>(initialValue);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target?.value);
  };

  const resetHandler = () => {
    setValue(initialValue);
  };

  return [value, changeHandler, resetHandler];
}

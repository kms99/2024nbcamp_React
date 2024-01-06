"use client";

import React from "react";
import { ButtonType } from "./_buttonType";

type ButtonProps = {
  handler: null | ((...args: any[]) => void);
  type: ButtonType;
  text: string;
};

export default function Button({ handler, type, text }: ButtonProps) {
  const dummyHandler = () => {};
  return (
    <button onClick={handler || dummyHandler} className={`${type}`}>
      {text}
    </button>
  );
}

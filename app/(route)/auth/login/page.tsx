"use client";

import Button from "@/app/_components/Button";
import { ButtonType } from "@/app/_components/_buttonType";
import useAuth from "@/app/_hooks/query/useAuth";
import useInput from "@/app/_hooks/useInput";
import validationCheck from "@/app/utils/validationCheck";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();
  const { loginMutate } = useAuth();
  const [email, emailChangeHandler, resetEmail] = useInput("");
  const [password, passwordChangeHandler, resetPassword] = useInput("");

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validationCheck(email, "email")) {
      alert("유효하지 않은 이메일 입니다.");
      return;
    }

    if (!validationCheck(password, "password")) {
      alert(
        "비밀번호는 최소 8자 이상이며, 문자와 숫자를 각각 하나 이상 포함해야 합니다."
      );
      return;
    }

    loginMutate(
      { id: email, password },
      {
        onSuccess: () => {
          resetEmail();
          resetPassword();
          router.push("/");
        },
      }
    );
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2>로그인</h2>
      <form
        className="flex flex-col shadow-login-frame bg-color-bg-sub"
        onSubmit={loginHandler}
      >
        <label>이메일</label>
        <input
          placeholder="이메일 주소를 입력해주세요."
          type="email"
          className="text-lg w-96"
          onChange={emailChangeHandler}
          value={email}
        />

        <label>비밀번호</label>
        <input
          placeholder="비밀번호를 입력해주세요."
          type="password"
          className="text-lg w-96"
          onChange={passwordChangeHandler}
          value={password}
        />
        <Link href="/auth/forgotPassword">비밀번호를 잊으셨나요?</Link>
        <Button text="로그인" type={ButtonType.Main} handler={null} />
      </form>
      <section>
        <span>
          아직 회원이 아니신가요? <Link href="/auth/signup">회원가입</Link>
        </span>
      </section>
    </div>
  );
}

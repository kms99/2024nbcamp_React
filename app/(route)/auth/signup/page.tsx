"use client";

import Button from "@/app/_components/Button";
import { ButtonType } from "@/app/_components/_buttonType";
import useAuth from "@/app/_hooks/query/useAuth";
import useInput from "@/app/_hooks/useInput";
import Link from "next/link";

export default function Page() {
  const { signUpMutate } = useAuth();

  const [email, emailChangeHandler, resetEmail] = useInput("");
  const [password, passwordChangeHandler, resetPassword] = useInput("");
  const [passwordCheck, passwordCheckChangeHandler, resetPasswordCheck] =
    useInput("");
  const [nickname, nicknameChangeHandler, resetNickname] = useInput("");

  const signUpHandler = () => {
    // TODO: signUp validation
    signUpMutate({ id: email, password, nickname });

    resetEmail(), resetNickname(), resetPassword(), resetPasswordCheck();
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2>회원가입</h2>
      <form
        className="flex flex-col shadow-login-frame bg-color-bg-sub"
        onSubmit={signUpHandler}
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

        <label>비밀번호 확인</label>
        <input
          placeholder="비밀번호를 다시 입력해주세요."
          type="password"
          className="text-lg w-96"
          onChange={passwordCheckChangeHandler}
          value={passwordCheck}
        />

        <label>닉네임</label>
        <input
          placeholder="닉네임을 입력해주세요."
          type="text"
          className="text-lg w-96"
          onChange={nicknameChangeHandler}
          value={nickname}
        />
        <Button text="회원가입" type={ButtonType.Main} handler={null} />
      </form>
      <section>
        <span>
          이미 회원이신가요? <Link href="/auth/login">로그인</Link>
        </span>
      </section>
    </div>
  );
}

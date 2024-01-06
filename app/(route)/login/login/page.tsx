import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="flex flex-col items-center">
        <label>이메일</label>
        <input placeholder="이메일 주소를 입력해주세요." />
        <label>비밀번호</label>
        <input placeholder="비밀번호를 입력해주세요." />
        <Link href="/login/forgotPassword">비밀번호를 잊으셨나요?</Link>
        <button>로그인하기</button>
      </form>
    </div>
  );
}

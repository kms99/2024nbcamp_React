"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/login/login")}>
        로그인/회원가입
      </button>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/auth/login")}>
        로그인/회원가입
      </button>
    </div>
  );
}

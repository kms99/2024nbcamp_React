"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuth from "./_hooks/query/useAuth";
import { User, setUser } from "./_redux/modules/authSlice";
import { AppDispatch, RootState } from "./_redux/config";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const router = useRouter();
  const { getUserInfoMutate } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => {
    return state.authSlice.currentUser;
  });

  // 최초 실행시 local storage에 저장된 token 값 확인 후 유저 유효성 검증
  useEffect(() => {
    const savedUserToken = localStorage.getItem("token");
    if (savedUserToken)
      getUserInfoMutate(
        { accessToken: savedUserToken },
        {
          onSuccess: (response) => {
            const user: User = {
              accessToken: savedUserToken,
              userId: response.data.id,
              success: response.data.success,
              avatar: response.data.avatar,
              nickname: response.data.nickname,
            };
            dispatch(setUser(user));
          },
        }
      );
  }, []);

  return (
    <>
      {user.success && (
        <div>
          <button onClick={() => router.push("/auth/login")}>
            로그인/회원가입
          </button>
        </div>
      )}

      {user.success && (
        <section>
          <h1>유저정보</h1>
          <h2>유저이름 : {user.nickname}</h2>
          <span>유저ID : {user.userId}</span>
        </section>
      )}
    </>
  );
}

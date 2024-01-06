import React from "react";
import { useMutation } from "@tanstack/react-query";
import { signUpUser, getUser, loginUser, updateUser } from "@/app/_apis/auth";
import axios, { AxiosError } from "axios";

export default function useAuth() {
  const signUpMutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {},
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        alert(`회원가입실패 ${error.response.data.message}`);
      } else {
        alert(`회원가입실패 ${error.message}`);
      }
    },
  });

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      alert(`로그인성공 ${123}`);
      console.log("로그인 성공");
      // TODO: response.data 전역으로 관리 및 accessToken 로컬스토리지 저장
    },
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        alert(`로그인실패 ${error.response.data.message}`);
      } else {
        alert(`로그인실패 ${error.message}`);
      }
    },
  });

  const userInfoMutation = useMutation({
    mutationFn: getUser,
    onSuccess: () => {},
  });

  const profileUpdateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {},
  });

  return {
    signUpMutate: signUpMutation.mutate,
    loginMutate: loginMutation.mutate,
    getUserInfoMutate: userInfoMutation.mutate,
    updateProfileMutate: profileUpdateMutation.mutate,
  };
}

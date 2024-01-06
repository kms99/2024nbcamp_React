import React from "react";
import { useMutation } from "@tanstack/react-query";
import { signUpUser, getUser, loginUser } from "@/app/_apis/auth";
import { AxiosError, AxiosResponse } from "axios";
import { User } from "@/app/_redux/modules/authSlice";
import { toast } from "react-toastify";

export default function useAuth() {
  // 회원가입 Mutation
  const signUpMutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {
      toast.success("회원가입에 성공하였습니다. 로그인을 진행하세요");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        toast.error(`[회원가입실패] ${error.response.data.message}`);
      } else {
        toast.error(`[회원가입실패] ${error.message}`);
      }
    },
  });

  //   로그인 Mutation
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (response: AxiosResponse<User>) => {
      toast.success("로그인 성공하였습니다.");
      //   로컬스토리지 토큰 저장
      if (response.data.accessToken)
        localStorage.setItem("token", response.data.accessToken);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        toast.error(`[로그인실패] ${error.response.data.message}`);
      } else {
        toast.error(`[로그인실패] ${error.message}`);
      }
    },
  });

  //  유저정보를 가져오는 Mutation
  // 기존 데이터 타입과 다른 format이므로 타입 가공
  type FormatOmitUser = Omit<User, "userId" | "accessToken"> & { id: string };
  const userInfoMutation = useMutation({
    mutationFn: getUser,
    onSuccess: (response: AxiosResponse<FormatOmitUser>) => {},
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        toast.error(`[토큰만료] ${error.response.data.message}`);
      } else {
        toast.error(`[토큰만료] ${error.message}`);
      }
    },
  });

  return {
    signUpMutate: signUpMutation.mutate,
    loginMutate: loginMutation.mutate,
    getUserInfoMutate: userInfoMutation.mutate,
  };
}

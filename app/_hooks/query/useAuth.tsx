import React from "react";
import { useMutation } from "@tanstack/react-query";
import { signUpUser, getUser, loginUser, updateUser } from "@/app/_apis/auth";

export default function useAuth() {
  const signUpMutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {},
  });

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {},
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

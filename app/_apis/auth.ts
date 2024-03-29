import { authAxios } from "./axios";

// 회원가입

type signUpUserArgs = {
  id: string;
  password: string;
  nickname: string;
};

export const signUpUser = async ({
  id,
  password,
  nickname,
}: signUpUserArgs) => {
  const response = await authAxios.post("/register", {
    id,
    password,
    nickname,
  });
  return response;
};

// 로그인
type loginUserArgs = {
  id: string;
  password: string;
};

export const loginUser = async ({ id, password }: loginUserArgs) => {
  const response = await authAxios.post("/login?expiresIn=10s", {
    id,
    password,
  });
  return response;
};

// 회원 정보 확인
export const getUser = async ({ accessToken }: { accessToken: string }) => {
  const response = await authAxios.get("/user", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

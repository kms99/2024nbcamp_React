"use client";

import React, { PropsWithChildren, useState } from "react";
import { Provider } from "react-redux";
import store from "../_redux/config";

export default function ReduxProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}

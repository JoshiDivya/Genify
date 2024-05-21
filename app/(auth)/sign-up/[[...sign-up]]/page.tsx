import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignupPage = () => {
  return <SignUp path="/sign-up" />;
};

export default SignupPage;

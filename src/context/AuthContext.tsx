'use client'

import React, { createContext, useState } from "react";
import { AuthContextType } from "@/lib/AuthContextSchema";
import { signInRequest } from "@/services/auth";
import { SignInFormData } from "@/lib/SignInFormSchema";
import { setCookie } from 'nookies'
import { UserData } from "@/lib/UserSchema";
// import { redirect } from "next/navigation";

interface ComponentProps {
  children?: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: ComponentProps) {
  const [userState, setUserState] = useState<UserData | null>(null);
  const isAuthenticated = !!userState;
  
  async function signIn({ email, password }: SignInFormData) {
    const { status, token, user } = await signInRequest({ email, password });
    
    if (status == "success" && !!token && !!user) {
      setCookie(undefined, 'auth_form.token', token, {
        maxAge: 60 * 60 * 24  // 24h
      });

      setUserState(user);
      
      return { message: "sucess"};
    }

    return { message: "fail" };
  }

  return (
    <AuthContext.Provider value={{ userState, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
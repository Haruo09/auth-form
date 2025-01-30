'use server';

import { v4 as uuid } from "uuid";
import { SignInFormData } from "@/lib/SignInFormSchema";
import { BASE_URL } from "@/lib/BASE_URL";
import { UserData } from "@/lib/UserSchema";

export async function signInRequest({ email, password }: SignInFormData) {
  const encoded_email = encodeURIComponent(email)
  const encoded_pass = encodeURIComponent(password);
  const headers = new Headers()
  headers.set('content-type', 'application/json')

  const user: UserData = await fetch(BASE_URL + `api/sign-in?email=${encoded_email}&password=${encoded_pass}`, {
    method: 'GET',
    headers: headers
  }).then(response => response.json());


  if (user?.email != email || user?.password != password) {  // double checking for ensure it is correct;
    return {
      status: "fail",
      token: null,
      user: {}
    }
  }

  return {
    status: "success",
    token: uuid(),
    user: {
      name: user.name,
      email: user.email
    }
  }
}
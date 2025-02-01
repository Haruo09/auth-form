import LoginForm from '@/components/loginForm';
import { AuthProvider } from '@/context/AuthContext';
import React from 'react';

export default function Home() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  )
}

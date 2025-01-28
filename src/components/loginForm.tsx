'use client';

import React, { useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SignInFormSchema, SignInFormData } from '@/lib/SignInFormSchema';

export default function LoginForm() {
  const [ data, setData ] = useState('');

  const { 
    register, 
    formState: { errors }, 
    handleSubmit 

  } = useForm<SignInFormData>({
    resolver: zodResolver(SignInFormSchema)
  });

  function handleSignIn(formData: SignInFormData) {
    setData(JSON.stringify(formData));
  }

  return (
    <div className="flex flex-col justify-center align-center h-[100vh]">
      <Card className='w-full max-w-xs h-fit m-auto'>
        <form onSubmit={handleSubmit(handleSignIn)}>

          <CardHeader>
            <CardTitle>Sign In</CardTitle>
          </CardHeader>

          <CardContent>
            <Label htmlFor='name'>Email: </Label>
            <Input {...register("email")} type="email" />
            { !!errors?.email && <p className='text-red-700 text-sm mb-2'>{errors.email.message}</p> }

            <Label htmlFor='password'>Password: </Label>
            <Input {...register("password")} type="password" />
            { !!errors?.password && <p className='text-red-700 text-sm mb-2'>{errors.password.message}</p> }
            
          </CardContent>

          <CardFooter className='flex justify-between gap-2'>
            <Button type='submit' variant="default" className='w-full'>Submit</Button>
            
            <Button type='reset' variant="outline" className='w-full'>Cancel</Button>
          </CardFooter>

        </form>
      </Card>
      <code>
        {data}
      </code>
    </div>
  );
}

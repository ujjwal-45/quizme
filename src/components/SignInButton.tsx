'use client'

import { signIn } from 'next-auth/react'
import React from 'react'
import { Button } from './ui/button'
type Props = {
    text: string;
}

const SignInButton = ({ text }: Props) => {
   
  return (
      <div >
          <Button  onClick={() => {
              signIn('google').catch(console.error);
              
          }}>
              {text}
              
          </Button>

           
      </div>
      
  )
}

export default SignInButton
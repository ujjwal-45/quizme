'use client'
import type { User } from 'next-auth'
import React from 'react'
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'
import UserAvatar from './UserAvatar'

type Props = {
    user: Pick<User, 'name' | 'image' | 'email'>
}

const UserAccountNav = ({user}: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar className='w-10 h-10'
          user={{
          name: user.name || null,
          image: user.image || null,
       }} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-white text-black ' align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            {user.name && <p className='font-medium'>{user.name}</p>}
            {user.email && <p className='text-sm truncate w-[200px] text-slate=700'>{user.email}</p>}
          </div>

        </div>
        <DropdownMenuSeparator></DropdownMenuSeparator>

        <DropdownMenuItem asChild>
          <Link href="/"> Home
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onSelect={(event) =>{
          event.preventDefault();
          signOut().catch(console.error);
      }}
      className='cursor-pointer text-red-600' >
          Sign Out
          <LogOut className='w-4 h-4 ml-2' />

      </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav;
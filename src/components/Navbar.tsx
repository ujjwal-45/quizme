
import { getAuthSession } from '@/lib/nextauth'
import Link from 'next/link'

import SignInButton from './SignInButton'
import { ThemeToggle } from './ThemeToggle'

import UserAccountNav from './UserAccountNav'


const Navbar = async () => {
 const session = await getAuthSession();
    
    return (
        <div className='fixed inset-x-0 top-0 bg-white dark:bg-gray-900 z-[10] h-fit
        border-b border-slate-300 py-2'
        >
            <div className='flex items-center justify-between h-full gap-2 px-8 mx-auto '>
                <Link href="/" className='flex items-center gap-2' >
                    
                    <p className='rounded-lg border-2 border-b-4 border-r-4 border-black text-zinc-900 text-xl font-bold transition-all
                    hover:-translate-y-[2px] md:block dark:border-white p-2'>
                        Quizme
                    </p>
                        
                </Link>
            
                <div className='flex items-center bg-zinc-900 '>
                    {session?.user ? (
                    <UserAccountNav user={session.user} />
                    ):(
                            <SignInButton text={"signIn"} />
                            )}
                </div>
            </div>
        </div>
    )
  
}

export default Navbar
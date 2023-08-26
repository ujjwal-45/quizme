import QuizCreate from '@/components/QuizCreate';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

export const metadata = {
    title: "Quiz | Quizzical",
};

const Quizpage = async (props: Props) => {
    const session = await getAuthSession();
    
    if (!session?.user) {
        return redirect('/');
    }
    return (
        
            <QuizCreate />
       
    )
}

export default Quizpage
'use client'
import { Brain } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

type Props = {}

const QuizmeCard = (props: Props) => {
    const router = useRouter();
  return (
      <Card className='hover:cursor-pointer hover:opacity-75'
      onClick={() => router.push('/quiz')}
      >
          <CardHeader className='flex flex-row items-center justify-between'>
              <CardTitle className='text-2xl'>Quiz Me!</CardTitle>
              <Brain size={20} strokeWidth={2.5} />
          </CardHeader>

          <CardContent>
              <p className='text-sm text-muted-foreground'>Challenge yourself with a quiz</p>
          </CardContent>
    </Card>
  )
}

export default QuizmeCard
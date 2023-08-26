'use client'
import WordCloud from '@/components/WordCloud'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'

type Props = {}

const RecentsActivity = (props: Props) => {
  return (
     <Card className='col-span-4 lg:col-span-3'>
          <CardHeader >
              <CardTitle className='text-2xl font-bold'>Recent Activity</CardTitle>
              <CardDescription>
                 You have played a total of 9 quizzes
              </CardDescription>
          </CardHeader>
            
          <CardContent className='max-w-[480px] overflow-scroll'>
             
          </CardContent>
    </Card>
  )
}

export default RecentsActivity
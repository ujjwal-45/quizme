'use client'
import WordCloud from '@/components/WordCloud'
import { Flame } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'

type Props = {}

const HotTopics = (props: Props) => {
  return (
      <Card className='col-span-4'>
          <CardHeader className='flex flex-row items-center justify-between'>
              <CardTitle className='text-2xl font-bold'>Hot Topics</CardTitle>
              <Flame />
              
          </CardHeader>
          <CardContent >
              <p className='text-sm text-muted-foreground'>Click on a topic to start a quiz on it</p>
          </CardContent>
          {/* <CardDescription>
                  Click on a topic to start a quiz on it
              </CardDescription> */}
          <CardContent className='pl-2'>
              <WordCloud />
          </CardContent>
    </Card>
  )
}

export default HotTopics
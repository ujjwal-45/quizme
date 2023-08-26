import { HistoryIcon } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

type Props = {}

const HistoryCard = (props: Props) => {
  return (
      <Card className='hover:cursor-pointer hover:opacity-75'>
          <CardHeader className='flex flex-row items-center justify-between'>
              <CardTitle className='text-2xl font-bold'>History</CardTitle>
              <HistoryIcon size={20} strokeWidth={2.5} />
          </CardHeader>
          <CardContent>
              <p className='text-sm text-muted-foreground'>View your quiz history</p>
          </CardContent>
    </Card>
  )
}

export default HistoryCard
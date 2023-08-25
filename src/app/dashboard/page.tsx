import HistoryCard from '@/components/HistoryCard';
import QuizmeCard from '@/components/QuizmeCard';
import React from 'react'

type Props = {};

export const metadata = {
    title: "Dashboard | Quizzical",
};

const Dashboard = (props: Props) => {
  return (
      <main className='p-8 mx-auto max-w-7xl'>
          <div className='flex items-center'>
              <h2 className='mr-2 text-3xl font-bold tracking-tight'>Dashboard</h2>
          </div>
          <div className='grid gap-4 mt-4 md:grid-cols-2'>
              <QuizmeCard />
              <HistoryCard />
          </div>

          <div className='grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7'>
              
          </div>
      </main>
  )
}

export default Dashboard
import HistoryCard from '@/app/dashboard/HistoryCard';
import HotTopics from '@/app/dashboard/HotTopics';
import QuizmeCard from '@/app/dashboard/QuizmeCard';
import RecentsActivity from '@/app/dashboard/RecentsActivity';
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
              <HotTopics />
              <RecentsActivity />
          </div>
      </main>
  )
}

export default Dashboard
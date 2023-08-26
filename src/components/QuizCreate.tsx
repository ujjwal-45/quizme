'use client'
import { quizCreationSchema } from '@/schemas/form/quiz'
import { zodResolver } from "@hookform/resolvers/zod"
import React from 'react'
import { useForm } from 'react-hook-form'
import { number, z } from 'zod'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from "@/components/ui/input"
import { BookOpen, CopyCheck } from 'lucide-react'
import { Separator } from './ui/separator'

type Props = {}

type Input = z.infer<typeof quizCreationSchema>

const QuizCreate = (props: Props) => {
    const form = useForm<Input>({
        resolver: zodResolver(quizCreationSchema),
        defaultValues: {
            amount: 3,
            topic: "JavaScript",
            type: "mcq",
        }
    });
    
    function onSubmit(input: Input) {
        alert(JSON.stringify(input, null, 2));
    }
    form.watch();

  return (
      <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
          <Card>
              <CardHeader>
                  <CardTitle>
                      Create Quiz
                  </CardTitle>
                  <CardDescription>
                      Choose a topic
                  </CardDescription>
              </CardHeader>

              <CardContent>
                  <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                Please provide a topic
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
            />
            <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                      <Input placeholder="Enter an amount.." {...field}
                          type="number"
                          min={1}
                          max={8}
                          onChange={(e) => {
                              form.setValue("amount", parseInt(e.target.value));
                          }}
                      />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
                          />
                          <div className="flex justify-between">
                              <Button type="button" className='w-1/2 rounded-none rounded-l-lg'
                                  onClick={() => {
                                      form.setValue("type", "mcq");
                                  }}
                                  variant={
                                      form.getValues("type") === "mcq" ? "default" : "secondary"
                                  }
                              >
                                  <CopyCheck className='w-4 h-4 mr-2' />
                                  Multiple Choice
                              </Button>
                              <Separator orientation='vertical' />
                              <Button
                                  type="button"
                                   onClick={() => {
                                      form.setValue("type", "open-ended");
                                  }}
                                  variant={
                                      form.getValues("type") === "open-ended" ? "default" : "secondary"
                                  }
                                  className='w-1/2 rounded-none rounded-r-lg'>
                                  <BookOpen className='w-4 h-4 mr-2' />
                                  Open Ended
                              </Button>
                          </div>
        <Button className='bg-blue-200 text-black' type="submit">Submit</Button>
      </form>
    </Form>
              </CardContent>
          </Card>
    </div>
  )
}

export default QuizCreate
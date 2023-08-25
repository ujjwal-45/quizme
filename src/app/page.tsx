import SignInButton from "@/components/SignInButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();

  if (session?.user) {
    return redirect('/dashboard')
  }
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  ">
      <Card className="w-[400px] bg-blue-400">
        <CardHeader>
          <CardTitle>Welcome to Quizzical</CardTitle>  
        <CardDescription>
          Quizzical is An AI-powered quiz app is a cutting-edge application that combines the engaging nature of quizzes with the capabilities of artificial intelligence.
        </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign in with Google" />
        </CardContent>
      </Card>
    </div>
  )
}

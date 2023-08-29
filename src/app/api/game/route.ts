
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { quizCreationSchema } from "@/schemas/form/quiz";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const POST = async (req: Request, res: Response) => {

    try {
        const session = await getAuthSession();
        if (!session?.user) {
            return NextResponse.json(
                {
                    error: "You must be logged in to create a quiz",
                },
                {
                    status: 401,
                }
            );
        }
        const body = await req.json();
        const { amount, topic, type } = quizCreationSchema.parse(body);
        const game = await prisma.game.create({
            data: {
                gameType: type,
                timeStarted: new Date(),
                userId: session.user.id,
                topic
            }
        })
    }
    catch (error) {
        if (error instanceof ZodError) {
            return NextResponse.json({
                error: error.issues,
            },
                {
                    status: 400,
                });
        }
    }
  
}
import { z } from "zod"

export const quizCreationSchema = z.object({
    topic: z.string().min(4, { message: "Topic must be at least 4 characters long" }).max(60),
    type: z.enum(["mcq", "open-ended"]),
    amount: z.number().min(3).max(8),
});
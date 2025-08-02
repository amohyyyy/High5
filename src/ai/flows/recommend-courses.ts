'use server';

/**
 * @fileOverview Recommends courses to learners based on their profile and learning history.
 *
 * - recommendCourses - A function that recommends courses to learners.
 * - RecommendCoursesInput - The input type for the recommendCourses function.
 * - RecommendCoursesOutput - The return type for the recommendCourses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendCoursesInputSchema = z.object({
  learnerProfile: z
    .string()
    .describe('The profile of the learner, including their interests and goals.'),
  learningHistory: z
    .string()
    .describe('The learning history of the learner, including courses taken and progress.'),
  availableCourses: z
    .string()
    .describe('The list of available courses with descriptions.'),
});
export type RecommendCoursesInput = z.infer<typeof RecommendCoursesInputSchema>;

const RecommendCoursesOutputSchema = z.object({
  recommendedCourses: z
    .string()
    .describe('The list of recommended courses for the learner.'),
});
export type RecommendCoursesOutput = z.infer<typeof RecommendCoursesOutputSchema>;

export async function recommendCourses(input: RecommendCoursesInput): Promise<RecommendCoursesOutput> {
  return recommendCoursesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendCoursesPrompt',
  input: {schema: RecommendCoursesInputSchema},
  output: {schema: RecommendCoursesOutputSchema},
  prompt: `You are an AI course recommendation system. Recommend courses to the learner based on their profile and learning history.

Learner Profile: {{{learnerProfile}}}
Learning History: {{{learningHistory}}}
Available Courses: {{{availableCourses}}}

Recommended Courses:`,
});

const recommendCoursesFlow = ai.defineFlow(
  {
    name: 'recommendCoursesFlow',
    inputSchema: RecommendCoursesInputSchema,
    outputSchema: RecommendCoursesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

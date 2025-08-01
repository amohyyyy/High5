'use server';

import { recommendCourses } from '@/ai/flows/recommend-courses';
import { courses as allCourses, enrollments } from '@/lib/data';

export async function getRecommendations(formData: FormData) {
  const learnerProfile = formData.get('profile') as string;

  if (!learnerProfile) {
    return { success: false, error: 'Learner profile is required.' };
  }

  try {
    const learningHistory = enrollments.filter(e => e.userId === '1').map(enrollment => {
        const course = allCourses.find(c => c.id === enrollment.courseId);
        return `${course?.title} (Progress: ${enrollment.progress}%)`;
    }).join(', ') || 'No learning history yet.';

    const availableCourses = allCourses.map(course => `- ${course.title}: ${course.description}`).join('\n');

    const result = await recommendCourses({
      learnerProfile,
      learningHistory,
      availableCourses,
    });
    
    return { success: true, data: result.recommendedCourses };
  } catch (error) {
    console.error('AI recommendation error:', error);
    return { success: false, error: 'An unexpected error occurred while getting recommendations. Please try again.' };
  }
}

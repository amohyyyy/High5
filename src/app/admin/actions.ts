'use server';

import { revalidatePath } from 'next/cache';
import { courses, siteContent } from '@/lib/data';
import type { Course } from '@/lib/types';
import { z } from 'zod';

const courseSchema = z.object({
  title: z.string().min(1, 'العنوان مطلوب'),
  description: z.string().min(1, 'الوصف مطلوب'),
  instructor: z.string().min(1, 'المدرب مطلوب'),
  category: z.string().min(1, 'الفئة مطلوبة'),
  status: z.enum(['draft', 'published']),
  image: z.any().optional(),
});

export async function createCourse(prevState: { errors?: any; message?: string; }, formData: FormData) {
  const validatedFields = courseSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    instructor: formData.get('instructor'),
    category: formData.get('category'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const newCourse: Course = {
    id: (courses.length + 1).toString(),
    ...validatedFields.data,
    imageUrl: 'https://placehold.co/600x400.png',
    lessons: [],
    resources: [],
  };

  // In a real app, you'd save this to a database
  courses.push(newCourse);
  console.log('New course created:', newCourse);

  revalidatePath('/admin');
  revalidatePath('/');
  
  return {
    message: 'تم إنشاء الدورة بنجاح'
  }
}

const contentSchema = z.object({
  heroTitle: z.string().min(1, 'العنوان مطلوب'),
  heroSubtitle: z.string().min(1, 'الوصف مطلوب'),
  heroButton: z.string().min(1, 'نص الزر مطلوب'),
  coursesTitle: z.string().min(1, 'العنوان مطلوب'),
  searchPlaceholder: z.string().min(1, 'النص مطلوب'),
});

export async function updateContent(prevState: { errors?: any; message?: string; }, formData: FormData) {
  const validatedFields = contentSchema.safeParse({
    heroTitle: formData.get('heroTitle'),
    heroSubtitle: formData.get('heroSubtitle'),
    heroButton: formData.get('heroButton'),
    coursesTitle: formData.get('coursesTitle'),
    searchPlaceholder: formData.get('searchPlaceholder'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real app, you'd save this to a database
  siteContent.home.hero.title = validatedFields.data.heroTitle;
  siteContent.home.hero.subtitle = validatedFields.data.heroSubtitle;
  siteContent.home.hero.buttonText = validatedFields.data.heroButton;
  siteContent.home.courses.title = validatedFields.data.coursesTitle;
  siteContent.home.courses.searchPlaceholder = validatedFields.data.searchPlaceholder;

  revalidatePath('/');
  
  return {
    message: 'تم تحديث المحتوى بنجاح'
  }
}

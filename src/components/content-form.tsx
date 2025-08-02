'use client';

import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { siteContent } from '@/lib/data';

type ContentFormProps = {
  action: (state: { errors?: any; message?: string; }, formData: FormData) => Promise<{ errors?: any; message?:string; }>;
};

export function ContentForm({ action }: ContentFormProps) {
  const [state, formAction] = useActionState(action, { errors: {}, message: '' });
  const initialData = siteContent.home;

  return (
    <form action={formAction} className="space-y-6">
      <h2 className="text-xl font-bold font-headline border-b pb-2">قسم الهيرو (Hero)</h2>
      <div className="space-y-2">
        <Label htmlFor="heroTitle">العنوان الرئيسي</Label>
        <Input id="heroTitle" name="heroTitle" defaultValue={initialData?.hero.title} />
        {state?.errors?.heroTitle && <p className="text-sm text-destructive">{state.errors.heroTitle[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="heroSubtitle">العنوان الفرعي</Label>
        <Textarea id="heroSubtitle" name="heroSubtitle" rows={3} defaultValue={initialData?.hero.subtitle} />
        {state?.errors?.heroSubtitle && <p className="text-sm text-destructive">{state.errors.heroSubtitle[0]}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="heroButton">نص زر تصفح الدورات</Label>
        <Input id="heroButton" name="heroButton" defaultValue={initialData?.hero.buttonText} />
        {state?.errors?.heroButton && <p className="text-sm text-destructive">{state.errors.heroButton[0]}</p>}
      </div>

      <h2 className="text-xl font-bold font-headline border-b pb-2 mt-8">قسم الدورات</h2>
      <div className="space-y-2">
        <Label htmlFor="coursesTitle">عنوان القسم</Label>
        <Input id="coursesTitle" name="coursesTitle" defaultValue={initialData?.courses.title} />
        {state?.errors?.coursesTitle && <p className="text-sm text-destructive">{state.errors.coursesTitle[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="searchPlaceholder">نص حقل البحث</Label>
        <Input id="searchPlaceholder" name="searchPlaceholder" defaultValue={initialData?.courses.searchPlaceholder} />
        {state?.errors?.searchPlaceholder && <p className="text-sm text-destructive">{state.errors.searchPlaceholder[0]}</p>}
      </div>

      <Button type="submit" className="w-full">حفظ التغييرات</Button>
      {state?.message && <p className="text-sm text-green-600 mt-2">{state.message}</p>}
    </form>
  );
}

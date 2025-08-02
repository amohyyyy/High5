'use client';

import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type CourseFormProps = {
  action: (state: { errors?: any; message?: string; }, formData: FormData) => Promise<{ errors?: any; message?:string; }>;
  initialData?: any;
};

export function CourseForm({ action, initialData }: CourseFormProps) {
  const [state, formAction] = useActionState(action, { errors: {}, message: '' });

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">عنوان الدورة</Label>
        <Input id="title" name="title" defaultValue={initialData?.title} />
        {state?.errors?.title && <p className="text-sm text-destructive">{state.errors.title}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">الوصف</Label>
        <Textarea id="description" name="description" rows={4} defaultValue={initialData?.description} />
        {state?.errors?.description && <p className="text-sm text-destructive">{state.errors.description}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="instructor">المدرب</Label>
          <Input id="instructor" name="instructor" defaultValue={initialData?.instructor} />
          {state?.errors?.instructor && <p className="text-sm text-destructive">{state.errors.instructor}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">الفئة</Label>
          <Input id="category" name="category" defaultValue={initialData?.category} />
          {state?.errors?.category && <p className="text-sm text-destructive">{state.errors.category}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">صورة الدورة</Label>
        <Input id="image" name="image" type="file" />
        {state?.errors?.image && <p className="text-sm text-destructive">{state.errors.image}</p>}
      </div>

       <div className="space-y-2">
        <Label htmlFor="status">الحالة</Label>
        <Select name="status" defaultValue={initialData?.status || 'draft'}>
            <SelectTrigger id="status">
                <SelectValue placeholder="اختر الحالة" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="draft">مسودة</SelectItem>
                <SelectItem value="published">منشور</SelectItem>
            </SelectContent>
        </Select>
        {state?.errors?.status && <p className="text-sm text-destructive">{state.errors.status}</p>}
      </div>


      <Button type="submit" className="w-full">حفظ الدورة</Button>
      {state?.message && <p className="text-sm text-green-600 mt-2">{state.message}</p>}
    </form>
  );
}

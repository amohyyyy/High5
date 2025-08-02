import { CourseForm } from "@/components/course-form";
import { createCourse } from "../actions";

export default function NewCoursePage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold font-headline mb-6">إنشاء دورة جديدة</h1>
        <CourseForm action={createCourse} />
      </div>
    </div>
  );
}

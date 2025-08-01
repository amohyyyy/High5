import { courses, enrollments, users } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  const user = users[0];
  const userEnrollments = enrollments.filter(e => e.userId === user.id);

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">أهلاً بعودتك, {user.name}!</h1>
        <p className="text-muted-foreground">واصل رحلتك التعليمية.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold font-headline mb-4">دوراتي</h2>
        {userEnrollments.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {userEnrollments.map(enrollment => {
              const course = courses.find(c => c.id === enrollment.courseId);
              if (!course) return null;

              return (
                <Card key={enrollment.courseId}>
                  <CardHeader>
                    <CardTitle className="font-headline">{course.title}</CardTitle>
                    <CardDescription>بواسطة {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={enrollment.progress} className="w-full mb-2" />
                    <p className="text-sm text-muted-foreground">{enrollment.progress}% مكتمل</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href={`/courses/${course.id}`}>
                        {enrollment.progress < 100 ? 'متابعة التعلم' : 'مراجعة الدورة'}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-semibold">أنت غير مسجل في أي دورات بعد.</h3>
            <p className="text-muted-foreground mt-2">تصفح الكتالوج الخاص بنا للعثور على دورتك التالية.</p>
            <Button asChild className="mt-4 bg-accent hover:bg-accent/90">
              <Link href="/">تصفح الدورات</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

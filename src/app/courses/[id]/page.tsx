import { courses, enrollments } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle, CheckCircle2, Download, FileText, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === params.id);
  const enrollment = enrollments.find(e => e.courseId === params.id && e.userId === '1');

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary">
                الرئيسية
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronLeft className="h-5 w-5 text-gray-400" />
                <span className="mr-1 text-sm font-medium text-gray-500 md:mr-2">
                  {course.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
            <PlayCircle className="h-20 w-20 text-primary/50" />
          </div>

          {enrollment && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">تقدمك</h3>
              <Progress value={enrollment.progress} className="w-full" />
              <p className="text-sm text-muted-foreground mt-1">{enrollment.progress}% مكتمل</p>
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-2">{course.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">بواسطة {course.instructor}</p>
          <p className="text-base leading-relaxed">{course.description}</p>
          
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <Download className="h-6 w-6"/>
                موارد قابلة للتنزيل
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {course.resources.map(resource => (
                  <li key={resource.id}>
                    <a href={resource.url} download className="flex items-center gap-2 text-primary hover:underline">
                      <FileText className="h-5 w-5"/>
                      <span>{resource.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">محتوى الدورة</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible defaultValue={`item-${course.lessons[0].id}`}>
                {course.lessons.map(lesson => (
                  <AccordionItem key={lesson.id} value={`item-${lesson.id}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        {lesson.isCompleted ? (
                           <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : (
                           <PlayCircle className="h-5 w-5 text-muted-foreground" />
                        )}
                        <span className="text-right">{lesson.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pr-8">
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{lesson.duration}</span>
                        <Button variant="ghost" size="sm">ابدأ الدرس</Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
                    }

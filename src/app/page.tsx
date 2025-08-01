import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CourseCard } from '@/components/course-card';
import { courses, siteContent } from '@/lib/data';
import { Search } from 'lucide-react';

export default function HomePage() {
  const publishedCourses = courses.filter(c => c.status === 'published');
  const content = siteContent.home;
  
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  {content.hero.title}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {content.hero.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#courses"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  {content.hero.buttonText}
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              data-ai-hint="students learning"
              height="550"
              src="https://placehold.co/550x550.png"
              width="550"
            />
          </div>
        </div>
      </section>
      <section id="courses" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">{content.courses.title}</h2>
            <div className="w-full max-w-md">
              <form>
                <div className="relative">
                  <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={content.courses.searchPlaceholder}
                    className="w-full appearance-none bg-background pr-8 shadow-none"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {publishedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Course } from "@/lib/types"
import { Badge } from "./ui/badge"
import { BookUser } from "lucide-react"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/courses/${course.id}`} aria-label={course.title}>
          <Image
            alt={course.title}
            className="aspect-video w-full object-cover"
            height="338"
            src={course.imageUrl}
            width="600"
            data-ai-hint="online course"
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <Badge variant="secondary" className="mb-2">{course.category}</Badge>
        <CardTitle className="text-lg font-headline leading-tight">
          <Link href={`/courses/${course.id}`}>
            {course.title}
          </Link>
        </CardTitle>
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <BookUser className="h-4 w-4" />
            <span>{course.instructor}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90">
          <Link href={`/courses/${course.id}`}>عرض الدورة</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

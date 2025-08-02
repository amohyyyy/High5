export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  isCompleted: boolean;
}

export interface Resource {
  id: string;
  name: string;
  url: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  imageUrl: string;
  category: string;
  lessons: Lesson[];
  resources: Resource[];
  status: 'published' | 'draft';
}

export interface Enrollment {
  userId: string;
  courseId: string;
  progress: number;
}

export interface SiteContent {
  home: {
    hero: {
      title: string;
      subtitle: string;
      buttonText: string;
    };
    courses: {
      title: string;
      searchPlaceholder: string;
    };
  };
}

import type { User, Course, Enrollment, SiteContent } from './types';

export const users: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    avatarUrl: 'https://placehold.co/100x100.png',
  },
];

export let courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.',
    instructor: 'Dr. Evelyn Reed',
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'Web Development',
    lessons: [
      { id: 'l1', title: 'HTML Basics', duration: '25:10', videoUrl: '#', isCompleted: true },
      { id: 'l2', title: 'CSS Fundamentals', duration: '35:50', videoUrl: '#', isCompleted: true },
      { id: 'l3', title: 'JavaScript Essentials', duration: '45:20', videoUrl: '#', isCompleted: false },
    ],
    resources: [{ id: 'r1', name: 'Course Slides', url: '#' }, { id: 'r2', name: 'Code Samples', url: '#' }],
    status: 'published',
  },
  {
    id: '2',
    title: 'Advanced JavaScript',
    description: 'Dive deep into JavaScript concepts like closures, promises, and async/await.',
    instructor: 'John Smith',
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'Web Development',
    lessons: [
      { id: 'l1', title: 'Understanding Closures', duration: '30:15', videoUrl: '#', isCompleted: true },
      { id: 'l2', title: 'Mastering Promises', duration: '40:00', videoUrl: '#', isCompleted: false },
    ],
    resources: [{ id: 'r1', name: 'Exercise Files', url: '#' }],
    status: 'published',
  },
  {
    id: '3',
    title: 'Data Science with Python',
    description: 'Explore data analysis, visualization, and machine learning using Python.',
    instructor: 'Maria Garcia',
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'Data Science',
    lessons: [
      { id: 'l1', title: 'NumPy and Pandas', duration: '55:00', videoUrl: '#', isCompleted: true },
      { id: 'l2', title: 'Matplotlib for Visualization', duration: '48:30', videoUrl: '#', isCompleted: true },
      { id: 'l3', title: 'Intro to Scikit-Learn', duration: '62:10', videoUrl: '#', isCompleted: true },
    ],
    resources: [{ id: 'r1', name: 'Jupyter Notebooks', url: '#' }],
    status: 'published',
  },
  {
    id: '4',
    title: 'UI/UX Design Principles',
    description: 'Learn the core principles of user interface and user experience design.',
    instructor: 'Chen Wang',
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'Design',
    lessons: [
      { id: 'l1', title: 'User Research', duration: '40:10', videoUrl: '#', isCompleted: false },
      { id: 'l2', title: 'Wireframing & Prototyping', duration: '50:25', videoUrl: '#', isCompleted: false },
    ],
    resources: [{ id: 'r1', name: 'Design Templates', url: '#' }],
    status: 'draft',
  },
];

export const enrollments: Enrollment[] = [
  { userId: '1', courseId: '1', progress: 66 },
  { userId: '1', courseId: '3', progress: 100 },
];

export let siteContent: SiteContent = {
  home: {
    hero: {
      title: 'أطلق العنان لإمكانياتك مع High5',
      subtitle: 'استكشف عالمًا من المعرفة من خلال كتالوج الدورات التدريبية الشامل الخاص بنا. ابحث عن شغفك وابدأ التعلم اليوم.',
      buttonText: 'تصفح الدورات',
    },
    courses: {
      title: 'دوراتنا',
      searchPlaceholder: 'ابحث عن الدورات...',
    },
  },
};

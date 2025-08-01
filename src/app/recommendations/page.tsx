'use client';

import { useState } from 'react';
import { getRecommendations } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function RecommendationsPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setRecommendations(null);

    const formData = new FormData(event.currentTarget);
    const result = await getRecommendations(formData);

    if (result.success) {
      setRecommendations(result.data);
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 max-w-2xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">موصي الدورات بالذكاء الاصطناعي</h1>
        <p className="text-muted-foreground mt-2">
          أخبرنا عن اهتماماتك وأهدافك، وسيقترح الذكاء الاصطناعي لدينا الدورات المثالية لك.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ملفك التعليمي</CardTitle>
          <CardDescription>صف اهتماماتك، وماذا تريد أن تتعلم، وأي خبرة سابقة.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full gap-4">
              <Textarea
                name="profile"
                placeholder="على سبيل المثال، أنا مبتدئ مهتم ببناء تطبيقات الجوال. لدي بعض الخبرة في بايثون ولكن ليس في أطر عمل تطوير الجوال."
                rows={5}
                required
                disabled={loading}
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    الحصول على التوصيات...
                  </>
                ) : (
                  <>
                    <Lightbulb className="ml-2 h-4 w-4" />
                    أوصني بدورات
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mt-6">

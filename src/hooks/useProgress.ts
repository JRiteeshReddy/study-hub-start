
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export interface UserProgress {
  chapter_number: number;
  is_completed: boolean;
  completed_at?: string;
}

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchProgress = async () => {
    if (!user) {
      setProgress([]);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('course_progress')
        .select('chapter_number, is_completed, completed_at')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching progress:', error);
        toast({
          title: "Error",
          description: "Failed to load progress",
          variant: "destructive"
        });
      } else {
        setProgress(data || []);
      }
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const markChapterComplete = async (chapterNumber: number) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('course_progress')
        .upsert({
          user_id: user.id,
          chapter_number: chapterNumber,
          is_completed: true,
          completed_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (error) {
        console.error('Error marking chapter complete:', error);
        toast({
          title: "Error",
          description: "Failed to save progress",
          variant: "destructive"
        });
      } else {
        // Refetch progress to update state
        await fetchProgress();
      }
    } catch (error) {
      console.error('Error marking chapter complete:', error);
    }
  };

  const getCompletedChapters = (): number[] => {
    return progress
      .filter(p => p.is_completed)
      .map(p => p.chapter_number);
  };

  const isChapterCompleted = (chapterNumber: number): boolean => {
    return progress.some(p => p.chapter_number === chapterNumber && p.is_completed);
  };

  const isCourseCompleted = (): boolean => {
    const completedChapters = getCompletedChapters();
    return completedChapters.length === 5;
  };

  useEffect(() => {
    fetchProgress();
  }, [user]);

  return {
    progress,
    loading,
    markChapterComplete,
    getCompletedChapters,
    isChapterCompleted,
    isCourseCompleted,
    refetch: fetchProgress
  };
};

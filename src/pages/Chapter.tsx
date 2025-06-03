
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Play } from 'lucide-react';
import ChapterNavigation from '@/components/ChapterNavigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useProgress } from '@/hooks/useProgress';
import { useToast } from '@/hooks/use-toast';

const chapters = [
  "Meet ChatGPT: Your Over-Smart Digital Homie",
  "DeepSeek: The Chill Cousin of ChatGPT", 
  "What is Lovable.dev & Bolt.new – Zero Code, Full Power",
  "Lovable.dev vs Bolt.new – Choose Your Fighter",
  "From Idea to App – Problem Breakdown"
];

const Chapter = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const currentChapter = parseInt(chapterId || '1');
  const { getCompletedChapters, markChapterComplete, loading, isChapterCompleted } = useProgress();
  const { toast } = useToast();

  const completedChapters = getCompletedChapters();
  const isCompleted = isChapterCompleted(currentChapter);

  const handleMarkComplete = async () => {
    await markChapterComplete(currentChapter);
    
    toast({
      title: "Chapter Complete!",
      description: `Chapter ${currentChapter} has been marked as completed.`,
    });

    if (currentChapter < 5) {
      // Navigate to next chapter
      setTimeout(() => {
        navigate(`/chapter/${currentChapter + 1}`);
      }, 1000);
    } else {
      // Finished all chapters, go back to home
      toast({
        title: "Course Complete!",
        description: "Congratulations! You've completed the entire course.",
      });
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  const handleBackToCourse = () => {
    navigate('/course');
  };

  // Check if user has access to this chapter
  const hasAccess = completedChapters.includes(currentChapter) || 
                   currentChapter <= Math.max(...completedChapters, 0) + 1;

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="glass-card p-8 text-center">
            <div className="animate-spin w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading...</p>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  if (!hasAccess && currentChapter > 1) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
          <div className="glass-card p-12 text-center max-w-lg">
            <div className="text-6xl mb-6">🔒</div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Chapter Locked
            </h1>
            <p className="text-slate-300 text-lg mb-8">
              Complete the previous chapters to unlock this content.
            </p>
            <Button 
              onClick={handleBackToCourse} 
              className="neon-button text-white px-8 py-3"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Course
            </Button>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header with navigation */}
          <div className="flex items-center justify-between mb-8">
            <ChapterNavigation 
              currentChapter={currentChapter} 
              completedChapters={completedChapters} 
            />
            <Button 
              onClick={handleBackToCourse}
              variant="outline"
              className="flex items-center gap-2 bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 text-white rounded-xl px-6 py-3"
            >
              <ArrowLeft size={20} />
              Back to Course
            </Button>
          </div>
          
          {/* Chapter content */}
          <div className="text-center">
            {/* Chapter Header */}
            <div className="mb-8">
              <div className="flex justify-center items-center gap-4 mb-4">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  Chapter {currentChapter}
                </span>
                {isCompleted && (
                  <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium flex items-center gap-2">
                    <CheckCircle size={16} />
                    Completed
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                {chapters[currentChapter - 1]}
              </h1>
            </div>
            
            {/* Video Container */}
            <div className="glass-card p-12 mb-12 mx-auto max-w-3xl">
              <p className="text-slate-300 text-lg mb-8">
                This is where the video content will be displayed.
              </p>
              
              <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-slate-700">
                <div className="text-center">
                  <Play className="text-blue-400 w-16 h-16 mx-auto mb-4" />
                  <span className="text-slate-400 text-lg">Video Content Placeholder</span>
                </div>
                <div className="absolute inset-0 bg-blue-500/5 rounded-2xl"></div>
              </div>
            </div>
            
            {/* Action button */}
            <Button 
              onClick={handleMarkComplete}
              className={`px-12 py-4 text-lg font-semibold transition-all duration-300 ${
                isCompleted 
                  ? 'neon-button-green text-white' 
                  : 'neon-button text-white'
              }`}
              size="lg"
            >
              {isCompleted 
                ? (currentChapter < 5 ? 'Continue to Next Chapter' : 'Course Complete!')
                : (currentChapter < 5 ? 'Complete & Next Chapter' : 'Finish Course')
              }
            </Button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Chapter;

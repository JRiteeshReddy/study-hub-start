import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ChapterNavigation from '@/components/ChapterNavigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useProgress } from '@/hooks/useProgress';

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
  const { getCompletedChapters, markChapterComplete, loading } = useProgress();

  const completedChapters = getCompletedChapters();

  const handleMarkComplete = async () => {
    await markChapterComplete(currentChapter);

    if (currentChapter < 5) {
      // Navigate to next chapter
      navigate(`/chapter/${currentChapter + 1}`);
    } else {
      // Finished all chapters, go back to home
      navigate('/');
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mt-20">
              <p className="text-lg text-gray-600">Loading...</p>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  if (!hasAccess && currentChapter > 1) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mt-20">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Chapter Locked
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Please complete the previous chapters to unlock this one.
              </p>
              <Button onClick={handleBackToCourse} variant="outline">
                <ArrowLeft size={20} className="mr-2" />
                Back to Course
              </Button>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
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
              className="flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to Course
            </Button>
          </div>
          
          {/* Chapter content */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Chapter {currentChapter}: {chapters[currentChapter - 1]}
            </h1>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8 mx-auto max-w-2xl">
              <p className="text-lg text-gray-600 mb-8">
                This is where the video will appear later.
              </p>
              
              <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-8">
                <span className="text-gray-500">Video Placeholder</span>
              </div>
            </div>
            
            {/* Action button */}
            <Button 
              onClick={handleMarkComplete}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              size="lg"
            >
              {currentChapter < 5 ? 'Next Chapter' : 'Finish Course'}
            </Button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Chapter;

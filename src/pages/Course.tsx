
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '@/hooks/useProgress';
import ProtectedRoute from '@/components/ProtectedRoute';
import { CheckCircle, Circle, Play, ArrowLeft } from 'lucide-react';
import ProfileDropdown from '@/components/ProfileDropdown';

const chapters = [
  "Meet ChatGPT: Your Over-Smart Digital Homie",
  "DeepSeek: The Chill Cousin of ChatGPT",
  "What is Lovable.dev & Bolt.new – Zero Code, Full Power",
  "Lovable.dev vs Bolt.new – Choose Your Fighter",
  "From Idea to App – Problem Breakdown"
];

const Course = () => {
  const navigate = useNavigate();
  const { getCompletedChapters, isChapterCompleted } = useProgress();
  
  const completedChapters = getCompletedChapters();
  const progressPercentage = (completedChapters.length / 5) * 100;

  const handleStartCourse = () => {
    const nextChapter = completedChapters.length < 5 ? completedChapters.length + 1 : 1;
    navigate(`/chapter/${nextChapter}`);
  };

  const handleChapterClick = (chapterIndex: number) => {
    const chapterNumber = chapterIndex + 1;
    if (isChapterCompleted(chapterNumber) || chapterNumber <= Math.max(...completedChapters, 0) + 1) {
      navigate(`/chapter/${chapterNumber}`);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black page-transition">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                className="modern-button-outline p-2"
              >
                <ArrowLeft size={20} />
              </Button>
              <div className="logo-container">
                <img 
                  src="/lovable-uploads/b4485f63-9eaf-4fd5-86c3-97fe20397c1d.png" 
                  alt="DevPanda Logo" 
                  className="w-8 h-8 rounded"
                />
                <h1 className="text-2xl font-bold text-white">Course</h1>
              </div>
            </div>
            <ProfileDropdown />
          </div>

          {/* Course Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Development Course
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Master the tools that are shaping the future of software development
            </p>
            
            {/* Progress Bar */}
            <div className="glass-card p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold">Course Progress</span>
                <span className="text-white font-bold">{completedChapters.length}/5</span>
              </div>
              <Progress 
                value={progressPercentage} 
                className="h-3 mb-2 bg-gray-800"
              />
              <p className="text-gray-400 text-sm">{Math.round(progressPercentage)}% Complete</p>
            </div>
          </div>

          {/* Chapter List */}
          <div className="space-y-4 mb-12">
            {chapters.map((chapter, index) => {
              const chapterNumber = index + 1;
              const isCompleted = isChapterCompleted(chapterNumber);
              const isAccessible = isCompleted || chapterNumber <= Math.max(...completedChapters, 0) + 1;
              const isNext = chapterNumber === Math.max(...completedChapters, 0) + 1 && !isCompleted;
              
              return (
                <Card 
                  key={index}
                  className={`glass-card transition-all duration-300 cursor-pointer group chapter-transition ${
                    isAccessible ? 'hover:scale-[1.02] hover:shadow-2xl' : 'opacity-50 cursor-not-allowed'
                  } ${isNext ? 'ring-2 ring-white/20' : ''}`}
                  onClick={() => handleChapterClick(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        isCompleted 
                          ? 'bg-white text-black' 
                          : isNext
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-800 text-gray-400'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle size={24} />
                        ) : isNext ? (
                          <Play size={20} />
                        ) : (
                          <Circle size={20} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-gray-400 text-sm font-medium">
                            Chapter {chapterNumber}
                          </span>
                          {isNext && (
                            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium">
                              Next
                            </span>
                          )}
                          {isCompleted && (
                            <span className="px-3 py-1 bg-white text-black rounded-full text-xs font-medium">
                              Completed
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-white leading-tight group-hover:text-gray-300 transition-colors">
                          {chapter}
                        </h3>
                      </div>
                      {isAccessible && (
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          <Play size={20} />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Start/Continue Button */}
          <div className="text-center pb-12">
            <Button 
              onClick={handleStartCourse}
              className="modern-button px-12 py-4 text-lg font-semibold"
              size="lg"
            >
              {completedChapters.length > 0 ? 'Continue Learning' : 'Start Course'}
            </Button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Course;

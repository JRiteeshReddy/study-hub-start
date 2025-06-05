import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '@/hooks/useProgress';
import ProtectedRoute from '@/components/ProtectedRoute';
import { CheckCircle, Circle, Play, ArrowLeft, BookOpen, Clock, Target } from 'lucide-react';
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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="min-h-screen bg-black page-transition relative">
        {/* Floating elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full floating-element"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full floating-element delayed-animation"></div>
        </div>

        <div className="max-w-6xl mx-auto responsive-container relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between py-4 sm:py-6">
            <div className="flex items-center gap-3 sm:gap-4">
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
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded"
                />
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Course</h1>
              </div>
            </div>
            <ProfileDropdown />
          </div>

          {/* Course Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
              Basics of AI
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8">
              Master the tools that are shaping the future of software development
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
              <div className="glass-card p-4 text-center card-hover-effect">
                <BookOpen className="mx-auto mb-2 text-white/80" size={20} />
                <div className="text-lg font-bold text-white">{chapters.length}</div>
                <div className="text-gray-400 text-xs">Chapters</div>
              </div>
              <div className="glass-card p-4 text-center card-hover-effect">
                <Target className="mx-auto mb-2 text-white/80" size={20} />
                <div className="text-lg font-bold text-white">{completedChapters.length}</div>
                <div className="text-gray-400 text-xs">Completed</div>
              </div>
              <div className="glass-card p-4 text-center card-hover-effect">
                <Clock className="mx-auto mb-2 text-white/80" size={20} />
                <div className="text-lg font-bold text-white">{Math.round(progressPercentage)}%</div>
                <div className="text-gray-400 text-xs">Progress</div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="glass-card p-4 sm:p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold text-sm sm:text-base">Course Progress</span>
                <span className="text-white font-bold text-sm sm:text-base">{completedChapters.length}/5</span>
              </div>
              <Progress 
                value={progressPercentage} 
                className="h-2 sm:h-3 mb-2 bg-gray-800 progress-bar-glow"
              />
              <p className="text-gray-400 text-xs sm:text-sm">{Math.round(progressPercentage)}% Complete</p>
            </div>
          </div>

          {/* Chapter List */}
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            {chapters.map((chapter, index) => {
              const chapterNumber = index + 1;
              const isCompleted = isChapterCompleted(chapterNumber);
              const isAccessible = isCompleted || chapterNumber <= Math.max(...completedChapters, 0) + 1;
              const isNext = chapterNumber === Math.max(...completedChapters, 0) + 1 && !isCompleted;
              
              return (
                <Card 
                  key={index}
                  className={`glass-card transition-all duration-300 cursor-pointer group chapter-transition card-hover-effect ${
                    isAccessible ? '' : 'opacity-50 cursor-not-allowed'
                  } ${isNext ? 'ring-2 ring-white/30' : ''}`}
                  onClick={() => handleChapterClick(index)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCompleted 
                          ? 'bg-white text-black' 
                          : isNext
                          ? 'bg-white/20 text-white ring-2 ring-white/30'
                          : 'bg-gray-800 text-gray-400'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle size={20} />
                        ) : isNext ? (
                          <Play size={16} />
                        ) : (
                          <Circle size={16} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-gray-400 text-xs sm:text-sm font-medium">
                            Chapter {chapterNumber}
                          </span>
                          {isNext && (
                            <span className="px-2 py-1 bg-white/20 text-white rounded-full text-xs font-medium">
                              Next
                            </span>
                          )}
                          {isCompleted && (
                            <span className="px-2 py-1 bg-white text-black rounded-full text-xs font-medium">
                              ✓ Done
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-white leading-tight group-hover:text-gray-300 transition-colors">
                          {chapter}
                        </h3>
                      </div>
                      {isAccessible && (
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          <Play size={16} className="sm:w-5 sm:h-5" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Start/Continue Button */}
          <div className="text-center pb-8 sm:pb-12">
            <Button 
              onClick={handleStartCourse}
              className="modern-button px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold"
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

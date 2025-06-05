
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useProgress } from '@/hooks/useProgress';
import { BookOpen, Trophy, Clock, Sparkles, Zap, Target } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';

interface HomeScreenProps {
  onStartCourse: () => void;
  onTakeExam: () => void;
  isExamUnlocked?: boolean;
}

const HomeScreen = ({
  onStartCourse,
  onTakeExam,
  isExamUnlocked = false
}: HomeScreenProps) => {
  const { getCompletedChapters } = useProgress();
  const completedChapters = getCompletedChapters();
  const progressPercentage = completedChapters.length / 5 * 100;

  return (
    <div className="min-h-screen bg-black page-transition relative">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full floating-element"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full floating-element delayed-animation"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white/10 rounded-full floating-element" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto responsive-container relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center py-4 sm:py-6">
          <div className="logo-container">
            <img 
              src="/lovable-uploads/b4485f63-9eaf-4fd5-86c3-97fe20397c1d.png" 
              alt="DevPanda Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg shadow-lg" 
            />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">DevPanda</h1>
          </div>
          <ProfileDropdown />
        </div>

        {/* Main Content */}
        <div className="py-8 sm:py-12 lg:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="relative">
              <h1 className="responsive-heading font-bold text-white mb-4 sm:mb-6">
                Learning Hub
              </h1>
              <div className="absolute -top-4 -right-4 text-white/20">
                <Sparkles size={24} className="floating-element" />
              </div>
            </div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 responsive-text">
              Master the future of AI development with our comprehensive course
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
            <div className="glass-card p-4 sm:p-6 text-center card-hover-effect">
              <Target className="mx-auto mb-2 text-white/80" size={24} />
              <div className="text-xl sm:text-2xl font-bold text-white">{completedChapters.length}</div>
              <div className="text-gray-400 text-sm">Chapters Done</div>
            </div>
            <div className="glass-card p-4 sm:p-6 text-center card-hover-effect">
              <Zap className="mx-auto mb-2 text-white/80" size={24} />
              <div className="text-xl sm:text-2xl font-bold text-white">{Math.round(progressPercentage)}%</div>
              <div className="text-gray-400 text-sm">Progress</div>
            </div>
            <div className="glass-card p-4 sm:p-6 text-center card-hover-effect">
              <Sparkles className="mx-auto mb-2 text-white/80" size={24} />
              <div className="text-xl sm:text-2xl font-bold text-white">{5 - completedChapters.length}</div>
              <div className="text-gray-400 text-sm">Remaining</div>
            </div>
          </div>

          {/* Progress Section */}
          {completedChapters.length > 0 && (
            <div className="glass-card p-6 sm:p-8 mb-12 sm:mb-16 max-w-2xl mx-auto card-hover-effect">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="text-white" size={24} />
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Your Progress</h3>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 bg-gray-800 rounded-full h-3 sm:h-4 overflow-hidden progress-bar-glow">
                  <div 
                    className="h-full bg-white transition-all duration-1000 rounded-full" 
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">
                  {completedChapters.length}/5 Chapters
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                {progressPercentage}% Complete
              </p>
            </div>
          )}

          {/* Action Cards */}
          <div className="responsive-grid max-w-4xl mx-auto">
            {/* Start Course Card */}
            <Card className="glass-card card-hover-effect cursor-pointer group">
              <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="mx-auto text-white floating-element" size={48} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Start Learning
                </h2>
                <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
                  Begin your journey with interactive AI development lessons
                </p>
                <Button 
                  onClick={onStartCourse} 
                  className="modern-button w-full py-3 sm:py-4 text-base sm:text-lg" 
                  size="lg"
                >
                  {completedChapters.length > 0 ? 'Continue Course' : 'Start Course'}
                </Button>
              </CardContent>
            </Card>

            {/* Course Exam Card */}
            <Card className={`glass-card cursor-pointer group card-hover-effect ${
              isExamUnlocked ? '' : 'opacity-60'
            }`}>
              <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Trophy 
                    className={`mx-auto floating-element ${
                      isExamUnlocked ? 'text-white' : 'text-gray-600'
                    }`} 
                    size={48} 
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Final Exam
                </h2>
                <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
                  {isExamUnlocked 
                    ? 'Test your knowledge and earn your certification' 
                    : 'Complete all chapters to unlock the final exam'
                  }
                </p>
                <Button 
                  onClick={isExamUnlocked ? onTakeExam : undefined} 
                  disabled={!isExamUnlocked} 
                  className={`w-full py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 ${
                    isExamUnlocked 
                      ? 'modern-button' 
                      : 'bg-gray-800 text-gray-400 cursor-not-allowed'
                  }`} 
                  size="lg"
                >
                  {isExamUnlocked ? 'Take Exam' : 'Locked'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="flex justify-center items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/b4485f63-9eaf-4fd5-86c3-97fe20397c1d.png" 
                alt="DevPanda Logo" 
                className="w-6 h-6 sm:w-8 sm:h-8 rounded opacity-50 floating-element" 
              />
              <p className="text-gray-500 text-sm sm:text-base">
                Ready to shape the future? Let's get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

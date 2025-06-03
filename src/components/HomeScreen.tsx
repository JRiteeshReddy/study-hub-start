import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useProgress } from '@/hooks/useProgress';
import { BookOpen, Trophy, Clock } from 'lucide-react';
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
  const {
    getCompletedChapters
  } = useProgress();
  const completedChapters = getCompletedChapters();
  const progressPercentage = completedChapters.length / 5 * 100;
  return <div className="min-h-screen bg-black page-transition">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center py-6">
          <div className="logo-container">
            <img src="/lovable-uploads/b4485f63-9eaf-4fd5-86c3-97fe20397c1d.png" alt="DevPanda Logo" className="w-12 h-12 rounded-lg" />
            <h1 className="text-2xl font-bold text-white">DevPanda</h1>
          </div>
          <ProfileDropdown />
        </div>

        {/* Main Content */}
        <div className="py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Learning Hub
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Master the future of AI development with our comprehensive course
            </p>
            
            {/* Logo Showcase */}
            <div className="flex justify-center mb-12">
              
            </div>
          </div>

          {/* Progress Section */}
          {completedChapters.length > 0 && <div className="glass-card p-8 mb-16 max-w-2xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="text-white" size={24} />
                <h3 className="text-2xl font-semibold text-white">Your Progress</h3>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 bg-gray-800 rounded-full h-4 overflow-hidden">
                  <div className="h-full bg-white transition-all duration-1000" style={{
                width: `${progressPercentage}%`
              }} />
                </div>
                <span className="text-white font-semibold min-w-0">
                  {completedChapters.length}/5 Chapters
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                {progressPercentage}% Complete
              </p>
            </div>}

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Start Course Card */}
            <Card className="glass-card transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group">
              <CardContent className="p-10 text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="mx-auto text-white" size={64} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Start Learning
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Begin your journey with interactive AI development lessons
                </p>
                <Button onClick={onStartCourse} className="modern-button w-full py-4 text-lg" size="lg">
                  {completedChapters.length > 0 ? 'Continue Course' : 'Start Course'}
                </Button>
              </CardContent>
            </Card>

            {/* Course Exam Card */}
            <Card className={`glass-card transition-all duration-500 cursor-pointer group ${isExamUnlocked ? 'hover:scale-105 hover:shadow-2xl' : 'opacity-60'}`}>
              <CardContent className="p-10 text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className={`mx-auto ${isExamUnlocked ? 'text-white' : 'text-gray-600'}`} size={64} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Final Exam
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                  {isExamUnlocked ? 'Test your knowledge and earn your certification' : 'Complete all chapters to unlock the final exam'}
                </p>
                <Button onClick={isExamUnlocked ? onTakeExam : undefined} disabled={!isExamUnlocked} className={`w-full py-4 text-lg transition-all duration-300 ${isExamUnlocked ? 'modern-button' : 'bg-gray-800 text-gray-400 cursor-not-allowed'}`} size="lg">
                  {isExamUnlocked ? 'Take Exam' : 'Locked'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center mt-16">
            <div className="flex justify-center items-center gap-3 mb-4">
              <img src="/lovable-uploads/b4485f63-9eaf-4fd5-86c3-97fe20397c1d.png" alt="DevPanda Logo" className="w-8 h-8 rounded opacity-50" />
              <p className="text-gray-500 text-sm">
                Ready to shape the future? Let's get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HomeScreen;
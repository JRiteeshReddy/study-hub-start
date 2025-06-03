
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useProgress } from '@/hooks/useProgress';
import { LogOut, BookOpen, Trophy, Clock } from 'lucide-react';

interface HomeScreenProps {
  onStartCourse: () => void;
  onTakeExam: () => void;
  isExamUnlocked?: boolean;
}

const HomeScreen = ({ onStartCourse, onTakeExam, isExamUnlocked = false }: HomeScreenProps) => {
  const { signOut, user } = useAuth();
  const { getCompletedChapters } = useProgress();
  
  const completedChapters = getCompletedChapters();
  const progressPercentage = (completedChapters.length / 5) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header with user info and logout */}
        <div className="flex justify-between items-center mb-12">
          <div className="glass-card px-6 py-3">
            <p className="text-slate-300 text-sm">Welcome back</p>
            <p className="text-white font-semibold text-lg">{user?.email}</p>
          </div>
          <Button 
            onClick={signOut}
            variant="outline"
            className="flex items-center gap-2 bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 text-white rounded-xl px-6 py-3 transition-all duration-300"
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>

        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 float-animation">
            Learning Hub
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Master the future of AI development with our comprehensive course
          </p>
        </div>

        {/* Progress Section */}
        {completedChapters.length > 0 && (
          <div className="glass-card p-8 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="text-blue-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Your Progress</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-slate-700 rounded-full h-4 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000 progress-glow"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <span className="text-white font-semibold min-w-0">
                {completedChapters.length}/5 Chapters
              </span>
            </div>
            <p className="text-slate-300 text-sm mt-2">
              {progressPercentage}% Complete
            </p>
          </div>
        )}

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Start Course Card */}
          <Card className="glass-card transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group">
            <CardContent className="p-10 text-center">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="mx-auto text-blue-400" size={64} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Start Learning
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Begin your journey with interactive AI development lessons
              </p>
              <Button 
                onClick={onStartCourse}
                className="neon-button-cyan w-full text-white font-semibold py-4 text-lg"
                size="lg"
              >
                {completedChapters.length > 0 ? 'Continue Course' : 'Start Course'}
              </Button>
            </CardContent>
          </Card>

          {/* Course Exam Card */}
          <Card className={`glass-card transition-all duration-500 cursor-pointer group ${
            isExamUnlocked ? 'hover:scale-105 hover:shadow-2xl' : 'opacity-60'
          }`}>
            <CardContent className="p-10 text-center">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className={`mx-auto ${isExamUnlocked ? 'text-yellow-400' : 'text-slate-500'}`} size={64} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Final Exam
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                {isExamUnlocked 
                  ? 'Test your knowledge and earn your certification'
                  : 'Complete all chapters to unlock the final exam'
                }
              </p>
              <Button 
                onClick={isExamUnlocked ? onTakeExam : undefined}
                disabled={!isExamUnlocked}
                className={`w-full font-semibold py-4 text-lg transition-all duration-300 ${
                  isExamUnlocked 
                    ? 'neon-button-green text-white' 
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
                size="lg"
              >
                {isExamUnlocked ? 'Take Exam' : 'Locked'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-slate-400">
            Ready to shape the future? Let's get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

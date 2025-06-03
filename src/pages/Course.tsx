
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '@/hooks/useProgress';
import ProtectedRoute from '@/components/ProtectedRoute';
import { CheckCircle, Circle, Play, ArrowLeft } from 'lucide-react';

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
    // Find the first incomplete chapter or start from chapter 1
    const nextChapter = completedChapters.length < 5 ? completedChapters.length + 1 : 1;
    navigate(`/chapter/${nextChapter}`);
  };

  const handleChapterClick = (chapterIndex: number) => {
    const chapterNumber = chapterIndex + 1;
    // Allow access to completed chapters or the next available chapter
    if (isChapterCompleted(chapterNumber) || chapterNumber <= Math.max(...completedChapters, 0) + 1) {
      navigate(`/chapter/${chapterNumber}`);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="flex items-center gap-2 bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 text-white rounded-xl px-6 py-3"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Button>
          </div>

          {/* Course Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              AI Development Course
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Master the tools that are shaping the future of software development
            </p>
            
            {/* Progress Bar */}
            <div className="glass-card p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold">Course Progress</span>
                <span className="text-blue-400 font-bold">{completedChapters.length}/5</span>
              </div>
              <Progress 
                value={progressPercentage} 
                className="h-3 mb-2 bg-slate-700"
              />
              <p className="text-slate-300 text-sm">{Math.round(progressPercentage)}% Complete</p>
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
                  className={`glass-card transition-all duration-300 cursor-pointer group ${
                    isAccessible ? 'hover:scale-[1.02] hover:shadow-2xl' : 'opacity-50 cursor-not-allowed'
                  } ${isNext ? 'ring-2 ring-blue-400/50' : ''}`}
                  onClick={() => handleChapterClick(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        isCompleted 
                          ? 'bg-green-500/20 text-green-400' 
                          : isNext
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-slate-700 text-slate-400'
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
                          <span className="text-slate-400 text-sm font-medium">
                            Chapter {chapterNumber}
                          </span>
                          {isNext && (
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                              Next
                            </span>
                          )}
                          {isCompleted && (
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                              Completed
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-white leading-tight group-hover:text-blue-400 transition-colors">
                          {chapter}
                        </h3>
                      </div>
                      {isAccessible && (
                        <div className="text-slate-400 group-hover:text-blue-400 transition-colors">
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
          <div className="text-center">
            <Button 
              onClick={handleStartCourse}
              className="neon-button-cyan text-white px-12 py-4 text-lg font-semibold"
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

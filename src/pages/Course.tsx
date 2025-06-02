
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const chapters = [
  "Meet ChatGPT: Your Over-Smart Digital Homie",
  "DeepSeek: The Chill Cousin of ChatGPT",
  "What is Lovable.dev & Bolt.new – Zero Code, Full Power",
  "Lovable.dev vs Bolt.new – Choose Your Fighter",
  "From Idea to App – Problem Breakdown"
];

const Course = () => {
  const navigate = useNavigate();

  const handleStartCourse = () => {
    navigate('/chapter/1');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Course Chapters
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete all chapters to unlock the final exam
          </p>
        </div>

        {/* Chapter List */}
        <div className="space-y-4 mb-12">
          {chapters.map((chapter, index) => (
            <Card 
              key={index}
              className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-white shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight">
                    {chapter}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Start Course Button */}
        <div className="text-center">
          <Button 
            onClick={handleStartCourse}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            size="lg"
          >
            Start Course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Course;


import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Chapter = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  const handleBackToCourse = () => {
    navigate('/course');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button 
            onClick={handleBackToCourse}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Course
          </Button>
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Chapter {chapterId}
          </h1>
          <p className="text-lg text-gray-600">
            Chapter content will be added here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chapter;

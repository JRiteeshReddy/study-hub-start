
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown, CheckCircle, Circle, Play } from 'lucide-react';

interface ChapterNavigationProps {
  currentChapter: number;
  completedChapters: number[];
}

const chapters = [
  "Meet ChatGPT: Your Over-Smart Digital Homie",
  "DeepSeek: The Chill Cousin of ChatGPT",
  "What is Lovable.dev & Bolt.new – Zero Code, Full Power",
  "Lovable.dev vs Bolt.new – Choose Your Fighter",
  "From Idea to App – Problem Breakdown"
];

const ChapterNavigation = ({ currentChapter, completedChapters }: ChapterNavigationProps) => {
  const navigate = useNavigate();

  const handleChapterClick = (chapterIndex: number) => {
    const chapterNumber = chapterIndex + 1;
    if (completedChapters.includes(chapterNumber) || chapterNumber <= Math.max(...completedChapters, 0) + 1) {
      navigate(`/chapter/${chapterNumber}`);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="modern-button-outline flex items-center gap-2 px-6 py-3"
        >
          Chapters
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 bg-black/95 backdrop-blur-xl border-white/20 rounded-xl shadow-2xl">
        {chapters.map((chapter, index) => {
          const chapterNumber = index + 1;
          const isCompleted = completedChapters.includes(chapterNumber);
          const isAccessible = isCompleted || chapterNumber <= Math.max(...completedChapters, 0) + 1;
          const isCurrent = chapterNumber === currentChapter;
          
          return (
            <DropdownMenuItem
              key={index}
              onClick={() => handleChapterClick(index)}
              disabled={!isAccessible}
              className={`p-4 cursor-pointer rounded-lg mx-2 my-1 ${
                isCurrent ? 'bg-white/20 text-white' : 'text-white'
              } ${
                !isAccessible ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-4 w-full">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  isCompleted ? 'bg-white text-black' : 
                  isCurrent ? 'bg-white/20 text-white' : 
                  'bg-gray-800 text-gray-400'
                }`}>
                  {isCompleted ? (
                    <CheckCircle size={16} />
                  ) : isCurrent ? (
                    <Play size={14} />
                  ) : (
                    <Circle size={14} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-400 mb-1">Chapter {chapterNumber}</div>
                  <div className="text-sm font-medium leading-tight">{chapter}</div>
                </div>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChapterNavigation;

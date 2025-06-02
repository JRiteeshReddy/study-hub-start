
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

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
    // Only allow navigation to completed chapters or the next available chapter
    if (completedChapters.includes(chapterNumber) || chapterNumber <= Math.max(...completedChapters, 0) + 1) {
      navigate(`/chapter/${chapterNumber}`);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          Chapters
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-white shadow-lg">
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
              className={`p-3 cursor-pointer ${
                isCurrent ? 'bg-blue-50 font-semibold' : ''
              } ${
                !isAccessible ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                  isCompleted ? 'bg-green-500 text-white' : 
                  isCurrent ? 'bg-blue-500 text-white' : 
                  'bg-gray-200 text-gray-600'
                }`}>
                  {isCompleted ? '✓' : chapterNumber}
                </div>
                <span className="text-sm leading-tight">{chapter}</span>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChapterNavigation;

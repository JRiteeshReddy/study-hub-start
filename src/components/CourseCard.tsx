
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface CourseCardProps {
  title: string;
  emoji: string;
  disabled?: boolean;
  disabledMessage?: string;
  onClick: () => void;
}

const CourseCard = ({ title, emoji, disabled = false, disabledMessage, onClick }: CourseCardProps) => {
  const CardComponent = (
    <Card 
      className={`
        w-full max-w-sm h-40 cursor-pointer transition-all duration-300 
        ${disabled 
          ? 'opacity-50 cursor-not-allowed bg-gray-100' 
          : 'hover:scale-105 hover:shadow-xl bg-white shadow-lg'
        }
      `}
      onClick={disabled ? undefined : onClick}
    >
      <CardContent className="flex flex-col items-center justify-center h-full p-6">
        <div className="text-4xl mb-3">{emoji}</div>
        <h3 className="text-xl font-bold text-gray-800 text-center leading-tight">
          {title}
        </h3>
      </CardContent>
    </Card>
  );

  if (disabled && disabledMessage) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {CardComponent}
          </TooltipTrigger>
          <TooltipContent>
            <p>{disabledMessage}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return CardComponent;
};

export default CourseCard;

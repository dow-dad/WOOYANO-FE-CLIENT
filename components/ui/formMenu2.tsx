import React from "react";

interface ProgressBarProps {
  total: number; // 총 작업 수
  completed: number; // 완료된 작업 수
}

export default function ProgressBar({ total, completed }: ProgressBarProps) {
  const progress = (completed / total) * 100;

  return (
    <div className="flex justify-center mt-10">
      <div className= "w-[500px] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div className="bg-blue-400 h-1.5 rounded-full dark:bg-cyan-400 " style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
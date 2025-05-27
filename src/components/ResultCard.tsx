
import React from 'react';
import { StudentScore } from '@/data/studentScores';

interface ResultCardProps {
  studentId: string;
  scores: StudentScore;
}

const ResultCard: React.FC<ResultCardProps> = ({ studentId, scores }) => {
  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return 'text-markano-green';
    if (percentage >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getGradeFromTotal = (total: number) => {
    if (total >= 30) return 'A';
    if (total >= 25) return 'B';
    if (total >= 20) return 'C';
    return 'D';
  };

  const grade = getGradeFromTotal(scores.TOTAL);

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-markano-green/20 transition-all duration-300">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-white mb-2">Student Results</h2>
          <div className="bg-markano-green/10 border border-markano-green/30 rounded-lg px-4 py-2 inline-block">
            <span className="text-markano-green font-mono text-lg font-semibold">
              ID: {studentId}
            </span>
          </div>
        </div>

        {/* Scores Grid */}
        <div className="space-y-4 mb-6">
          {/* Assignment 1 */}
          <div className="flex justify-between items-center p-4 bg-gray-700/30 rounded-xl border border-gray-600/30">
            <span className="text-gray-300 font-medium">Assignment 1</span>
            <div className="text-right">
              <span className={`text-2xl font-bold ${getScoreColor(scores['ASSIGN-1'], 20)}`}>
                {scores['ASSIGN-1']}
              </span>
              <span className="text-gray-400 text-sm ml-1">/20</span>
            </div>
          </div>

          {/* Assignment 2 */}
          <div className="flex justify-between items-center p-4 bg-gray-700/30 rounded-xl border border-gray-600/30">
            <span className="text-gray-300 font-medium">Assignment 2</span>
            <div className="text-right">
              <span className={`text-2xl font-bold ${getScoreColor(scores['ASSIGN-2'], 20)}`}>
                {scores['ASSIGN-2']}
              </span>
              <span className="text-gray-400 text-sm ml-1">/20</span>
            </div>
          </div>

          {/* Total Score */}
          <div className="flex justify-between items-center p-6 bg-gradient-to-r from-markano-green/10 to-markano-green/5 rounded-xl border-2 border-markano-green/30">
            <span className="text-white font-semibold text-lg">Total Score</span>
            <div className="text-right">
              <span className={`text-3xl font-black ${getScoreColor(scores.TOTAL, 40)}`}>
                {scores.TOTAL}
              </span>
              <span className="text-gray-400 text-sm ml-1">/40</span>
            </div>
          </div>
        </div>

        {/* Grade Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-markano-green/20 border border-markano-green/50 rounded-full px-6 py-3">
            <span className="text-gray-300 font-medium">Grade:</span>
            <span className="text-2xl font-black text-markano-green tracking-wider">
              {grade}
            </span>
          </div>
        </div>

        {/* Performance Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Performance</span>
            <span>{Math.round((scores.TOTAL / 40) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-markano-green to-markano-green/80 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${(scores.TOTAL / 40) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

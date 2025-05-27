
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Logo from '@/components/Logo';
import ResultCard from '@/components/ResultCard';
import { getStudentScore, StudentScore } from '@/data/studentScores';
import { Search, AlertCircle } from 'lucide-react';

const Index: React.FC = () => {
  const [studentId, setStudentId] = useState<string>('');
  const [searchResult, setSearchResult] = useState<{
    scores: StudentScore;
    id: string;
  } | null>(null);
  const [showNotFound, setShowNotFound] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!studentId.trim()) {
      return;
    }

    setIsSearching(true);
    setShowNotFound(false);
    setSearchResult(null);

    // Simulate search delay for better UX
    setTimeout(() => {
      const scores = getStudentScore(studentId.trim());
      
      if (scores) {
        setSearchResult({ scores, id: studentId.trim() });
        setShowNotFound(false);
      } else {
        setSearchResult(null);
        setShowNotFound(true);
      }
      
      setIsSearching(false);
    }, 800);
  };

  const handleReset = () => {
    setStudentId('');
    setSearchResult(null);
    setShowNotFound(false);
  };

  return (
    <div className="min-h-screen bg-markano-navy">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-markano-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Logo />
        </div>

        {/* Main Content */}
        <div className="max-w-lg mx-auto">
          {/* Welcome Section */}
          {!searchResult && !showNotFound && (
            <div className="text-center mb-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 glow-text">
                Welcome to MARKANO
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Enter your student ID to check your assignment results
              </p>
            </div>
          )}

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Enter Student ID (e.g., 134606)"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 text-lg bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-markano-green focus:border-markano-green transition-all duration-300"
                  disabled={isSearching}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              
              <Button
                type="submit"
                disabled={!studentId.trim() || isSearching}
                className="w-full h-14 text-lg font-bold bg-markano-green hover:bg-markano-green/90 text-black rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none"
              >
                {isSearching ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Searching...
                  </div>
                ) : (
                  'Check Result'
                )}
              </Button>
            </div>
          </form>

          {/* Results Section */}
          {searchResult && (
            <div className="space-y-6">
              <ResultCard 
                studentId={searchResult.id} 
                scores={searchResult.scores} 
              />
              
              <div className="text-center">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                >
                  Search Another ID
                </Button>
              </div>
            </div>
          )}

          {/* Not Found Alert */}
          {showNotFound && (
            <div className="animate-fade-in">
              <Alert className="bg-red-900/20 border-red-500/50 text-red-200 mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-lg">
                  <strong>No Result Found</strong>
                  <br />
                  Student ID "{studentId}" was not found in our records. Please check your ID and try again.
                </AlertDescription>
              </Alert>
              
              <div className="text-center">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                >
                  Try Again
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500">
          <p>&copy; 2024 MARKANO APP. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

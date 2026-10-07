'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Brain, Compass, GraduationCap, Rocket, BookOpen, Target, Star, Download } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { careerAssessmentSchema, type CareerAssessmentData } from '@/lib/validations';
import { CAREER_QUESTIONS, CAREER_RECOMMENDATIONS } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert } from '@/components/ui/alert';

export function CareerHub() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<typeof CAREER_RECOMMENDATIONS[0] | null>(null);

  const handleAnswer = (value: number) => {
    const question = CAREER_QUESTIONS[currentQuestion];
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < CAREER_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (ans: Record<string, number>) => {
    const scores: Record<string, number> = {};
    CAREER_RECOMMENDATIONS.forEach((rec) => {
      scores[rec.career] = rec.score;
    });

    const sorted = [...CAREER_RECOMMENDATIONS].sort((a, b) => b.score - a.score);
    setResult(sorted[0]);
    setShowResults(true);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setResult(null);
  };

  const progress = (currentQuestion / CAREER_QUESTIONS.length) * 100;

  return (
    <section id="career-hub" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Career Assessment</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover your strengths and find the right career path with our intelligent career assessment.
          </p>
        </div>

        {!showResults ? (
          <Card className="border-gray-800 bg-[#161B22]">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">Question {currentQuestion + 1} of {CAREER_QUESTIONS.length}</span>
                <span className="text-sm text-blue-400">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-white mb-6">
                  {CAREER_QUESTIONS[currentQuestion].question}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CAREER_QUESTIONS[currentQuestion].options.map((option) => (
                    <motion.button
                      key={option.label}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option.value)}
                      className="flex items-center gap-3 p-4 rounded-xl border border-gray-700 bg-[#111827] hover:border-blue-500 hover:bg-blue-500/5 transition-all text-left"
                    >
                      <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm font-semibold text-gray-400">
                        {String.fromCharCode(65 + CAREER_QUESTIONS[currentQuestion].options.indexOf(option))}
                      </span>
                      <span className="text-sm text-gray-200">{option.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {result && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-gray-800 bg-[#161B22] overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600/20 to-cyan-500/20 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                          <Rocket className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{result.career}</h3>
                          <p className="text-sm text-gray-400">Match Score: {result.score}%</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-6">
                      <p className="text-gray-300">{result.description}</p>

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-blue-400" />
                          Recommended University Courses
                        </h4>
                        <ul className="space-y-1">
                          {result.universityCourses.map((course) => (
                            <li key={course} className="flex items-center gap-2 text-sm text-gray-400">
                              <Star className="h-3 w-3 text-blue-400 fill-blue-400" />
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-cyan-400" />
                          Recommended Resources
                        </h4>
                        <ul className="space-y-1">
                          {result.recommendedResources.map((res) => (
                            <li key={res} className="flex items-center gap-2 text-sm text-gray-400">
                              <Download className="h-3 w-3 text-cyan-400" />
                              {res}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4 text-gold" />
                          Professional Advice
                        </h4>
                        <p className="text-sm text-gray-400">{result.professionalAdvice}</p>
                      </div>

                      <div className="flex gap-3">
                        <Button variant="gradient" className="flex-1" asChild>
                          <a href={`https://wa.me/${encodeURIComponent('+260977230272')}`} target="_blank" rel="noopener noreferrer">
                            Discuss with Chiloba
                          </a>
                        </Button>
                        <Button variant="outline" className="flex-1" onClick={resetAssessment}>
                          Retake Assessment
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <Alert variant="success">
                  <p className="text-sm">
                    <strong>Note:</strong> This assessment provides general guidance. For personalized career counseling, book a consultation with Mr. Chiloba.
                  </p>
                </Alert>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
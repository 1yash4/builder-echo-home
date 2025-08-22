import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, Brain, RotateCcw, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface QuizQuestion {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: string;
}

const sampleQuiz: QuizQuestion[] = [
  {
    question: "What is the process by which plants make their own food using sunlight?",
    options: {
      A: "Respiration",
      B: "Photosynthesis", 
      C: "Digestion",
      D: "Fermentation"
    },
    correctAnswer: "B"
  },
  {
    question: "Which organelle is known as the 'powerhouse of the cell'?",
    options: {
      A: "Nucleus",
      B: "Ribosome",
      C: "Mitochondria",
      D: "Endoplasmic Reticulum"
    },
    correctAnswer: "C"
  },
  {
    question: "What is the chemical symbol for water?",
    options: {
      A: "H2O",
      B: "CO2",
      C: "NaCl",
      D: "O2"
    },
    correctAnswer: "A"
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: selectedAnswer }));
    setSelectedAnswer("");
    
    if (currentQuestion < sampleQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    sampleQuiz.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedAnswer("");
  };

  const progress = ((currentQuestion + 1) / sampleQuiz.length) * 100;
  const score = calculateScore();
  const percentage = Math.round((score / sampleQuiz.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <Card className="border-0 shadow-2xl bg-white">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Brain className="h-10 w-10" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">Quiz Complete!</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Here's how you performed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">
                  <span className={`${percentage >= 70 ? 'text-green-600' : percentage >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {percentage}%
                  </span>
                </div>
                <p className="text-xl text-gray-600">
                  You scored {score} out of {sampleQuiz.length} questions correctly
                </p>
                <Badge 
                  variant={percentage >= 70 ? "default" : "secondary"}
                  className="mt-4 px-4 py-2 text-base"
                >
                  {percentage >= 70 ? "Excellent!" : percentage >= 50 ? "Good Job!" : "Keep Practicing!"}
                </Badge>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Review Your Answers:</h3>
                {sampleQuiz.map((question, index) => {
                  const userAnswer = answers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <Card key={index} className="border border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          {isCorrect ? (
                            <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 mb-2">
                              {index + 1}. {question.question}
                            </p>
                            <div className="space-y-1 text-sm">
                              <p className="text-gray-600">
                                Your answer: <span className={isCorrect ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                                  {userAnswer} - {question.options[userAnswer as keyof typeof question.options]}
                                </span>
                              </p>
                              {!isCorrect && (
                                <p className="text-gray-600">
                                  Correct answer: <span className="text-green-600 font-medium">
                                    {question.correctAnswer} - {question.options[question.correctAnswer as keyof typeof question.options]}
                                  </span>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button onClick={resetQuiz} className="bg-gradient-to-r from-blue-600 to-indigo-600">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
                <Link to="/">
                  <Button variant="outline">
                    <Home className="h-4 w-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Information Section */}
        <Card className="border-0 shadow-lg bg-white mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Interactive Quiz System</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Test your understanding with AI-generated multiple choice questions. Get instant feedback
                and detailed explanations to reinforce your learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Smart Questions</h3>
                <p className="text-sm text-gray-600">AI-generated questions that test key concepts and understanding</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Instant Feedback</h3>
                <p className="text-sm text-gray-600">Get immediate results with explanations for wrong answers</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <RotateCcw className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Review & Retry</h3>
                <p className="text-sm text-gray-600">Review your answers and retake quizzes to improve understanding</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-2xl bg-white">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Biology Quiz
              </CardTitle>
              <Badge variant="secondary" className="px-3 py-1">
                Question {currentQuestion + 1} of {sampleQuiz.length}
              </Badge>
            </div>
            <Progress value={progress} className="w-full h-3" />
            <CardDescription className="text-center mt-2">
              {Math.round(progress)}% Complete
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
                {sampleQuiz[currentQuestion].question}
              </h2>
              
              <div className="space-y-3">
                {Object.entries(sampleQuiz[currentQuestion].options).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => handleAnswerSelect(key)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswer === key
                        ? 'border-blue-500 bg-blue-50 text-blue-900'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold ${
                        selectedAnswer === key
                          ? 'border-blue-500 bg-blue-500 text-white'
                          : 'border-gray-300 text-gray-600'
                      }`}>
                        {key}
                      </div>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                Previous
              </Button>
              <Button 
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
                className="bg-gradient-to-r from-blue-600 to-indigo-600"
              >
                {currentQuestion === sampleQuiz.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

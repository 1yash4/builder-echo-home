import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Brain,
  Lightbulb,
  MessageCircle,
  Upload,
  Sparkles,
  Shield,
  Cog,
  Cloud,
  Database,
  ChevronRight,
  GraduationCap,
  FileText,
  Users,
  Trophy
} from "lucide-react";

export default function Index() {
  const [activeTab, setActiveTab] = useState("summary");
  const [studyText, setStudyText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleGenerate = async () => {
    if (!studyText.trim()) return;
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => setIsProcessing(false), 2000);
  };

  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Smart Summaries",
      description: "Generate concise, easy-to-understand summaries from any study material"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Interactive Quizzes",
      description: "AI-generated multiple choice quizzes to test your understanding"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Digital Flashcards",
      description: "Key terms and definitions extracted and formatted for optimal learning"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Question Papers",
      description: "Browse thousands of exam questions organized by subject, class, and difficulty"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "AI Tutor",
      description: "Get instant answers to questions based on your uploaded study material"
    }
  ];

  const stats = [
    { label: "Students Helped", value: "50K+", icon: <Users className="h-5 w-5" /> },
    { label: "Study Sessions", value: "500K+", icon: <BookOpen className="h-5 w-5" /> },
    { label: "Quizzes Generated", value: "2M+", icon: <Brain className="h-5 w-5" /> },
    { label: "Success Rate", value: "94%", icon: <Trophy className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                StudyGenie
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
              <Button variant="default" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239CA3AF\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Study Assistant
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Study
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Material Into Success
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              StudyGenie helps you understand your study material better with AI-generated summaries, 
              interactive quizzes, flashcards, and a personal tutor that answers your questions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 text-lg" asChild>
                <a href="#demo">
                  Start Learning Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg" asChild>
                <a href="#demo">
                  Try Demo
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-white" id="demo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Try StudyGenie Now
            </h2>
            <p className="text-xl text-gray-600">
              Paste your study material and see the magic happen
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white">
              <CardContent className="p-8">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-5 mb-8">
                    <TabsTrigger value="summary" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Summary
                    </TabsTrigger>
                    <TabsTrigger value="quiz" className="flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Quiz
                    </TabsTrigger>
                    <TabsTrigger value="flashcards" className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      Flashcards
                    </TabsTrigger>
                    <TabsTrigger value="papers" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Papers
                    </TabsTrigger>
                    <TabsTrigger value="tutor" className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      AI Tutor
                    </TabsTrigger>
                  </TabsList>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Paste your study material here:
                    </label>
                    <Textarea
                      placeholder="Paste your textbook content, lecture notes, or any study material here..."
                      value={studyText}
                      onChange={(e) => setStudyText(e.target.value)}
                      className="min-h-[120px] text-base"
                    />
                  </div>

                  <TabsContent value="summary" className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">What you'll get:</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Concise summary covering main ideas and key concepts</li>
                        <li>• Easy-to-understand language perfect for high school students</li>
                        <li>• Structured breakdown of complex topics</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="quiz" className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">What you'll get:</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li>• 10 multiple-choice questions testing your understanding</li>
                        <li>• Instant feedback with explanations for wrong answers</li>
                        <li>• Structured JSON format for easy review</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="flashcards" className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">What you'll get:</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li>• 15+ key terms and their definitions</li>
                        <li>• Interactive flip cards for better memorization</li>
                        <li>• Concise explanations perfect for quick review</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="papers" className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">What you'll get:</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Thousands of exam questions by subject and class</li>
                        <li>• Filter by difficulty level, year, and topic</li>
                        <li>• Practice with real past paper questions</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="tutor" className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">What you'll get:</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Ask any question about your study material</li>
                        <li>• Get answers based only on your uploaded content</li>
                        <li>• Clear explanations from your expert AI tutor</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Button
                      onClick={handleGenerate}
                      disabled={!studyText.trim() || isProcessing}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          Generate {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                          <Sparkles className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    {activeTab === 'quiz' && (
                      <Button variant="outline" asChild>
                        <Link to="/quiz">
                          Try Sample Quiz
                          <Brain className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {activeTab === 'flashcards' && (
                      <Button variant="outline" asChild>
                        <Link to="/flashcards">
                          Try Sample Flashcards
                          <Lightbulb className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {activeTab === 'papers' && (
                      <Button variant="outline" asChild>
                        <Link to="/question-papers">
                          Browse Question Papers
                          <BookOpen className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>

                  {isProcessing && (
                    <div className="mt-6">
                      <Progress value={66} className="w-full" />
                      <p className="text-center text-sm text-gray-600 mt-2">
                        Analyzing your content with AI...
                      </p>
                    </div>
                  )}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              StudyGenie combines cutting-edge AI with proven learning techniques to help you master any subject
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How StudyGenie Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to transform your study experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Upload className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Upload Your Material</h3>
              <p className="text-gray-600 leading-relaxed">
                Paste your textbook content, lecture notes, or any study material into our intelligent system
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Brain className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. AI Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI analyzes your content and identifies key concepts, terms, and learning objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Sparkles className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Personalized Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Get custom summaries, quizzes, flashcards, and have conversations with your AI tutor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Study Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join thousands of students who are already using StudyGenie to excel in their studies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Learning for Free
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                StudyGenie
              </span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 StudyGenie. Empowering students with AI-powered learning.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

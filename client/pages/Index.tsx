import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/contexts/UserContext";
import {
  BookOpen,
  Brain,
  Lightbulb,
  MessageCircle,
  Upload,
  Sparkles,
  ChevronRight,
  GraduationCap,
  FileText,
  Users,
  LogOut,
  User,
} from "lucide-react";

export default function Index() {
  const { user, isAuthenticated, logout } = useUser();

  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Smart Summaries",
      description:
        "Generate concise, easy-to-understand summaries from any study material",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Interactive Quizzes",
      description:
        "AI-generated multiple choice quizzes to test your understanding",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Digital Flashcards",
      description:
        "Key terms and definitions extracted and formatted for optimal learning",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Question Papers",
      description:
        "Browse thousands of exam questions organized by subject, class, and difficulty",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Mentors",
      description:
        "Connect with experienced mentors via video, voice, or chat to solve your doubts",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "AI Tutor",
      description:
        "Get instant answers to questions based on your uploaded study material",
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                Chanakya
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                How it Works
              </a>
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span className="text-sm">
                      {user?.firstName} {user?.lastName}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {user?.standard}
                    </Badge>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={logout}
                    className="flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  variant="default"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600"
                  asChild
                >
                  <Link to="/login">Get Started</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div
          className={
            'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239CA3AF" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-40'
          }
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200"
            >
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
              StudyGenie helps you understand your study material better with
              AI-generated summaries, interactive quizzes, flashcards, and a
              personal tutor that answers your questions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 text-lg"
                asChild
              >
                <a href="#features">
                  Start Learning Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg"
                asChild
              >
                <a href="#features">Explore Features</a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-20 bg-gray-50 relative"
        id="features"
      >
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.3\"%3E%3Cpath d=\"M20 20c0 0 0-8 0-8s8 0 8 0 0 8 0 8-8 0-8 0z\"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              StudyGenie combines cutting-edge AI with proven learning
              techniques to help you master any subject
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const getFeatureLink = (title: string) => {
                switch (title) {
                  case "Smart Summaries":
                    return "/summary";
                  case "Interactive Quizzes":
                    return "/quiz";
                  case "Digital Flashcards":
                    return "/flashcards";
                  case "Question Papers":
                    return "/question-papers";
                  case "Expert Mentors":
                    return "/mentors";
                  case "AI Tutor":
                    return "/ai-tutor";
                  default:
                    return "#";
                }
              };

              return (
                <Link key={index} to={getFeatureLink(feature.title)}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white cursor-pointer transform hover:scale-105">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-center text-gray-600 leading-relaxed mb-4">
                        {feature.description}
                      </CardDescription>
                      <div className="text-center">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-indigo-600"
                        >
                          Try Now
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Chanakya Works
            </h2>
            <p className="text-xl text-gray-600">
              Ancient wisdom meets modern AI for effective learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Upload className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                1. Upload Your Material
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Paste your textbook content, lecture notes, or any study
                material into our intelligent system
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Brain className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                2. AI Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI analyzes your content and identifies key
                concepts, terms, and learning objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Sparkles className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                3. Personalized Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get custom summaries, quizzes, flashcards, and have
                conversations with your AI tutor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-700 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Study Experience?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Join thousands of students who are already using StudyGenie to excel
            in their studies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Start Learning for Free
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
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
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                Chanakya
              </span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Chanakya. Empowering Indian students with ancient wisdom & modern AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

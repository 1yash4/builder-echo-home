import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  MessageCircle,
  Send,
  GraduationCap,
  Brain,
  BookOpen,
  Clock,
  Target,
  Zap,
  User,
  Bot,
  Upload,
  Sparkles,
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export default function AITutor() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI Tutor. I can help you understand concepts, explain difficult topics, and answer questions based on your study material. What would you like to learn about today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(userMessage.content),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();

    if (input.includes("photosynthesis")) {
      return "Photosynthesis is the process plants use to convert sunlight into energy! It happens in two main stages: light reactions (in thylakoids) and the Calvin cycle (in stroma). The equation is: 6CO2 + 6H2O + light → C6H12O6 + 6O2. Would you like me to explain any specific part in more detail?";
    } else if (input.includes("mitochondria")) {
      return "Mitochondria are called the 'powerhouse of the cell' because they produce ATP (energy) through cellular respiration. They have two membranes and contain their own DNA! They're especially abundant in cells that need lots of energy, like muscle cells.";
    } else if (input.includes("equation") || input.includes("math")) {
      return "I'd be happy to help with equations! Could you share the specific equation or math problem you're working on? I can break it down step by step and explain the concepts behind it.";
    } else if (input.includes("physics")) {
      return "Physics is all about understanding how the universe works! Whether it's mechanics, electricity, waves, or quantum physics, I can help explain concepts with real-world examples. What physics topic interests you?";
    } else {
      return "That's a great question! I'm here to help you understand any topic from your study materials. Could you provide more context or share the specific material you're studying? This helps me give you more accurate and relevant explanations.";
    }
  };

  const quickQuestions = [
    "Explain photosynthesis",
    "What is DNA?",
    "How do equations work?",
    "Tell me about gravity",
    "What is the cell cycle?",
    "Explain the water cycle",
  ];

  const capabilities = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Concept Explanation",
      description:
        "Break down complex topics into simple, understandable parts",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personalized Help",
      description: "Adapt explanations to your learning style and level",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Study Material Based",
      description: "Answer questions specifically from your uploaded content",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Responses",
      description: "Get immediate answers to your questions anytime",
    },
  ];

  const features = [
    "Explains concepts in simple, clear language",
    "Provides step-by-step solutions",
    "Adapts to your learning pace",
    "Available 24/7 for instant help",
    "Connects topics to real-world examples",
    "Helps with homework and exam prep",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                Chanakya
              </span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">AI Tutor</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your personal AI tutor is here to help! Ask questions, get
            explanations, and receive guidance based on your study materials.
            Available 24/7 for instant learning support.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg bg-white text-center"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  {capability.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Chat Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Section */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  Chat with AI Tutor
                </CardTitle>
                <CardDescription>
                  Ask any question about your study material
                </CardDescription>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start gap-3 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          msg.sender === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-gradient-to-br from-purple-600 to-pink-600 text-white"
                        }`}
                      >
                        {msg.sender === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={`rounded-lg p-3 ${
                          msg.sender === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.sender === "user"
                              ? "text-blue-100"
                              : "text-gray-500"
                          }`}
                        >
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-3 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me anything about your studies..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim() || isTyping}
                    className="bg-gradient-to-r from-pink-500 to-blue-500"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-lg">Quick Questions</CardTitle>
                <CardDescription>
                  Try these example questions to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setMessage(question)}
                    className="w-full text-left justify-start text-sm"
                  >
                    {question}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Upload Material */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Study Material
                </CardTitle>
                <CardDescription>
                  Upload your content for more accurate, personalized help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Choose Files
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  Supports PDF, DOC, TXT files
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-lg">What I Can Help With</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white mt-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              How Your AI Tutor Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Ask Questions</h3>
                <p className="text-purple-100">
                  Type any question about your study material or academic
                  concepts
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
                <p className="text-purple-100">
                  Advanced AI understands your question and finds relevant
                  information
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Get Explanations</h3>
                <p className="text-purple-100">
                  Receive clear, personalized explanations tailored to your
                  learning level
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Home,
  FileText,
  Sparkles,
  GraduationCap,
  BookOpen,
  Brain,
  Clock,
  Target,
  CheckCircle,
  Upload,
  Download,
  Copy,
  Share2,
} from "lucide-react";

export default function Summary() {
  const [inputText, setInputText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [summary, setSummary] = useState("");
  const [progress, setProgress] = useState(0);

  const sampleText = `Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll pigments. During photosynthesis, plants convert carbon dioxide and water into glucose and oxygen using energy from sunlight. This process occurs in two main stages: the light-dependent reactions (in the thylakoids) and the light-independent reactions or Calvin cycle (in the stroma). The overall equation for photosynthesis is: 6CO2 + 6H2O + light energy → C6H12O6 + 6O2. Photosynthesis is crucial for life on Earth as it produces oxygen and forms the base of most food chains.`;

  const sampleSummary = `**Main Process**: Photosynthesis converts sunlight, carbon dioxide, and water into glucose and oxygen using chlorophyll in plants.

**Two Key Stages**:
• Light-dependent reactions (thylakoids) - capture and convert light energy
• Calvin cycle (stroma) - use energy to create glucose from CO2

**Chemical Equation**: 6CO2 + 6H2O + light → C6H12O6 + 6O2

**Importance**: Essential for life on Earth - produces oxygen and forms the foundation of food chains.

**Key Components**: Chlorophyll pigments, sunlight, carbon dioxide, water`;

  const handleGenerate = async () => {
    if (!inputText.trim()) return;

    setIsGenerating(true);
    setProgress(0);
    setSummary("");

    // Simulate AI processing
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setSummary(sampleSummary);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleUseSample = () => {
    setInputText(sampleText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
  };

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Save Time",
      description:
        "Convert hours of reading into minutes of focused understanding",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Key Concepts",
      description:
        "Automatically identifies and highlights the most important information",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Better Retention",
      description:
        "Structured summaries improve comprehension and memory retention",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Any Subject",
      description:
        "Works with textbooks, lecture notes, research papers, and more",
    },
  ];

  const features = [
    "Concise, easy-to-understand language",
    "Structured breakdown of complex topics",
    "Key concepts and main ideas highlighted",
    "Perfect for high school and college students",
    "Instant generation from any text input",
    "Copy and share functionality",
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
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Smart Summaries
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform lengthy study materials into concise, easy-to-understand
            summaries. Our AI identifies key concepts and presents them in a
            structured format perfect for quick review.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg bg-white text-center"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Input Section */}
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Input Your Study Material
              </CardTitle>
              <CardDescription>
                Paste your textbook content, lecture notes, or any study
                material below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Paste your study material here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="min-h-[300px] text-base"
              />

              <div className="flex gap-3">
                <Button
                  onClick={handleGenerate}
                  disabled={!inputText.trim() || isGenerating}
                  className="bg-gradient-to-r from-pink-500 to-blue-500 flex-1"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Summary
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={handleUseSample}>
                  Use Sample
                </Button>
              </div>

              {isGenerating && (
                <div className="space-y-2">
                  <Progress value={progress} className="w-full" />
                  <p className="text-sm text-gray-600 text-center">
                    Analyzing content and extracting key concepts...
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Generated Summary
              </CardTitle>
              <CardDescription>
                Your AI-generated summary will appear here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {summary ? (
                <>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 min-h-[300px]">
                    <div className="whitespace-pre-line text-gray-800 leading-relaxed">
                      {summary}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={handleCopy}
                      className="flex-1"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </>
              ) : (
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg mb-2">No summary generated yet</p>
                    <p className="text-sm">
                      Paste your content and click "Generate Summary" to get
                      started
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features List */}
        <Card className="border-0 shadow-lg bg-white mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              What Makes Our Summaries Special?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-pink-500 to-blue-500 text-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              How Smart Summaries Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Analyze Content</h3>
                <p className="text-blue-100">
                  AI reads and understands your study material, identifying key
                  concepts and relationships
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Extract Key Points
                </h3>
                <p className="text-blue-100">
                  Important information is identified and organized into logical
                  sections
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Generate Summary</h3>
                <p className="text-blue-100">
                  Creates a concise, well-structured summary perfect for
                  studying and review
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

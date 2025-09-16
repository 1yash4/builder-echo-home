import { useState, useEffect } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@/contexts/UserContext";
import {
  Home,
  FileText,
  Filter,
  BookOpen,
  GraduationCap,
  Clock,
  TrendingUp,
  ChevronRight,
  Search,
  User,
} from "lucide-react";

interface QuestionData {
  type: "information" | "question_answer";
  subject: string;
  topic: string;
  content?: string;
  year?: number;
  standard?: string;
  difficulty?: "easy" | "medium" | "hard";
  question?: string;
  answer?: string;
}

const questionDatabase: QuestionData[] = [
  {
    type: "information",
    subject: "Physics",
    topic: "Modern Physics",
    content:
      "Modern physics refers to the developments in physics from the early 20th century onwards. It departs from classical physics, which describes phenomena at an everyday scale. The two main pillars of modern physics are quantum mechanics and relativity. [6] Quantum mechanics deals with the behavior of matter and energy at the atomic and subatomic levels, introducing concepts like quantization and wave-particle duality. [5, 6] Einstein's theory of relativity revolutionized our understanding of space, time, and gravity. [5]",
  },
  {
    type: "information",
    subject: "Biology",
    topic: "Core Concepts",
    content:
      "High school biology introduces foundational principles of life sciences. [2] Key concepts include cell structure and function, genetics and heredity, evolution by natural selection, and the study of ecosystems which examines the flow of matter and energy between living systems and their environment. [1, 2, 3] Students also explore human physiology, understanding the functions of various body systems. [3] The curriculum emphasizes critical thinking and making sense of the natural world. [1, 2]",
  },
  {
    type: "question_answer",
    year: 2018,
    standard: "10th Grade",
    subject: "Science",
    topic: "Chemical Reactions",
    difficulty: "easy",
    question:
      "What change in color is observed when white silver chloride is left exposed to sunlight and what type of chemical reaction is this?",
    answer:
      "The white silver chloride turns grey. This is a photochemical decomposition reaction.",
  },
  {
    type: "question_answer",
    year: 2018,
    standard: "University",
    subject: "Computer Science",
    topic: "Boolean Algebra",
    difficulty: "medium",
    question:
      "Given the Boolean function F(A, B, C, D) = Σ(0, 2, 4, 8, 9, 10, 12, 13), use a Karnaugh map to find the simplified SOP expression.",
    answer:
      "The simplified Sum of Products (SOP) expression is F(A, B, C, D) = C'D' + A'D' + AB'C'.",
  },
  {
    type: "question_answer",
    year: 2019,
    standard: "10th Grade",
    subject: "Science",
    topic: "Heredity and Evolution",
    difficulty: "medium",
    question:
      "A cross between a tall pea plant (TT) and a short pea plant (tt) resulted in progeny that were all tall. What would be the ratio of tall to short plants in the F2 generation if the F1 plants are self-pollinated?",
    answer:
      "The ratio of tall to short plants in the F2 generation would be 3:1.",
  },
  {
    type: "question_answer",
    year: 2019,
    standard: "12th Grade",
    subject: "Physics",
    topic: "Electrostatics",
    difficulty: "hard",
    question:
      "Three capacitors of capacitances 2 pF, 3 pF and 4 pF are connected in parallel. (a) What is the total capacitance of the combination? (b) Determine the charge on each capacitor if the combination is connected to a 100 V supply.",
    answer:
      "(a) The total capacitance is 9 pF. (b) The charge on the 2 pF capacitor is 200 pC, on the 3 pF capacitor is 300 pC, and on the 4 pF capacitor is 400 pC.",
  },
  {
    type: "question_answer",
    year: 2020,
    standard: "10th Grade",
    subject: "Science",
    topic: "Metals and Non-metals",
    difficulty: "easy",
    question: "Why is sodium kept immersed in kerosene oil?",
    answer:
      "Sodium is a highly reactive metal that reacts vigorously with oxygen and moisture in the air. It is kept immersed in kerosene oil to prevent it from coming into contact with air and catching fire.",
  },
  {
    type: "question_answer",
    year: 2020,
    standard: "University Entrance (JEE Main)",
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    difficulty: "hard",
    question:
      "The rate of a reaction doubles when its temperature changes from 300K to 310K. The activation energy of such a reaction will be: (R = 8.314 J K⁻¹ mol⁻¹ and log 2 = 0.301)",
    answer: "The activation energy is 53.6 kJ/mol.",
  },
  {
    type: "question_answer",
    year: 2021,
    standard: "12th Grade",
    subject: "Mathematics",
    topic: "Probability",
    difficulty: "medium",
    question:
      "Two cards are drawn successively with replacement from a well-shuffled deck of 52 cards. Find the probability distribution of the number of aces.",
    answer:
      "Let X be the number of aces. P(X=0) = (48/52) * (48/52) = 144/169. P(X=1) = 2 * (4/52) * (48/52) = 24/169. P(X=2) = (4/52) * (4/52) = 1/169.",
  },
  {
    type: "question_answer",
    year: 2021,
    standard: "University",
    subject: "Computer Science",
    topic: "Algorithms",
    difficulty: "hard",
    question:
      "What is the time complexity of the Heap Sort algorithm in the worst-case scenario, and is it a stable sort?",
    answer:
      "The time complexity of Heap Sort in the worst-case scenario is O(n log n). It is not a stable sort because the order of equal elements may not be preserved.",
  },
  {
    type: "question_answer",
    year: 2022,
    standard: "10th Grade",
    subject: "Science",
    topic: "Life Processes",
    difficulty: "easy",
    question: "What is the role of acid in our stomach?",
    answer:
      "The hydrochloric acid in our stomach creates an acidic medium which facilitates the action of the enzyme pepsin for digesting proteins. It also kills any germs that may enter the system along with the food.",
  },
  {
    type: "question_answer",
    year: 2022,
    standard: "12th Grade",
    subject: "Physics",
    topic: "Semiconductors",
    difficulty: "medium",
    question:
      "Explain the formation of a depletion region and a potential barrier in a p-n junction diode.",
    answer:
      "In a p-n junction, electrons from the n-side diffuse to the p-side and holes from the p-side diffuse to the n-side. This diffusion creates a layer of immobile positive ions on the n-side and immobile negative ions on the p-side near the junction. This layer, devoid of free charge carriers, is called the depletion region. The potential difference developed across this depletion region, which opposes further diffusion, is called the potential barrier.",
  },
  {
    type: "question_answer",
    year: 2022,
    standard: "University Entrance (JEE Main)",
    subject: "Mathematics",
    topic: "Calculus",
    difficulty: "hard",
    question:
      "If the line y = mx + c is a tangent to the circle x² + y² = a², what is the value of c?",
    answer:
      "The condition for tangency is that the perpendicular distance from the center (0,0) to the line is equal to the radius 'a'. This gives the value of c as c = ±a√(1+m²).",
  },
  {
    type: "question_answer",
    year: 2023,
    standard: "University",
    subject: "Computer Science Engineering",
    topic: "Operating Systems",
    difficulty: "medium",
    question:
      "Explain the difference between a process and a thread. Why are threads considered lightweight?",
    answer:
      "A process is an independent program in execution with its own address space, while a thread is a lightweight unit of execution within a process that shares the process's address space. Threads are considered lightweight because creating and switching between threads requires fewer resources than processes due to shared memory and OS structures.",
  },
  {
    type: "question_answer",
    year: 2022,
    standard: "University",
    subject: "Mechanical Engineering",
    topic: "Thermodynamics",
    difficulty: "medium",
    question:
      "State the Second Law of Thermodynamics and explain the concept of entropy with an example.",
    answer:
      "The Second Law states that the total entropy of an isolated system can never decrease over time. Entropy measures disorder; for example, heat flows spontaneously from a hot body to a cold one, increasing total entropy, and the reverse process requires external work.",
  },
  {
    type: "question_answer",
    year: 2021,
    standard: "University",
    subject: "Electrical Engineering",
    topic: "Circuit Theory",
    difficulty: "easy",
    question:
      "For a series RC circuit with R=1kΩ and C=100µF connected to a 10V DC source, what is the time constant and the capacitor voltage at t=τ?",
    answer:
      "Time constant τ = RC = 1kΩ × 100µF = 0.1 s. The capacitor voltage at t=τ is Vc = V(1 − e^{-1}) ≈ 10 × 0.632 = 6.32 V.",
  },
  {
    type: "question_answer",
    year: 2020,
    standard: "University",
    subject: "Civil Engineering",
    topic: "Strength of Materials",
    difficulty: "medium",
    question:
      "Define stress and strain. A steel rod of length 2 m and cross-sectional area 100 mm² is subjected to a tensile force of 20 kN. Find the stress and strain (E = 200 GPa).",
    answer:
      "Stress = Force/Area = 20,000 N / (100 × 10^{-6} m²) = 200 MPa. Strain = Stress/E = 200 MPa / 200 GPa = 0.001.",
  },
];

export default function QuestionPapers() {
  const { user, isAuthenticated } = useUser();
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedStandard, setSelectedStandard] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [showAnswers, setShowAnswers] = useState<Set<number>>(new Set());

  // Automatically set user's standard when logged in
  useEffect(() => {
    if (isAuthenticated && user?.standard) {
      setSelectedStandard(user.standard);
    }
  }, [isAuthenticated, user]);

  // Extract unique values for filters
  const subjects = [...new Set(questionDatabase.map((q) => q.subject))].sort();
  const standards = [
    ...new Set(
      questionDatabase.filter((q) => q.standard).map((q) => q.standard!),
    ),
  ].sort();
  const difficulties = ["easy", "medium", "hard"];
  const years = [
    ...new Set(questionDatabase.filter((q) => q.year).map((q) => q.year!)),
  ].sort((a, b) => b - a);

  // Filter questions based on selections
  const filteredQuestions = questionDatabase.filter((item) => {
    if (item.type !== "question_answer") return false;

    if (selectedSubject && item.subject !== selectedSubject) return false;
    if (selectedStandard && item.standard !== selectedStandard) return false;
    if (selectedDifficulty && item.difficulty !== selectedDifficulty)
      return false;
    if (selectedYear && item.year?.toString() !== selectedYear) return false;

    return true;
  });

  const toggleAnswer = (index: number) => {
    const newShowAnswers = new Set(showAnswers);
    if (showAnswers.has(index)) {
      newShowAnswers.delete(index);
    } else {
      newShowAnswers.add(index);
    }
    setShowAnswers(newShowAnswers);
  };

  const clearFilters = () => {
    setSelectedSubject("");
    setSelectedStandard("");
    setSelectedDifficulty("");
    setSelectedYear("");
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

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
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              {isAuthenticated && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <User className="h-4 w-4" />
                  <span>{user?.firstName}</span>
                  <Badge variant="outline">{user?.standard}</Badge>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Question Papers
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access thousands of real exam questions from past papers, organized
            by subject, class, and difficulty. Perfect for comprehensive exam
            preparation and testing your knowledge.
          </p>
        </div>

        {/* Information Section */}
        <Card className="border-0 shadow-lg bg-white mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Why Practice with Past Papers?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Real Exam Experience
                </h3>
                <p className="text-sm text-gray-600">
                  Practice with actual questions from previous exams
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Time Management
                </h3>
                <p className="text-sm text-gray-600">
                  Learn to manage time effectively during exams
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Identify Patterns
                </h3>
                <p className="text-sm text-gray-600">
                  Understand question patterns and trending topics
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Search className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Targeted Practice
                </h3>
                <p className="text-sm text-gray-600">
                  Focus on specific subjects and difficulty levels
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-8 border-0 shadow-lg bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter Questions
            </CardTitle>
            <CardDescription>
              Select your subject and class to find relevant questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Select
                  value={selectedSubject}
                  onValueChange={setSelectedSubject}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class/Standard
                  {isAuthenticated && user?.standard && (
                    <span className="text-xs text-green-600 ml-2">
                      (Auto-selected from your profile)
                    </span>
                  )}
                </label>
                <Select
                  value={selectedStandard}
                  onValueChange={setSelectedStandard}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    {standards.map((standard) => (
                      <SelectItem key={standard} value={standard}>
                        {standard}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty
                </label>
                <Select
                  value={selectedDifficulty}
                  onValueChange={setSelectedDifficulty}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficulties.map((difficulty) => (
                      <SelectItem key={difficulty} value={difficulty}>
                        {difficulty.charAt(0).toUpperCase() +
                          difficulty.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year
                </label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Search className="h-4 w-4" />
                Showing {filteredQuestions.length} questions
              </div>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-6">
          {filteredQuestions.length === 0 ? (
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No questions found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters to find more questions.
                </p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </CardContent>
            </Card>
          ) : (
            filteredQuestions.map((question, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                        Question {index + 1}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{question.subject}</Badge>
                        <Badge variant="outline">{question.standard}</Badge>
                        <Badge
                          className={getDifficultyColor(question.difficulty!)}
                        >
                          {question.difficulty?.charAt(0).toUpperCase() +
                            question.difficulty?.slice(1)}
                        </Badge>
                        {question.year && (
                          <Badge variant="outline">
                            <Clock className="h-3 w-3 mr-1" />
                            {question.year}
                          </Badge>
                        )}
                        <Badge variant="outline">{question.topic}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Question:
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {question.question}
                      </p>
                    </div>

                    {showAnswers.has(index) && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-medium text-green-900 mb-2">
                          Answer:
                        </h4>
                        <p className="text-green-800 leading-relaxed">
                          {question.answer}
                        </p>
                      </div>
                    )}

                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        onClick={() => toggleAnswer(index)}
                        className="flex items-center gap-2"
                      >
                        {showAnswers.has(index) ? "Hide Answer" : "Show Answer"}
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${
                            showAnswers.has(index) ? "rotate-90" : ""
                          }`}
                        />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Stats */}
        {filteredQuestions.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-pink-500 to-blue-500 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">
                  {filteredQuestions.length}
                </div>
                <div className="text-blue-100">Questions Available</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-600 to-teal-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">
                  {Math.round(
                    (filteredQuestions.filter((q) => q.difficulty === "easy")
                      .length /
                      filteredQuestions.length) *
                      100,
                  )}
                  %
                </div>
                <div className="text-green-100">Easy Questions</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">
                  {new Set(filteredQuestions.map((q) => q.topic)).size}
                </div>
                <div className="text-purple-100">Different Topics</div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

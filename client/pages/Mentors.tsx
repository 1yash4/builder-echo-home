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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUser } from "@/contexts/UserContext";
import {
  Home,
  Video,
  Phone,
  MessageCircle,
  Star,
  Clock,
  Users,
  Filter,
  GraduationCap,
  Search,
  Calendar,
  Globe,
  Award,
  BookOpen,
  Heart,
  PhoneCall,
  Brain,
  User,
} from "lucide-react";

interface Mentor {
  id: string;
  name: string;
  title: string;
  subjects: string[];
  rating: number;
  totalSessions: number;
  experience: string;
  languages: string[];
  hourlyRate: number;
  profileImage: string;
  description: string;
  specializations: string[];
  availability: string;
  verified: boolean;
}

const mentors: Mentor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    title: "Mathematics Professor",
    subjects: ["Mathematics", "Statistics", "Calculus"],
    rating: 4.9,
    totalSessions: 1250,
    experience: "8 years",
    languages: ["English", "Spanish"],
    hourlyRate: 45,
    profileImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=150&h=150&fit=crop&crop=face",
    description:
      "Passionate about making complex mathematical concepts simple and understandable. Specialized in helping students overcome math anxiety.",
    specializations: ["Algebra", "Geometry", "Trigonometry", "AP Math"],
    availability: "Mon-Fri 9AM-6PM",
    verified: true,
  },
  {
    id: "2",
    name: "Prof. Michael Chen",
    title: "Physics Researcher",
    subjects: ["Physics", "Chemistry", "Engineering"],
    rating: 4.8,
    totalSessions: 980,
    experience: "12 years",
    languages: ["English", "Mandarin"],
    hourlyRate: 50,
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    description:
      "Former NASA researcher with a passion for teaching. I help students understand the beauty of physics through real-world applications.",
    specializations: [
      "Quantum Physics",
      "Mechanics",
      "Thermodynamics",
      "AP Physics",
    ],
    availability: "Tue-Sat 2PM-9PM",
    verified: true,
  },
  {
    id: "3",
    name: "Ms. Emily Rodriguez",
    title: "Biology Expert",
    subjects: ["Biology", "Chemistry", "Environmental Science"],
    rating: 4.9,
    totalSessions: 1100,
    experience: "6 years",
    languages: ["English", "French"],
    hourlyRate: 40,
    profileImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    description:
      "Medical school graduate specializing in life sciences. I make biology fascinating by connecting it to everyday life and medical applications.",
    specializations: ["Cell Biology", "Genetics", "Anatomy", "MCAT Prep"],
    availability: "Mon-Thu 4PM-10PM",
    verified: true,
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    title: "Computer Science Mentor",
    subjects: ["Computer Science", "Programming", "Mathematics"],
    rating: 4.7,
    totalSessions: 850,
    experience: "10 years",
    languages: ["English"],
    hourlyRate: 55,
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    description:
      "Senior software engineer at tech companies. I help students master programming and prepare for technical interviews.",
    specializations: ["Python", "JavaScript", "Data Structures", "Algorithms"],
    availability: "Weekends 10AM-8PM",
    verified: true,
  },
  {
    id: "5",
    name: "Prof. Lisa Anderson",
    title: "Chemistry Specialist",
    subjects: ["Chemistry", "Biochemistry", "Organic Chemistry"],
    rating: 4.8,
    totalSessions: 1300,
    experience: "15 years",
    languages: ["English", "German"],
    hourlyRate: 48,
    profileImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    description:
      "University professor with extensive research background. I help students understand chemistry through interactive experiments and real examples.",
    specializations: [
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Physical Chemistry",
      "AP Chemistry",
    ],
    availability: "Mon-Fri 1PM-7PM",
    verified: true,
  },
  {
    id: "6",
    name: "Mr. David Kumar",
    title: "English Literature Tutor",
    subjects: ["English", "Literature", "Writing"],
    rating: 4.6,
    totalSessions: 720,
    experience: "5 years",
    languages: ["English", "Hindi"],
    hourlyRate: 35,
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    description:
      "Published author and literature enthusiast. I help students develop critical thinking and writing skills through engaging discussions.",
    specializations: [
      "Essay Writing",
      "Poetry Analysis",
      "Grammar",
      "SAT English",
    ],
    availability: "Daily 6PM-11PM",
    verified: false,
  },
];

export default function Mentors() {
  const { user, isAuthenticated } = useUser();
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [connectionType, setConnectionType] = useState<
    "video" | "voice" | "chat" | null
  >(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Auto-select user's first subject when logged in
  useEffect(() => {
    if (
      isAuthenticated &&
      user?.subjects &&
      user.subjects.length > 0 &&
      !selectedSubject
    ) {
      setSelectedSubject(user.subjects[0]);
    }
  }, [isAuthenticated, user, selectedSubject]);

  // Extract unique subjects for filtering
  const subjects = [...new Set(mentors.flatMap((m) => m.subjects))].sort();

  // Filter mentors based on selections
  const filteredMentors = mentors.filter((mentor) => {
    if (selectedSubject && !mentor.subjects.includes(selectedSubject))
      return false;
    if (
      searchTerm &&
      !mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !mentor.subjects.some((subject) =>
        subject.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    )
      return false;
    return true;
  });

  const clearFilters = () => {
    setSelectedSubject("");
    setSearchTerm("");
  };

  const handleConnect = (mentor: Mentor, type: "video" | "voice" | "chat") => {
    setSelectedMentor(mentor);
    setConnectionType(type);
  };

  const ConnectionModal = () => {
    if (!selectedMentor || !connectionType) return null;

    const getConnectionIcon = () => {
      switch (connectionType) {
        case "video":
          return <Video className="h-8 w-8" />;
        case "voice":
          return <PhoneCall className="h-8 w-8" />;
        case "chat":
          return <MessageCircle className="h-8 w-8" />;
      }
    };

    const getConnectionTitle = () => {
      switch (connectionType) {
        case "video":
          return "Video Call";
        case "voice":
          return "Voice Call";
        case "chat":
          return "Chat Session";
      }
    };

    return (
      <Dialog
        open={!!selectedMentor}
        onOpenChange={() => {
          setSelectedMentor(null);
          setConnectionType(null);
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {getConnectionIcon()}
              Connect via {getConnectionTitle()}
            </DialogTitle>
            <DialogDescription>
              Starting {connectionType} session with {selectedMentor.name}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <img
                src={selectedMentor.profileImage}
                alt={selectedMentor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">
                  {selectedMentor.name}
                </h3>
                <p className="text-sm text-gray-600">{selectedMentor.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">
                    {selectedMentor.rating}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Session Rate:</span>
                <span className="font-semibold">
                  ${selectedMentor.hourlyRate}/hour
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Estimated Duration:</span>
                <span className="font-semibold">60 minutes</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Connection Type:</span>
                <span className="font-semibold capitalize">
                  {connectionType}
                </span>
              </div>
            </div>

            {connectionType === "video" && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  📹 Make sure your camera and microphone are working. You'll be
                  redirected to the video call interface.
                </p>
              </div>
            )}

            {connectionType === "voice" && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-800">
                  📞 You'll receive a call shortly. Please ensure you're in a
                  quiet environment.
                </p>
              </div>
            )}

            {connectionType === "chat" && (
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <p className="text-sm text-purple-800">
                  💬 You'll be connected to a real-time chat with your mentor.
                  Type your questions freely!
                </p>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedMentor(null);
                  setConnectionType(null);
                }}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600"
                onClick={() => {
                  // Here you would integrate with actual video/voice/chat service
                  alert(
                    `Starting ${connectionType} session with ${selectedMentor.name}!`,
                  );
                  setSelectedMentor(null);
                  setConnectionType(null);
                }}
              >
                Start Session
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                StudyGenie
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
                  {user?.subjects && user.subjects.length > 0 && (
                    <Badge variant="secondary">
                      {user.subjects.length} subjects
                    </Badge>
                  )}
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
            <Users className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Expert Mentors</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with experienced mentors for personalized learning support.
            Get instant help through video calls, voice calls, or chat to solve
            your doubts and accelerate your academic progress.
          </p>
        </div>

        {/* Information Section */}
        <Card className="border-0 shadow-lg bg-white mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Why Choose Personal Mentoring?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Video className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Live Interaction
                </h3>
                <p className="text-sm text-gray-600">
                  Real-time communication with expert mentors
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Personalized Learning
                </h3>
                <p className="text-sm text-gray-600">
                  Customized explanations based on your learning style
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Flexible Scheduling
                </h3>
                <p className="text-sm text-gray-600">
                  Book sessions at your convenient time
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Verified Experts
                </h3>
                <p className="text-sm text-gray-600">
                  Qualified mentors with proven track records
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
              Find Your Perfect Mentor
            </CardTitle>
            <CardDescription>
              {isAuthenticated && user?.subjects && user.subjects.length > 0
                ? `Showing mentors for your subjects: ${user.subjects.join(", ")}`
                : "Filter by subject or search by name to find the right mentor for you"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                  {isAuthenticated &&
                    user?.subjects &&
                    selectedSubject &&
                    user.subjects.includes(selectedSubject) && (
                      <span className="text-xs text-green-600 ml-2">
                        (From your profile)
                      </span>
                    )}
                </label>
                <Select
                  value={selectedSubject}
                  onValueChange={setSelectedSubject}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All subjects" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Show user's subjects first if logged in */}
                    {isAuthenticated &&
                      user?.subjects &&
                      user.subjects.length > 0 && (
                        <>
                          <div className="px-2 py-1 text-xs font-semibold text-gray-500 border-b">
                            Your Subjects
                          </div>
                          {user.subjects.map((subject) => (
                            <SelectItem key={`user-${subject}`} value={subject}>
                              <div className="flex items-center gap-2">
                                {subject}
                                <Badge variant="secondary" className="text-xs">
                                  Your subject
                                </Badge>
                              </div>
                            </SelectItem>
                          ))}
                          <div className="px-2 py-1 text-xs font-semibold text-gray-500 border-b">
                            All Subjects
                          </div>
                        </>
                      )}
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
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name or subject..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                {filteredMentors.length} mentors available
              </div>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* User Profile Recommendations */}
        {isAuthenticated && user?.subjects && user.subjects.length > 0 && (
          <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <User className="h-5 w-5" />
                Recommended for {user.firstName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Your Standard:</span>
                  <div className="font-medium">{user.standard}</div>
                </div>
                <div>
                  <span className="text-gray-600">Your Subjects:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {user.subjects.map((subject) => (
                      <Badge
                        key={subject}
                        variant="secondary"
                        className="text-xs"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                We've pre-selected mentors who specialize in your subjects. You
                can explore other subjects too!
              </p>
            </CardContent>
          </Card>
        )}

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <Card
              key={mentor.id}
              className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={mentor.profileImage}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {mentor.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <Award className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                      {mentor.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 mb-2">
                      {mentor.title}
                    </CardDescription>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">
                          {mentor.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-600">
                        {mentor.totalSessions} sessions
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {mentor.subjects.slice(0, 3).map((subject, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {subject}
                      </Badge>
                    ))}
                    {mentor.subjects.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{mentor.subjects.length - 3}
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {mentor.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{mentor.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      <span>{mentor.languages.join(", ")}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-semibold text-gray-900">
                        ${mentor.hourlyRate}/hour
                      </span>
                      <span className="text-sm text-gray-600">
                        {mentor.availability}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleConnect(mentor, "video")}
                        className="flex items-center gap-1"
                      >
                        <Video className="h-3 w-3" />
                        Video
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleConnect(mentor, "voice")}
                        className="flex items-center gap-1"
                      >
                        <PhoneCall className="h-3 w-3" />
                        Voice
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleConnect(mentor, "chat")}
                        className="flex items-center gap-1"
                      >
                        <MessageCircle className="h-3 w-3" />
                        Chat
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredMentors.length === 0 && (
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="text-center py-12">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No mentors found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters to find more mentors.
              </p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </CardContent>
          </Card>
        )}

        {/* Stats */}
        {filteredMentors.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">
                  {filteredMentors.length}
                </div>
                <div className="text-blue-100">Expert Mentors</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-600 to-teal-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">
                  {Math.round(
                    (filteredMentors.reduce(
                      (acc, mentor) => acc + mentor.rating,
                      0,
                    ) /
                      filteredMentors.length) *
                      10,
                  ) / 10}
                </div>
                <div className="text-green-100">Avg Rating</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">
                  {filteredMentors
                    .reduce((acc, mentor) => acc + mentor.totalSessions, 0)
                    .toLocaleString()}
                </div>
                <div className="text-purple-100">Total Sessions</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-600 to-red-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">
                  {new Set(filteredMentors.flatMap((m) => m.subjects)).size}
                </div>
                <div className="text-orange-100">Subjects Covered</div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <ConnectionModal />
    </div>
  );
}

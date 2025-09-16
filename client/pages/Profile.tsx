import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/contexts/UserContext";
import {
  Home,
  User,
  Edit,
  Save,
  LogOut,
  GraduationCap,
  BookOpen,
  Mail,
  Phone,
  Calendar,
  School,
  MapPin,
  Target,
} from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();
  const { user, updateProfile, logout, isAuthenticated } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if not authenticated
  if (!isAuthenticated || !user) {
    navigate("/login");
    return null;
  }

  // Form state
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    dateOfBirth: user.dateOfBirth,
    standard: user.standard,
    subjects: user.subjects,
    school: user.school,
    city: user.city,
    phone: user.phone,
    parentEmail: user.parentEmail || "",
    parentPhone: user.parentPhone || "",
    learningGoals: user.learningGoals,
  });

  const standards = [
    "6th Grade",
    "7th Grade",
    "8th Grade",
    "9th Grade",
    "10th Grade",
    "11th Grade",
    "12th Grade",
    "University 1st Year",
    "University 2nd Year",
    "University 3rd Year",
    "University 4th Year",
    "Graduate",
    "Professional",
  ];

  const availableSubjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Science",
    "English",
    "Hindi",
    "Computer Science",
    "History",
    "Geography",
    "Economics",
    "Political Science",
    "Psychology",
    "Literature",
    "Engineering",
    "Medicine",
    "Business Studies",
    "Accounting",
  ];

  const learningGoalOptions = [
    "Improve grades",
    "Exam preparation",
    "Concept understanding",
    "Homework help",
    "Competitive exams",
    "Skill development",
    "Career preparation",
    "Personal growth",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubjectToggle = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject],
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      learningGoals: prev.learningGoals.includes(goal)
        ? prev.learningGoals.filter((g) => g !== goal)
        : [...prev.learningGoals, goal],
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      updateProfile(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Update error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      standard: user.standard,
      subjects: user.subjects,
      school: user.school,
      city: user.city,
      phone: user.phone,
      parentEmail: user.parentEmail || "",
      parentPhone: user.parentPhone || "",
      learningGoals: user.learningGoals,
    });
    setIsEditing(false);
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
              <Link to="/" className="text-gray-600 hover:text-blue-600">
                <Home className="h-4 w-4 mr-2 inline" />
                Back to Home
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
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Profile
          </h1>
          <p className="text-xl text-gray-600">
            Manage your personal information and learning preferences
          </p>
        </div>

        <Card className="border-0 shadow-2xl bg-white">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <User className="h-6 w-6" />
                  {user.firstName} {user.lastName}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary">{user.standard}</Badge>
                  <span>•</span>
                  <span>{user.subjects.length} subjects</span>
                  <span>•</span>
                  <span>
                    Member since {new Date(user.createdAt).toLocaleDateString()}
                  </span>
                </CardDescription>
              </div>
              <Button
                variant={isEditing ? "outline" : "default"}
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2"
              >
                <Edit className="h-4 w-4" />
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  {isEditing ? (
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                    />
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-md">
                      {user.firstName}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  {isEditing ? (
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                    />
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-md">
                      {user.lastName}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-md flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      {user.email}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-md flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      {user.phone}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  {isEditing ? (
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        handleInputChange("dateOfBirth", e.target.value)
                      }
                    />
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-md flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      {new Date(user.dateOfBirth).toLocaleDateString()}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Academic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="standard">Class/Standard</Label>
                  {isEditing ? (
                    <Select
                      value={formData.standard}
                      onValueChange={(value) =>
                        handleInputChange("standard", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {standards.map((standard) => (
                          <SelectItem key={standard} value={standard}>
                            {standard}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-md">
                      {user.standard}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school">School/Institution</Label>
                  {isEditing ? (
                    <Input
                      id="school"
                      value={formData.school}
                      onChange={(e) =>
                        handleInputChange("school", e.target.value)
                      }
                    />
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-md flex items-center gap-2">
                      <School className="h-4 w-4 text-gray-500" />
                      {user.school}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Subjects</Label>
                {isEditing ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4 border rounded-md">
                    {availableSubjects.map((subject) => (
                      <div
                        key={subject}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={subject}
                          checked={formData.subjects.includes(subject)}
                          onCheckedChange={() => handleSubjectToggle(subject)}
                        />
                        <Label htmlFor={subject} className="text-sm">
                          {subject}
                        </Label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {user.subjects.map((subject) => (
                      <Badge key={subject} variant="secondary">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Learning Goals */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Learning Goals
              </h3>
              {isEditing ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 border rounded-md">
                  {learningGoalOptions.map((goal) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <Checkbox
                        id={goal}
                        checked={formData.learningGoals.includes(goal)}
                        onCheckedChange={() => handleGoalToggle(goal)}
                      />
                      <Label htmlFor={goal} className="text-sm">
                        {goal}
                      </Label>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {user.learningGoals.map((goal) => (
                    <Badge key={goal} variant="outline">
                      {goal}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {isEditing && (
              <div className="flex gap-4 pt-6 border-t">
                <Button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-pink-500 to-blue-500"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

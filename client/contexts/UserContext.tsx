import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  standard: string;
  subjects: string[];
  school: string;
  city: string;
  phone: string;
  parentEmail?: string;
  parentPhone?: string;
  learningGoals: string[];
  profileImage?: string;
  createdAt: string;
}

interface UserContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (userData: UserProfile) => void;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user data from localStorage on component mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('studygenie_user');
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
      localStorage.removeItem('studygenie_user');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save user data to localStorage whenever user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('studygenie_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('studygenie_user');
    }
  }, [user]);

  const login = (userData: UserProfile) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('studygenie_user');
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
    }
  };

  const value: UserContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    updateProfile,
    isLoading,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

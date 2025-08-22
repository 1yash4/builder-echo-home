import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, RotateCcw, Home, Lightbulb, Shuffle } from "lucide-react";
import { Link } from "react-router-dom";

interface Flashcard {
  term: string;
  definition: string;
}

const sampleFlashcards: Flashcard[] = [
  {
    term: "Photosynthesis",
    definition: "The process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll pigments."
  },
  {
    term: "Mitochondria",
    definition: "The powerhouse of the cell, responsible for producing energy (ATP) through cellular respiration."
  },
  {
    term: "DNA",
    definition: "Deoxyribonucleic acid, a molecule that carries genetic instructions for the development and function of living things."
  },
  {
    term: "Ecosystem",
    definition: "A biological community of interacting organisms and their physical environment."
  },
  {
    term: "Cell Membrane",
    definition: "A biological membrane that separates the interior of all cells from the outside environment and controls what enters and exits the cell."
  },
  {
    term: "Enzymes",
    definition: "Proteins that catalyze biochemical reactions by lowering the activation energy required for the reaction to occur."
  },
  {
    term: "Homeostasis",
    definition: "The tendency of a system, especially the physiological system of higher animals, to maintain internal stability."
  },
  {
    term: "Genetics",
    definition: "The study of heredity and the variation of inherited characteristics."
  }
];

export default function Flashcards() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [flashcards, setFlashcards] = useState(sampleFlashcards);

  const progress = ((studiedCards.size) / flashcards.length) * 100;

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setStudiedCards(prev => new Set(prev).add(currentCard));
    }
  };

  const handleNext = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };

  const shuffleCards = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentCard(0);
    setIsFlipped(false);
    setStudiedCards(new Set());
  };

  const resetProgress = () => {
    setCurrentCard(0);
    setIsFlipped(false);
    setStudiedCards(new Set());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Digital Flashcards</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Master key concepts with interactive flashcards featuring 3D flip animations.
            Perfect for memorizing terms, definitions, and important facts from your study material.
          </p>
        </div>

        {/* Information Section */}
        <Card className="border-0 shadow-lg bg-white mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">How Flashcards Help You Learn</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Active Recall</h3>
                <p className="text-sm text-gray-600">Test yourself to strengthen memory retention</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <RotateCcw className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Spaced Repetition</h3>
                <p className="text-sm text-gray-600">Review cards at optimal intervals for long-term retention</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shuffle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Random Order</h3>
                <p className="text-sm text-gray-600">Shuffle cards to avoid pattern memorization</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <ChevronRight className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                <p className="text-sm text-gray-600">Monitor your learning progress in real-time</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress and Stats */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="px-3 py-1">
                Card {currentCard + 1} of {flashcards.length}
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Studied: {studiedCards.size}/{flashcards.length}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={shuffleCards}>
                <Shuffle className="h-4 w-4 mr-2" />
                Shuffle
              </Button>
              <Button variant="outline" size="sm" onClick={resetProgress}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
          <Progress value={progress} className="w-full h-3" />
          <p className="text-center text-sm text-gray-600 mt-2">
            {Math.round(progress)}% Complete
          </p>
        </div>

        {/* Flashcard */}
        <div className="flex justify-center mb-8">
          <div 
            className="relative w-full max-w-md h-80 cursor-pointer perspective-1000"
            onClick={handleCardFlip}
          >
            <div className={`relative w-full h-full transition-transform duration-600 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              {/* Front of card */}
              <Card className={`absolute inset-0 w-full h-full border-0 shadow-2xl backface-hidden ${isFlipped ? 'invisible' : 'visible'}`}>
                <CardContent className="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg">
                  <div className="text-center">
                    <div className="mb-4">
                      <Lightbulb className="h-12 w-12 mx-auto opacity-80" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">
                      {flashcards[currentCard].term}
                    </h2>
                    <p className="text-blue-100 text-sm">
                      Click to see definition
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Back of card */}
              <Card className={`absolute inset-0 w-full h-full border-0 shadow-2xl backface-hidden rotate-y-180 ${isFlipped ? 'visible' : 'invisible'}`}>
                <CardContent className="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-lg">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4 text-green-100">
                      {flashcards[currentCard].term}
                    </h3>
                    <p className="text-base leading-relaxed">
                      {flashcards[currentCard].definition}
                    </p>
                    <p className="text-green-100 text-sm mt-4">
                      Click to flip back
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentCard === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex gap-2">
            {flashcards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentCard(index);
                  setIsFlipped(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentCard 
                    ? 'bg-blue-600' 
                    : studiedCards.has(index)
                    ? 'bg-green-400'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Button 
            variant="outline" 
            onClick={handleNext}
            disabled={currentCard === flashcards.length - 1}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Completion Message */}
        {studiedCards.size === flashcards.length && (
          <div className="mt-8 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <div className="text-green-700">
                  <h3 className="text-xl font-bold mb-2">🎉 Congratulations!</h3>
                  <p>You've studied all {flashcards.length} flashcards. Great job!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .transition-transform.duration-600 {
          transition: transform 0.6s;
        }
      `}</style>
    </div>
  );
}

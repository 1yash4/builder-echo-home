import React from "react";
import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Summary from "./pages/Summary";
import Quiz from "./pages/Quiz";
import Flashcards from "./pages/Flashcards";
import QuestionPapers from "./pages/QuestionPapers";
import Mentors from "./pages/Mentors";
import AITutor from "./pages/AITutor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/question-papers" element={<QuestionPapers />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/ai-tutor" element={<AITutor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

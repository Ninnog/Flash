import { ContentHeader, StudyShell } from "@/components/StudyShell";
import { Button } from "@/components/ui/button";
import { BookOpen, BrainCircuit, LibraryBig } from "lucide-react";
import { useLocation } from "wouter";

export default function ManageContent() {
  const [, setLocation] = useLocation();
  return <StudyShell eyebrow="Espace de travail" title="Créer du contenu"><ContentHeader label="ATELIER PÉDAGOGIQUE" title="Choisis le bon espace de création." description="Les fiches se créent dans la Bibliothèque, les exercices dans Exercices et les chapitres dans Matières." onBack={() => setLocation("/")} /><div className="grid gap-5 md:grid-cols-3"><section className="study-panel"><LibraryBig size={24} /><h2>Fiches</h2><p>Créer et organiser tes fiches techniques avec LaTeX.</p><Button onClick={() => setLocation("/bibliotheque")}>Ouvrir la Bibliothèque</Button></section><section className="study-panel"><BookOpen size={24} /><h2>Exercices</h2><p>Créer des exercices de cours, preuves ou oral.</p><Button onClick={() => setLocation("/entrainement")}>Ouvrir Exercices</Button></section><section className="study-panel"><BrainCircuit size={24} /><h2>Matières</h2><p>Créer les matières et leurs chapitres associés.</p><Button onClick={() => setLocation("/matieres")}>Ouvrir Matières</Button></section></div></StudyShell>;
}

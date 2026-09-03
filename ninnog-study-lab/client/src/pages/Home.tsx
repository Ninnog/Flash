import { ContentHeader, ErrorState, LoadingGrid, StudyShell } from "@/components/StudyShell";
import { trpc } from "@/lib/trpc";
import { ArrowUpRight, BookOpen, BrainCircuit, CalendarCheck2, ChevronRight, Layers3, Sparkles, Target } from "lucide-react";
import { useLocation } from "wouter";

const subjectIcons = ["∑", "ϟ", "⌬", "⌘", "◌"];

export default function Home() {
  const [, setLocation] = useLocation();
  const overview = trpc.study.overview.useQuery();
  const data = overview.data;

  return <StudyShell eyebrow="Espace de travail" title="Session d’étude">
    <ContentHeader label="VUE D’ENSEMBLE" title="Ton rythme, en un regard." description="Retrouve tes ressources, choisis une intention et avance avec constance." />
    {overview.isLoading ? <LoadingGrid cards={5} /> : overview.isError || !data ? <ErrorState onRetry={() => overview.refetch()} /> : <>
      <section className="hero-panel">
        <div className="hero-copy"><p className="section-kicker text-[#8ce8df]">SESSION À LA UNE</p><h2>Concentre-toi sur l’essentiel.</h2><p>Ta bibliothèque est prête. Lance une courte session de révision et garde le fil sans te disperser.</p><button className="hero-action" onClick={() => setLocation("/entrainement")}>Démarrer l’entraînement <ArrowUpRight size={17} /></button></div>
        <div className="hero-progress"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="progress-center"><Target size={19} /><b>24 min</b><span>objectif du jour</span></div><div className="hero-stat"><CalendarCheck2 size={15} /><span>Régularité</span><b>En route</b></div></div>
      </section>
      <section className="metric-strip">
        <div><span><Layers3 size={16} /> Bibliothèque</span><b>{data.stats.cards}</b><small>fiches disponibles</small></div>
        <div><span><BookOpen size={16} /> Pratique</span><b>{data.stats.exercises}</b><small>exercices à revoir</small></div>
        <div><span><BrainCircuit size={16} /> Vision</span><b>{data.stats.mindMaps}</b><small>cartes mentales</small></div>
      </section>
      <section className="section-block"><div className="section-heading"><div><p className="section-kicker">PAR MATIÈRE</p><h2>Choisis ton prochain terrain</h2></div><button className="text-action" onClick={() => setLocation("/bibliotheque")}>Voir tout <ChevronRight size={16} /></button></div>
        <div className="subject-grid">{data.subjects.map((subject, index) => <button key={subject.id} className="subject-card" onClick={() => setLocation(`/bibliotheque?matiere=${subject.id}`)} style={{ "--subject-accent": subject.accent } as React.CSSProperties}><span className="subject-symbol">{subjectIcons[index % subjectIcons.length]}</span><span className="pack-pill">MATIÈRE {String(index + 1).padStart(2, "0")}</span><b>{subject.name}</b><small>{subject.cardCount} fiches · {subject.exerciseCount} exercices</small><ChevronRight className="subject-arrow" size={19} /></button>)}</div>
      </section>
      <section className="section-block"><div className="section-heading"><div><p className="section-kicker">REPRENDRE</p><h2>Les dernières fiches ajoutées</h2></div><button className="text-action" onClick={() => setLocation("/bibliotheque")}>Bibliothèque <ChevronRight size={16} /></button></div>
        <div className="recent-list">{data.recentCards.map((card) => <button key={card.id} onClick={() => setLocation(`/bibliotheque?fiche=${card.id}`)}><span className="recent-icon"><Sparkles size={15} /></span><span><b>{card.title}</b><small>Fiche de révision · mise à jour récemment</small></span><ChevronRight size={18} /></button>)}</div>
      </section>
    </>}
  </StudyShell>;
}

import { ContentHeader, EmptyState, LoadingGrid, StudyShell } from "@/components/StudyShell";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { CalendarDays, CheckCircle2, Clock3, LogIn } from "lucide-react";
import { useLocation } from "wouter";

export default function Progress() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const sessions = trpc.study.sessions.list.useQuery(undefined, { enabled: !!user });
  if (!user) return <StudyShell eyebrow="Espace de travail" title="Suivi"><ContentHeader label="PROGRESSION" title="Observe ton élan." description="Connecte-toi pour sauvegarder tes séances et suivre tes repères dans le temps." /><section className="training-complete"><CalendarDays size={34} /><p className="section-kicker">SUIVI PERSONNEL</p><h2>Fais de chaque séance un repère.</h2><p>Ton historique reste associé à ton compte, sans dépendance à un service externe.</p><button className="primary-action" onClick={() => navigate("/connexion")}><LogIn size={16} /> Se connecter</button></section></StudyShell>;
  const totalItems = sessions.data?.reduce((sum, session) => sum + session.itemCount, 0) ?? 0;
  const totalMinutes = Math.round((sessions.data?.reduce((sum, session) => sum + session.durationSeconds, 0) ?? 0) / 60);
  return <StudyShell eyebrow="Espace de travail" title="Suivi"><ContentHeader label="PROGRESSION" title="Ton effort laisse une trace." description="Retrouve tes dernières séances et les étapes que tu as consolidées." />{sessions.isLoading ? <LoadingGrid cards={3} /> : !sessions.data?.length ? <EmptyState title="Aucune séance enregistrée." description="Termine un entraînement pour créer ton premier repère." /> : <><section className="metric-strip"><div><span><CalendarDays size={16} /> Séances</span><b>{sessions.data.length}</b><small>dans ton historique</small></div><div><span><CheckCircle2 size={16} /> Questions</span><b>{totalItems}</b><small>travaillées</small></div><div><span><Clock3 size={16} /> Temps</span><b>{totalMinutes}</b><small>minutes de pratique</small></div></section><div className="exercise-list">{sessions.data.map((session) => { const size = session.settings?.sessionSize ?? session.itemCount; const minutes = Math.max(1, Math.round(session.durationSeconds / 60)); return <article className="exercise-preview" key={session.id}><span className="subject-dot" /><div><small>{session.subjectName ?? "Révision générale"} · séance de {size}</small><h2>{session.mode === "oral" ? "Simulation orale" : session.mode === "mind_maps" ? "Exploration de carte mentale" : "Séance d’entraînement"}</h2><p>{session.correctCount}/{session.itemCount} acquis · {minutes} min · {new Date(session.completedAt).toLocaleDateString("fr-FR")}</p></div><CheckCircle2 size={20} /></article>; })}</div></>}</StudyShell>;
}

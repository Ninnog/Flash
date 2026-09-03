import { useMemo } from "react";

export type SessionConfig = {
  subjectId?: number;
  chapterId?: number | null;
  itemCount: number;
  shuffle: boolean;
  mode?: "revision" | "entrainement" | "oral";
  correction?: "immediate" | "deferred";
  mastery?: "new" | "learning" | "confident";
  durationMinutes?: number;
  resourceType?: "all" | "cards" | "exercises" | "oral" | "mind_maps";
};

type Subject = { id: number; name: string; chapters: { id: number; name: string }[] };

export function SessionConfigurator({ subjects, value, onChange }: { subjects: Subject[]; value: SessionConfig; onChange: (value: SessionConfig) => void }) {
  const chapters = useMemo(() => subjects.find((subject) => subject.id === value.subjectId)?.chapters ?? [], [subjects, value.subjectId]);
  return <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
    <label className="text-xs font-bold text-[#536d72]">Ressources<select className="mt-1 h-10 w-full rounded-lg border border-white/70 bg-white/85 px-3 text-sm font-normal text-[#344052]" value={value.resourceType ?? "all"} onChange={(event) => onChange({ ...value, resourceType: event.target.value as SessionConfig["resourceType"] })}><option value="all">Toutes</option><option value="cards">Fiches</option><option value="exercises">Exercices</option><option value="oral">Oral</option><option value="mind_maps">Cartes mentales</option></select></label>
    <label className="text-xs font-bold text-[#536d72]">Matière<select className="mt-1 h-10 w-full rounded-lg border border-white/70 bg-white/85 px-3 text-sm font-normal text-[#344052]" value={value.subjectId ?? ""} onChange={(event) => onChange({ ...value, subjectId: event.target.value ? Number(event.target.value) : undefined, chapterId: undefined })}><option value="">Toutes les matières</option>{subjects.map((subject) => <option key={subject.id} value={subject.id}>{subject.name}</option>)}</select></label>
    <label className="text-xs font-bold text-[#536d72]">Chapitre<select className="mt-1 h-10 w-full rounded-lg border border-white/70 bg-white/85 px-3 text-sm font-normal text-[#344052]" value={value.chapterId === null ? "none" : value.chapterId ?? ""} onChange={(event) => onChange({ ...value, chapterId: event.target.value === "none" ? null : event.target.value ? Number(event.target.value) : undefined })}><option value="">Tous les chapitres</option><option value="none">Sans chapitre</option>{chapters.map((chapter) => <option key={chapter.id} value={chapter.id}>{chapter.name}</option>)}</select></label>
    <label className="text-xs font-bold text-[#536d72]">Maîtrise<select className="mt-1 h-10 w-full rounded-lg border border-white/70 bg-white/85 px-3 text-sm font-normal text-[#344052]" value={value.mastery ?? ""} onChange={(event) => onChange({ ...value, mastery: event.target.value ? event.target.value as SessionConfig["mastery"] : undefined })}><option value="">Tous les niveaux</option><option value="new">À découvrir</option><option value="learning">En cours</option><option value="confident">Acquis</option></select></label>
    <label className="text-xs font-bold text-[#536d72]">Taille<select className="mt-1 h-10 w-full rounded-lg border border-white/70 bg-white/85 px-3 text-sm font-normal text-[#344052]" value={value.itemCount} onChange={(event) => onChange({ ...value, itemCount: Number(event.target.value) })}><option value="3">3 éléments</option><option value="5">5 éléments</option><option value="10">10 éléments</option><option value="20">20 éléments</option></select></label>
    <label className="text-xs font-bold text-[#536d72]">Durée<select className="mt-1 h-10 w-full rounded-lg border border-white/70 bg-white/85 px-3 text-sm font-normal text-[#344052]" value={value.durationMinutes ?? 15} onChange={(event) => onChange({ ...value, durationMinutes: Number(event.target.value) })}><option value="10">10 min</option><option value="15">15 min</option><option value="25">25 min</option><option value="45">45 min</option></select></label>
    <label className="text-xs font-bold text-[#536d72]">Mode<select className="mt-1 h-10 w-full rounded-lg border border-white/70 bg-white/85 px-3 text-sm font-normal text-[#344052]" value={value.mode ?? "revision"} onChange={(event) => onChange({ ...value, mode: event.target.value as SessionConfig["mode"] })}><option value="revision">Révision</option><option value="entrainement">Entraînement</option><option value="oral">Oral</option></select></label>
    <label className="text-xs font-bold text-[#536d72]">Correction<select className="mt-1 h-10 w-full rounded-lg border border-white/70 bg-white/85 px-3 text-sm font-normal text-[#344052]" value={value.correction ?? "deferred"} onChange={(event) => onChange({ ...value, correction: event.target.value as SessionConfig["correction"] })}><option value="deferred">Après réponse</option><option value="immediate">Immédiate</option></select></label>
    <label className="text-xs font-bold text-[#536d72]">Ordre<select className="mt-1 h-10 w-full rounded-lg border border-white/70 bg-white/85 px-3 text-sm font-normal text-[#344052]" value={value.shuffle ? "random" : "ordered"} onChange={(event) => onChange({ ...value, shuffle: event.target.value === "random" })}><option value="random">Aléatoire</option><option value="ordered">Ordre du programme</option></select></label>
  </div>;
}

import { useAuth } from "@/_core/hooks/useAuth";
import { cn } from "@/lib/utils";
import { ArrowLeft, BookOpenText, BrainCircuit, ChartNoAxesCombined, Dumbbell, GraduationCap, Home, LibraryBig, Menu, Mic2, Search, Sparkles } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";

const navigation = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/bibliotheque", label: "Bibliothèque", icon: LibraryBig },
  { href: "/matieres", label: "Matières", icon: BookOpenText },
  { href: "/entrainement", label: "Exercices", icon: Dumbbell },
  { href: "/cartes-mentales", label: "Cartes mentales", icon: BrainCircuit },
  { href: "/oral", label: "Oral", icon: Mic2 },
  { href: "/suivi", label: "Suivi", icon: ChartNoAxesCombined },
];

export function StudyShell({ children, title, eyebrow }: { children: ReactNode; title: string; eyebrow: string }) {
  const [location, setLocation] = useLocation();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const date = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long" }).format(new Date());

  return (
    <div className="study-app min-h-screen bg-[#f7f7f3] text-[#17213a]">
      <aside className="study-sidebar hidden lg:flex">
        <Link href="/" className="brand-lockup" aria-label="Ninnog Study Lab, accueil">
          <span className="brand-mark"><Sparkles size={18} strokeWidth={2.2} /></span>
          <span><b>Ninnog</b><small>STUDY LAB</small></span>
        </Link>
        <div className="sidebar-label">ESPACE DE TRAVAIL</div>
        <nav className="space-y-1" aria-label="Navigation principale">
          {navigation.map((item) => {
            const active = item.href === "/" ? location === "/" : location.startsWith(item.href);
            return <button key={item.href} onClick={() => setLocation(item.href)} className={cn("sidebar-link", active && "is-active")}>
              <item.icon size={17} strokeWidth={active ? 2.4 : 2} /> <span>{item.label}</span>
            </button>;
          })}
        </nav>
        <div className="sidebar-tip mt-auto">
          <Sparkles size={15} />
          <div><b>Conseil du jour</b><p>Une session courte, répétée, vaut mieux qu’une longue session reportée.</p></div>
        </div>
        <button className="profile-spot" onClick={() => user ? void logout() : setLocation("/connexion")}>
          {user?.avatarUrl ? <img src={user.avatarUrl} alt="" className="avatar-dot object-cover" /> : <span className="avatar-dot">{user?.name?.slice(0, 1).toUpperCase() ?? "N"}</span>}
          <span><b>{user?.name ?? "Mode découverte"}</b><small>{user ? "Se déconnecter" : "Créer ou ouvrir un compte"}</small></span>
        </button>
      </aside>

      <div className="lg:pl-[270px]">
        <header className="study-topbar">
          <div className="flex items-center gap-3 min-w-0">
            <button className="icon-button lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Ouvrir la navigation"><Menu size={20} /></button>
            <div className="min-w-0"><p className="date-label capitalize">{date}</p><p className="page-context">{eyebrow} <span>/</span> <b>{title}</b></p></div>
          </div>
          <button onClick={() => setLocation("/bibliotheque")} className="search-button hidden sm:flex"><Search size={16} /><span>Rechercher</span><kbd>⌘ K</kbd></button>
        </header>
        {menuOpen && <nav className="mobile-menu lg:hidden" aria-label="Navigation mobile">
          {navigation.map((item) => <button key={item.href} onClick={() => { setLocation(item.href); setMenuOpen(false); }}><item.icon size={18} /> {item.label}</button>)}
        </nav>}
        <main className="study-content">{children}</main>
      </div>
      <nav className="mobile-bottom-nav lg:hidden" aria-label="Navigation rapide">
        {navigation.slice(0, 5).map((item) => {
          const active = item.href === "/" ? location === "/" : location.startsWith(item.href);
          return <button key={item.href} onClick={() => setLocation(item.href)} className={cn(active && "is-active")}><item.icon size={19} /><span>{item.label.split(" ")[0]}</span></button>;
        })}
      </nav>
    </div>
  );
}

export function ContentHeader({ label, title, description, action, onBack }: { label: string; title: string; description: string; action?: ReactNode; onBack?: () => void }) {
  return <section className="page-intro"><div>{onBack && <button type="button" onClick={onBack} className="mb-3 inline-flex items-center gap-1 text-xs font-bold text-[#6e7d83] hover:text-[#177b74]"><ArrowLeft size={14} /> Retour</button>}<p className="section-kicker">{label}</p><h1>{title}</h1><p>{description}</p></div>{action}</section>;
}

export function LoadingGrid({ cards = 4 }: { cards?: number }) {
  return <div className="loading-grid">{Array.from({ length: cards }).map((_, index) => <div className="loading-card" key={index} />)}</div>;
}

export function ErrorState({ onRetry }: { onRetry: () => void }) {
  return <div className="status-card"><BookOpenText size={28} /><h2>Impossible de charger cet espace.</h2><p>La connexion aux données a rencontré un problème temporaire.</p><button onClick={onRetry} className="primary-action">Réessayer</button></div>;
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return <div className="status-card"><GraduationCap size={30} /><h2>{title}</h2><p>{description}</p></div>;
}

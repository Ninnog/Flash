import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Library from "./pages/Library";
import MindMaps from "./pages/MindMaps";
import Oral from "./pages/Oral";
import Practice from "./pages/Practice";
import Progress from "./pages/Progress";
import Subjects from "./pages/Subjects";
import Auth from "./pages/Auth";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";

function AuthGate({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const [location] = useLocation();
  if (loading) return <div className="grid min-h-screen place-items-center bg-[#101617] text-[#a7b5b3]">Chargement des profils…</div>;
  if (!user && location !== "/connexion") return <Auth />;
  return <>{children}</>;
}

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/connexion"} component={Auth} />
      <Route path={"/"} component={Home} />
      <Route path={"/bibliotheque"} component={Library} />
      <Route path={"/entrainement"} component={() => <Practice />} />
      <Route path={"/cartes-mentales"} component={MindMaps} />
      <Route path={"/oral"} component={Oral} />
      <Route path={"/suivi"} component={Progress} />
      <Route path={"/matieres"} component={Subjects} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <AuthGate><Router /></AuthGate>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

/* Conecta Aqui — Shell de navegação: páginas institucionais com a mesma direção Modern Corporate Tech. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import InfoPage from "./pages/InfoPage";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre"><InfoPage kind="about" /></Route>
      <Route path="/contato"><InfoPage kind="contact" /></Route>
      <Route path="/politica-de-privacidade"><InfoPage kind="privacy" /></Route>
      <Route path="/termos-de-uso"><InfoPage kind="terms" /></Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

import "./App.module.css";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import Game from "./pages/Game";
import Debugger from "./pages/Debugger.tsx";

const AppLayout: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-background via-purple-950/30 to-background">
      <div className="flex-1">
        <Outlet />
      </div>
    </main>
  );
};

function App() {
  const navigate = useNavigate();

  const handleFindMatchWrapper = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    navigate("/game");
  };

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/lobby"
          element={<Lobby key="lobby" onFindMatch={handleFindMatchWrapper} />}
        />
        <Route
          path="/game"
          element={<Game onBackToLobby={() => void navigate("/lobby")} />}
        />
        <Route path="/debug" element={<Debugger />} />
        <Route path="/debug/:contractName" element={<Debugger />} />
      </Route>
    </Routes>
  );
}

export default App;

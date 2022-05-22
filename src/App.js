import "./App.css";
import Navbar from "../src/Components/Shared/Navbar";
import Allpages from "./Pages/Allpages";
import Footer from "./Components/Shared/Footer";
import { ToolsProvider } from "./ToolsContext/ToolsContext";

function App() {
  return (
    <div>
      <ToolsProvider>
        <Navbar />
        <Allpages />
        <Footer />
      </ToolsProvider>
    </div>
  );
}

export default App;

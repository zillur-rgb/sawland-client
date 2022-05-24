import "./App.css";
import Navbar from "../src/Components/Shared/Navbar";
import Allpages from "./Pages/Allpages";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Shared/Footer";
import { ToolsProvider } from "./ToolsContext/ToolsContext";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  // const queryClient = new QueryClient();
  return (
    <div>
      <ToolsProvider>
        <Navbar />
        {/* <QueryClientProvider client={queryClient}> */}
        <Allpages />
        <Footer />
        {/* </QueryClientProvider> */}
      </ToolsProvider>
      <ToastContainer />
    </div>
  );
}

export default App;

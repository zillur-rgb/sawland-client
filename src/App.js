import "./App.css";
import Navbar from "../src/Components/Shared/Navbar";
import Allpages from "./Pages/Allpages";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Shared/Footer";
import { ToolsProvider } from "./ToolsContext/ToolsContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToolsProvider>
        <Navbar />
        {/* <QueryClientProvider client={queryClient}> */}
        <Allpages />
        <Footer />
        {/* </QueryClientProvider> */}
      </ToolsProvider>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        closeOnClick
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
}

export default App;

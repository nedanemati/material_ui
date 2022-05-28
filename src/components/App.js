import Header from "../components/ui/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./ui/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<div style={{ height: "2000px" }}>Home</div>} />
          <Route path="/services" element={<>services</>} />
          <Route path="/customsoftware" element={<>customsoftware</>} />
          <Route path="/mobileapps" element={<>mobileapps</>} />
          <Route path="/websites" element={<>websites</>} />
          <Route path="/revolotion" element={<>revolotion</>} />
          <Route path="/about" element={<>about</>} />
          <Route path="/contact" element={<>contact</>} />
          <Route path="/estimate" element={<>estimate</>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

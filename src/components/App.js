import { useState } from "react";
import Header from "../components/ui/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Footer from "./ui/Footer";
import Services from "./ui/Services";
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} />

        <Routes>
          <Route exact path="/" element={<LandingPage />} />

          <Route path="/services" element={<Services />} />
          <Route path="/customsoftware" element={<>customsoftware</>} />
          <Route path="/mobileapps" element={<>mobileapps</>} />
          <Route path="/websites" element={<>websites</>} />
          <Route path="/revolotion" element={<>revolotion</>} />
          <Route path="/about" element={<>about</>} />
          <Route path="/contact" element={<>contact</>} />
          <Route path="/estimate" element={<>estimate</>} />
        </Routes>
        <Footer value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

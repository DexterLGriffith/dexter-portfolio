import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState();

  const handlePageChange = () => {
    switch (currentPage) {
      case "Resume":
        return(<Resume />);
     
      case "Projects":
        return(<Projects />);
  
      case "Contact":
        return(<Contact />);
        default:
        return(<About />);
     
    }
  };
  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div>{handlePageChange(currentPage)}</div>
      <Footer/>
    </div>
  );
}

export default App;

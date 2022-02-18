import React from "react";
import NavBar from "../NavBar";

// Application has a single Header component that appears on multiple pages, with a Navigation component within it that’s used to conditionally render About Me, Portfolio, Contact, and Resume sections.



function Header(props) {
   const {currentPage, setCurrentPage} = props;
  return (
    <div>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      
    </div>
 
  );
}

export default Header;

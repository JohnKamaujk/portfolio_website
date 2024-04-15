import React from "react";
import ClickOut from "../assets/Logos/ClickOut";
import Fiverr from "../assets/Logos/Fiverr";
import Italanta from "../assets/Logos/Italanta";

const companyLogos = {
  "ClickOut Media LTD": ClickOut,
  "Fiverr Freelance": Fiverr,
  "iTalanta hub": Italanta,
};

const HandleCompanyLogo = (company) => {
  const LogoComponent = companyLogos[company];
  if (LogoComponent) {
    return <LogoComponent />;
  } else {
    console.error(`Error: logo not found for ${company}`);
    return null; 
  }
};

export default HandleCompanyLogo;

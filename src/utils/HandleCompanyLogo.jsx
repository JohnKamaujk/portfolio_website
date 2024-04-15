import React from "react";
import ClickOut from "../assets/Logos/ClickOut";
import DjavaOptik from "../assets/Logos/DjavaOptik";
import Peduly from "../assets/Logos/Peduly";
import Italanta from "../assets/Logos/Italanta";

const HandleCompanyLogo = (company) => {
  if (company === "ClickOut Media LTD") return <ClickOut />;
  if (company === "Fiverr Freelance") return <Peduly />;
  if (company === "iTalanta hub") return <Italanta />;
  return console.error(`Error can't found logo's of ${company}`);
};

export default HandleCompanyLogo;

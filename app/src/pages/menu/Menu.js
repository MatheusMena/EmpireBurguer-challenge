import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./style.css";
import BurguerHead from "../../components/containerHamburguer/BurguerHead";
import ExtraInfo from "../../components/extraInfo/ExtraInfo";

export default function Menu() {
  return (
    <div className="menu">
      <Navbar />
      <div className="flexContainer">
        <BurguerHead />
        <ExtraInfo />
      </div>
    </div>
  );
}

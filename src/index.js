import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hangman from "./components/new/hangman/main/HangmanApp";
import Context from "./components/new/hangman/constext";

reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Context>
    <Hangman />
  </Context>
);

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesApp from "./components/new/NotesApp";
import Context from "./components/new/Context";

reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Context>
    <NotesApp />
  </Context>
);

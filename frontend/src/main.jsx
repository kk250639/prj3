import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import BoardList from "./feature/board/BoardList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BoardList />
    <ToastContainer />
  </StrictMode>,
);

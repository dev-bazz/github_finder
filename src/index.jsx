import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./style.css";

//--------------Render The React Application---------------------//

const root = ReactDOM.createRoot(document.querySelector(`#root`));
root.render(
        <React.StrictMode>
                <App />
        </React.StrictMode>
)
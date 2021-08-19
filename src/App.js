import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Main from "./components/main/main";

toast.configure();

const App = (props) => (
    <div className="App">
      <Main />
    </div>
);
export default App;

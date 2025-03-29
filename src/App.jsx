// import  Counter from './Counter'
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FormPage from "./FormPage";
// import DisplayPage from "./DisplayPage";

import { CounterProvider } from "./Context/CounterContext";
import Counter1 from "./Context/Counter1";


function App() {
  return (
<>
    {/* <Counter/> */}

    {/* this is for useContext  */}
        <CounterProvider>
          <Counter1 />
        </CounterProvider>

    {/* this is for form and display */}
    {/* // <Router>
    //   <Routes>
    //     <Route path="/" element={<FormPage />} />
    //     <Route path="/display" element={<DisplayPage />} />
    //   </Routes>
    // </Router> */}
    </>
  );
}

export default App;

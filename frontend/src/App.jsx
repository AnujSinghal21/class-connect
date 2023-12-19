// import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import VerticalNav from "./pages/VerticalNav"
import MainPage from "./pages/MainPage"
import CoursePage from "./pages/CoursePage"
import ProfPage from "./pages/ProfPage"
import AboutPage from "./pages/AboutPage"


function App() {
  return (
    <Router>
      <div className="d-flex flex-row align-items-stretch">
        <VerticalNav />
        <div className="m-2 p-0 flex-grow-1 align-self-stretch border border-secondary">
          <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route path="/courses" element={<CoursePage />} />
              <Route path="/profs" element={<ProfPage />} />
              <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>

      </div>
    </Router>
  )
}

export default App

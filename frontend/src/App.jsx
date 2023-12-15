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
      <div className="d-flex flex-row">
        <VerticalNav />
        <div className="m-2">
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

import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AnimatedSwitch } from 'react-router-transition'
import Home from './pages/Home'
import Menu from './pages/Menu'
import CSSToggle from './pages/ui/CSSToggle'
import PhysicsCarousel from './pages/ui/PhysicsCarousel'
import Projects from './pages/projects/Projects'

function App() {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path="/" exact component={Home} />
        <Route path="/css-toggle" exact component={CSSToggle} />
        <Route path="/physics-based-carousel" exact component={PhysicsCarousel} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/menu" exact component={Menu} />
      </AnimatedSwitch>
    </Router>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AnimatedSwitch } from 'react-router-transition'
import Home from './pages/Home'
import CSSToggle from './pages/ui/CSSToggle'
import PhysicsCarousel from './pages/ui/PhysicsCarousel'
import Websites from './pages/websites/Websites'

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
        <Route path="/websites" exact component={Websites} />
      </AnimatedSwitch>
    </Router>
  );
}

export default App;

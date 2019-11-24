import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AnimatedSwitch } from 'react-router-transition'
import Home from './pages/Home'
import Menu from './pages/Menu'
import CSSToggle from './pages/ui/CSSToggle'
import PhysicsCarousel from './pages/ui/PhysicsCarousel'
import Projects from './pages/projects/Projects'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools()
);

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;

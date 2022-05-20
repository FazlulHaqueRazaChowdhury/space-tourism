
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Crew from './Components/Crew/Crew';
import Technology from './Components/Technology/Technology';

import Destination from './Components/Destination/Destination';
import 'animate.css';
import AnimatedCursor from "react-animated-cursor"
function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={25}
        color='116, 113, 112'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Routes>
        <Route path='/' element={<Home />} >
        </Route>
        <Route path='/destination' element={<Destination />} >
        </Route>
        <Route path='/crew' element={<Crew />} >
        </Route>
        <Route path='/technology' element={<Technology />} >
        </Route>
      </Routes>
    </div>
  );
}

export default App;

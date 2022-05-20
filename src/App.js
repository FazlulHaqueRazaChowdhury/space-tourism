
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Crew from './Components/Crew/Crew';
import Technology from './Components/Technology/Technology';
import Header from './Components/Header/Header';
import Destination from './Components/Destination/Destination';
import 'animate.css';
function App() {
  return (
    <div className="App">

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

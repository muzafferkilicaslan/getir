import Getir from './pages/Getir';
import Homepage from './pages/Homepage';
import {Routes,Route} from 'react-router-dom';
import Header from './components/Header';

function App() {

  return(
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/getir' element={<Getir />} />
      </Routes>
    
    </>
  );
}

export default App;

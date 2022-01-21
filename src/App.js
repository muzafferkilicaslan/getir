import Getir from './pages/Getir';
import Getiryemek from './pages/Getiryemek';
import Getirbuyuk from './pages/Getirbuyuk';
import Getirsu from './pages/Getirsu';
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
        <Route path='/getiryemek' element={<Getiryemek />} />
        <Route path='/getirbuyuk' element={<Getirbuyuk />} />
        <Route path='/getirsu' element={<Getirsu />} />
      </Routes>
    
    </>
  );
}

export default App;

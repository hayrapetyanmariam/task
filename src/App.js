import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './pages/NotFound';
import Plays from './pages/plays/Plays';
import Booking from './pages/booking/Booking';

function App() {
  return (
        <Router>
          <Header/>
              <Routes>
                <Route path='/' element={<Plays/>}/>
                <Route path='/booking' element={<Booking/>}/>
                <Route path='/*' element={<NotFound/>}/>
              </Routes>
          <Footer/>
        </Router>
   
  );
}

export default App;

import Home from './Home.jsx';
import About from './About.jsx';
import Skill from './Skills.jsx'
import Services from './Services.jsx';
import Resume from './Resume.jsx';
import Contact from'./Contact.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";


function App() {
  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function HomePage(){
 return(
 <>
  <Home />
  <Contact />
  </>
  )
}

  return (
    <BrowserRouter>
    <div className="bg-black text-white">
    <Navbar />
    <ScrollToTop />
    <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/skills' element={<Skill />} />
    <Route path='/services' element={<Services />} />
    <Route path='/resume' element={<Resume />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>  
    <Footer />
    
    </div>
    </BrowserRouter>
  )
}

export default App

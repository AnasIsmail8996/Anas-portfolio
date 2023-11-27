
import { BrowserRouter as Router, Route, Routes, Navigate ,Switch} from 'react-router-dom';


import Home from './Pages/Home/Home';
import WhoIam from './Pages/WhoIam/WhoIam';
import FirstPage from './Pages/FirstPage/FirstPage';
import Education from './Pages/Education/Education';
import Skills from './Pages/Skills/Skills';
import Experiance from './Pages/Experiance/Experiance';
import Project from './Pages/Project/Project';
import Achievements from './Pages/Achievements/Achievements';
import Services from './Pages/Services/Services';
import Testimonials from './Pages/Testimonials/Testimonials';
import Contacts from './Pages/Contacts/Contacts';
import ScrollToTop from './Pages/ScrollToTop/ScrollToTop';
const App = () => {
  return (
    <>


      <Router>
        <Routes>
        <ScrollToTop/>
         
        <Switch>
            <Route path="/"  exact element={<Home />} />
            <Route path="/firstpage" element={<FirstPage />} />
            <Route path="/whoiam" element={<WhoIam />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experiance" element={<Experiance />} />
            <Route path="/project" element={<Project />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contacts" element={<Contacts />} />
           
            <Route path="*" element={<Navigate to="/" />} />
        </Switch>
        
        </Routes>
      </Router>
    </>
  );
}

export default App;

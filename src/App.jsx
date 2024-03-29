import { BrowserRouter } from "react-router-dom";

import { About, Contact, Projects, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
        <div className='bg-black bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero />
        </div>
        <About />
        <Projects />
        <Tech />
        <Works />
        
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
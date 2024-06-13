import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Nav from './common/navbar/Nav'
import StudentRegistration from './components/studentRegistration/StudentRegistration';
import Footer from './common/footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <Nav></Nav> */}


       <Router>

        <Routes>
          <Route path="/" element={<><Nav /> <StudentRegistration></StudentRegistration> <Footer></Footer> </>} />
          <Route path="/about" element={<Nav />} />
         
        </Routes>
      
    </Router>
    </>
  )
}

export default App

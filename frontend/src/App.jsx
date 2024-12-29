import Home from './component/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Contact from './component/Contact'
import About from './component/About'
import Courses from './component/Courses/Courses'
import Signup from './component/Signup'

const App = () => {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  )
}

export default App
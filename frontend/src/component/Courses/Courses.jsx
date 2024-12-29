import Course from "../Course"
import Footer from "../Footer"
import Navbar from "../navbar"

function Courses() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen">
    <Course />
    </div>
    <Footer />
    </>
  )
}

export default Courses
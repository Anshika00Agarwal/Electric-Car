import Navbar from "./Navbar"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import Book from "./pages/Book"
import Contact from "./pages/Contact"
import Slider from "./pages/Slider"
import BookLet from "./pages/BookLet"
import Service from "./pages/Service"
import Review from "./pages/Review"
import { Route, Routes } from "react-router-dom";

//const App = () => {}
function App() {
  
  
  return (
    <>
      <Navbar />
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
		  <Route path="/booklet" element={<BookLet />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/slider" element={<Slider />} /> */}
          <Route path="/service" element={<Service />} />
		  <Route path="/review" element={<Review />} />
		  <Route path="/contact" element={<Contact />} />
        </Routes>
        <div>
    
      
      </div>
      </div>
      <section class="footer">


    <h1 class="credit"> created by <span> mr. ALOK JAJOO </span> | all rights reserved! </h1>

</section>
     
    </>
    
  );
}

export default App;
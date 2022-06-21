import React from 'react'
import "./index.scss"
import Navbar from "./component/navbar/index"
import Footer from "./component/footer/index"
import Section from "./component/section/index"
import Menu from "./component/menu/index"
const App = () => {
  return (
    <>
      <div class="container">
       <Navbar/>
        <div class="section">
        <Section/>
         <Menu/>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
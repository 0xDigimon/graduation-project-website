// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from "./styles";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Footer from './components/Footer';
import Home from "./components/Home";

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Footer />
        </div>
      </div>

    </div>


  )
}

export default App
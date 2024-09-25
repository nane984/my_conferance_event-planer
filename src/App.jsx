import { useState } from 'react'
import './App.css'
import AboutUs from './components/AboutUs'
import ConferenceEvent from './components/ConferenceEvent'

function App() {
  const [showVenue, setShowVenue] = useState(false);

  const handleGetStarted = () => {
    setShowVenue(!showVenue);
  };

  return (
    <>
      <header className='first_page'>
        <div className='main_event'>
          <div className="first_page_name_btn">
            <h1>Conference Expense Planner</h1>
            <p> Plan your next major event with us!</p>
            <div className='getstarted_btn'>
              <button className='get-started-btn'
                onClick={handleGetStarted}>Get started</button>
            </div>
          </div>
          <div className="aboutus_main">
            <AboutUs/>
          </div>
        </div>
      </header>
      <div className={`event-list-container ${showVenue ? 'visible' : ''}`}>
        <ConferenceEvent/>
      </div>
    </>
  )
}

export default App

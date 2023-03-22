import './App.css';
import Header from './Navbar/Header';
import Sidebar from './Sidebar/Sidebar';
import RecommendedVideo from './RecommendedVideo/RecommendedVideo';
import Searchpage from './Searchpage/SearchPage'

//importing for using react router feature
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          
          <Routes>
            <Route path='/' element={<>
                                
                              
                                <div className="app__page">
                                  <Sidebar />
                                  <RecommendedVideo />
                                </div>     
                                
                                
                                </>} />
          

            <Route path='/search/:anyThingyouwant' element={ <>
                              <div className="app__page">
                                  <Sidebar />
                                  <Searchpage /> 
                              </div>
                                      
            </>} />
            

          </Routes>
        </Router>
    
    </div>
  );
}

export default App;

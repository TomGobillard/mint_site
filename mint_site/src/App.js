import './App.css';
import NavBar from './components/navbar';
import { HashRouter,  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="container-fluid">
          <NavBar />
          <Routes>
            <Route path="/" element={<App />} />
            {/* <Route exact path='/' element={<Index />} /> */}
            <Route exact path='/news' />
            <Route exact path='/account'  />
            <Route exact path='/news_form'  />
            <Route exact path='/login'  />
            <Route exact path='/register'/>
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

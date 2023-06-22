import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route) => {
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        })}
      </Routes>
      <div className='container text-start'>container title_cover text-center</div>
    </Router >
  );
}

export default App;

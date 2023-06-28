import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import routes from './routes';

// https://inpa.tistory.com/
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          {routes.map((route) => {
            return <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
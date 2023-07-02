import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import routes from './routes';
import MyComponent from './components/Sample';

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
      <MyComponent/>
    </div>
  );
}

export default App;
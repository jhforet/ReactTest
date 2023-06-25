import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import routes from './routes';

// https://inpa.tistory.com/
function App() {
  return (
    <div className=" bg-slate-600">
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
        <h1>hello World</h1>
        <div className="justify-between">
          <div className="w-1/3 h-96 m-1 bg-white shadow rounded row-span-2" />
          <div className="w-1/3 h-96 m-1 bg-white shadow rounded row-span-2" />
          <div className="w-1/3 h-96 m-1 bg-white shadow rounded row-span-2" />
          <div className="w-1/3 h-96 m-1 bg-white shadow rounded row-span-2" />
          <div className="w-1/3 h-96 m-1 bg-white shadow rounded row-span-2" />
          <div className="w-1/3 h-96 m-1 bg-white shadow rounded row-span-2" />
        </div>
      </Router>
    </div>
  );
}

export default App;
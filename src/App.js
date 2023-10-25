import './App.css';
import NavMenu from './components/NavMenu';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Fragment } from 'react';

function App() {
    return (
      <Fragment>
        <NavMenu />
        <div className="main-content">
            <Routes>
                {AppRoutes.map((route, index) => (
                    <Route key={index} {...route} />
                ))}
            </Routes>
        </div>
      </Fragment>
  );
}

export default App;

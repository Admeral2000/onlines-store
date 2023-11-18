import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import routesConfig from './routes/routerconfig';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div >
      <BrowserRouter>
              <Header />
              <main className="main">
                  <Routes>
                      {
                        routesConfig.map((route, index) => (
                          <Route key={index} path={route.path} element={<route.element />}></Route>
                        ))
                      }
                  </Routes>
              </main>
              <Footer />
          </BrowserRouter>
    </div>
  );
}

export default App;

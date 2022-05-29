// Routes, AuthContextProvider, Auth and AuthGuard components

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './features/Auth/Auth.context';
import { Auth } from './features/Auth/Auth';
import { AuthGuard } from './components/AuthGuard';

// Routes, AuthContextProvider, Auth and AuthGuard components

// Main Pages (Login and Register functionality implemented in Auth file)

import { Home } from './features/HomePage/Home/Home';
import { About } from "./features/AboutPage/About/About";
import { Sports } from './features/SportsPage/Sports/Sports';
import { FAQ } from './features/FAQ-Page/FAQ';
import { Contact } from './features//ContactPage/Contact';

// Main Pages (Login and Register functionality implemented in Auth file)

// Sports Page properties list pages

import { Football } from './features/SportsPage/Categories/Football/Football';
import { Basketball } from './features/SportsPage/Categories/Basketball/Basketball';
import { Tennis } from './features/SportsPage/Categories/Tennis/Tennis';
import { TableTennis } from './features/SportsPage/Categories/TableTennis/TableTennis';

// Sports Page properties list pages

// Sports Page properties details pages

import { FootballDetails } from './features/SportsPage/Categories/Football/FootballDetails';
import { BasketballDetails } from './features/SportsPage/Categories/Basketball/BasketballDetails';
import { TennisDetails } from './features/SportsPage/Categories/Tennis/TennisDetails';
import { TableTennisDetails } from './features/SportsPage/Categories/TableTennis/TableTennisDetails';

// Sports Page properties details pages

// Profile page

import { MyProfile } from './features/MyProfile/MyProfile';

// Profile page

// Page Not Found

import { PageNotFound } from './features/404PageNotFound/PageNotFound';

// Page Not Found


// CSS

import './App.css';

// CSS


export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />
        
        <Route path="profile/:userId" element={
                <AuthGuard>
                  <MyProfile />
                </AuthGuard>
              }>
          </Route>
          
        
          <Route path="/" element={<Home />}>
            
          </Route>

          <Route path="/about" element={<About />}>
          </Route>

          <Route path="/sports" element={<Sports />}>
          </Route>

          <Route path="/FAQ" element={<FAQ />}>
          </Route>

          <Route path="/contact" element={<Contact />}>
          </Route>

          <Route path="/sports/football" element={<Football />}>
          </Route>

          <Route path="/sports/football/:footBallId" element={<FootballDetails />}>
          </Route>

          <Route path="/sports/tennis" element={<Tennis />}>
          </Route>

          <Route path="/sports/tennis/:tennisId" element={<TennisDetails/>}>
          </Route>

          <Route path="/sports/basketball" element={<Basketball />}>
          </Route>

          <Route path="/sports/basketball/:basketBallId" element={<BasketballDetails />}>
          </Route>

          <Route path="/sports/table-tennis" element={<TableTennis />}>
          </Route>

          <Route path="/sports/table-tennis/:tableTennisId" element={<TableTennisDetails />}>
          </Route>

       

          <Route path="*" element={<PageNotFound/>} />

        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

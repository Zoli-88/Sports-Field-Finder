import { Outlet } from 'react-router-dom';
import { Nav } from '../../../components/Nav';
import {Header} from "../Header/Header"
import { MainSection } from '../MainSection/MainSection';
import { Partners } from '../Partners/Partners';
import { Footer } from '../Footer/Footer';

export function Home() {
  return (
    <>
      <Nav />
      <div>
        <Outlet />
      </div>
      <Header/>
      <MainSection/>
      <Partners />
      <Footer />
    </>
  );
}

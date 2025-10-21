import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header/Header';
import LatestNews from '../Component/LatestNews';
import Container from '../Component/Container/Container';
import Navbar from '../Component/Navbar';
import LeftAside from '../homeLayout/LeftAside';
import RightAside from '../homeLayout/RightAside';
import Loading from '../Pages/Loading';



const HomeLayout = () => {
  const {state}=useNavigation()
    return (
      <div>
        <header>
          <Header></Header>
          <section className="w-11/12 mx-auto">
            <LatestNews></LatestNews>
          </section>

          <nav className="w-11/12 mx-auto">
            <Navbar></Navbar>
          </nav>
        </header>

        <main className="gap-5 w-11/12 mx-auto grid grid-cols-12 my-4 ">
          <aside className="col-span-3 sticky top-0 h-fit">
            <LeftAside></LeftAside>
          </aside>

          <section className="outlet  col-span-6">
            {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
          </section>
          <aside className="col-span-3 sticky top-0 h-fit">
            <RightAside></RightAside>
          </aside>
        </main>

        <footer></footer>
      </div>
    );
};

export default HomeLayout;
import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Menu from "../Menu/Menu";
import { MenuContext } from "../../contexts/MenuContext";

const Layout = () => {
  const { pathname } = useLocation();
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => setIsMenu(prev => {
    if (prev) {
      document.body.style.overflowY = "scroll";

      return false;
    }

    document.body.style.overflow = "hidden";

    return true;
  });

  useEffect(() => {
    setIsMenu(false);
    document.body.style.overflowY = "scroll";
  }, [pathname]);

  return (
    <>
      <MenuContext.Provider value={{
        isMenu,
        toggleMenu }}
      >
        <Header />
  
        <Menu />
      </MenuContext.Provider>
  
        <main className="main">
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </main>
      <Footer />
    </>
  );
};

export default Layout;
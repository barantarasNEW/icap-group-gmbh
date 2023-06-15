import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Menu from "../Menu/Menu";

const Layout = () => {
  const { pathname } = useLocation();
  const [isMenu, setIsMenu] = useState(false);

  const onClick = () => setIsMenu(prev => {
    if (prev) {
      document.body.style.overflow = "scroll";

      return false;
    }

    document.body.style.overflow = "hidden";

    return true;
  });

  useEffect(() => {
    setIsMenu(false);
    document.body.style.overflow = "scroll";
  }, [pathname]);

  return (
    <>
      <Header isMenu={isMenu} onClick={onClick} />

      <Menu isMenu={isMenu} />

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
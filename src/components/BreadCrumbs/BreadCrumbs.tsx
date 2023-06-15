import { Fragment } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import './BreadCrumbs.scss';

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const visibleCrumbs = pathname === "/" || pathname === "/home"
    ? []
    : pathname.split("/").slice(1);

  return (
    <ul className="bread-crumbs">
      <li className="bread-crumbs__item">
        <Link to="/" className="bread-crumbs__link">
          <img
            className="icon bread-crumbs__icon--home"
            src={`${process.env.PUBLIC_URL}/assets/icons/home.svg`}
            alt="icon"
          />
        </Link>
      </li>

      {visibleCrumbs.map(value => (
        <Fragment key={value}>
          <li className="bread-crumbs__item">
            <img
              className="icon bread-crumbs__icon"
              src={`${process.env.PUBLIC_URL}/assets/icons/arrow-right.svg`}
              alt="icon"
            />
          </li>

          <li className="bread-crumbs__item">
            {value}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
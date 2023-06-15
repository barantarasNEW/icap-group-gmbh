import { useEffect, useState } from "react";
import SolutionsList from "../../components/SolutionsList/SolutionsList";
import { getSolutions } from "../../api/api";
import { Solution } from "../../types/Solution";
import './Solutions.scss';
import Loader from "../../components/Loader/Loader";

const Solutions = () => {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSolutions()
      .then(res => setSolutions(res))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="page__section solutions">
      <div className="container">
        <div className="solutions__wrapper">
          <h2 className="page__title">
            Our Projects
          </h2>

          <SolutionsList solutions={solutions} />

          <p className="solutions__quote">
            Opportunities don't happen, you create them.
            <br />
            <b className="solutions__quote--blue">
              — Chris Grosser
            </b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
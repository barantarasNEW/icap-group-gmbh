import { Solution } from "../types/Solution";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export const getSolutions = (): Promise<Solution[]> => {
  return wait(300)
    .then(() => fetch(`${BASE_URL}/solutions`))
    .then(response => response.json())
};

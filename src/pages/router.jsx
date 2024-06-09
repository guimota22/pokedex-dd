import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "./Home";
import PokemonDetails from "./PokemonDetails";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pokemon/:id",
        element: <PokemonDetails />
      }
    ],
  },
]);

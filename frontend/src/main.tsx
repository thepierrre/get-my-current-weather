import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Credits from "./components/authorship/Credits.jsx";
import DayPartContextProvider from "./DayPartContextProvider.jsx";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/credits",
    element: <Credits />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <DayPartContextProvider>
        <RouterProvider router={router} />
      </DayPartContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);

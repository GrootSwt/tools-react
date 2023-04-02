import React from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../views/Home";
import RouteError from "../components/Error/RouteError";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "memorandum",
        async lazy() {
          const { Memorandum } = await import("../views/Memorandum");
          return { Component: Memorandum };
        },
      },
      {
        path: "image-compress",
        async lazy() {
          const { ImageCompress } = await import("../views/ImageCompress");
          return { Component: ImageCompress };
        },
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;

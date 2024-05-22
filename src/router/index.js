import { Navigate } from "react-router-dom";
import { lazy } from "react";
import Page1 from "../pages/pageRouter/Page1";
import NotFound from "../pages/pageRouter/NotFound";

const Page1_1 = lazy(() => import("../pages/pageRouter/Page1_1"));
const Page1_2 = lazy(() => import("../pages/pageRouter/Page1_2"));
const Page2 = lazy(() => import("../pages/pageRouter/Page2"));
const Page3 = lazy(() => import("../pages/pageRouter/Page3"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/page1",
    element: <Page1 />,
    children: [
      {
        path: "/page1",
        element: <Navigate to="/page1/page1_1" />,
      },
      {
        path: "/page1/page1_1",
        element: <Page1_1 />,
      },
      {
        path: "/page1/page1_2",
        element: <Page1_2 />,
      },
    ],
  },
  {
    path: "/page2/:id",
    element: <Page2 />,
  },
  {
    path: "/page3",
    element: <Page3 />,
  },
  {
    path: "*", // 404 路由配置都写在最后，起到一个兜底的作用
    element: <NotFound />,
  },
];

export default routes;

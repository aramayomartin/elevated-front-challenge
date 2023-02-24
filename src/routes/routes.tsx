import { useRoutes, Outlet } from "react-router-dom";
import Home from "view/Home";

const Routes = () => {
  const appRoutes = [
    {
      path: "",
      element: <Outlet />,
      children: [
        {
            path: "",
            element: <Home/>
        },
        {
          path: "/holi",
          element: <h1>holi</h1>
        }
      ],
    },
  ];

  return useRoutes(appRoutes);
};

export default Routes;

import { FC } from "react";
import { useRoutes } from "react-router-dom";
import routes from "../../config/routes";
import Layout from "./Layout";
import NotFound from "../../pages/common/NotFound";
import HomePage from "../../pages/home/HomePage";
import ContactPage from "../../pages/contact/ContactPage";
import LoginPage from "../../pages/auth/LoginPage";

const Router: FC = () => {
    const router = useRoutes([
        {
            path: routes.home,
            element: <Layout />,
            children: [
                { index: true, element: <HomePage /> },
                { path: routes.contact, element: <ContactPage /> },
                { path: routes.login, element: <LoginPage /> },
                { path: "*", element: <NotFound /> }
            ]
        }
    ]);

    return router;
};

export default Router;

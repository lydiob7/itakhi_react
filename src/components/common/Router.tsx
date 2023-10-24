import { FC } from "react";
import { useRoutes } from "react-router-dom";
import routes from "../../config/routes";
import Layout from "./Layout";
import BlogPage from "../../pages/blog/BlogPage";
import ContactPage from "../../pages/contact/ContactPage";
import HomePage from "../../pages/home/HomePage";
import LoginPage from "../../pages/auth/LoginPage";
import NotFound from "../../pages/common/NotFound";
import PostPage from "../../pages/blog/PostPage";

const Router: FC = () => {
    const router = useRoutes([
        {
            path: routes.home,
            element: <Layout />,
            children: [
                { index: true, element: <HomePage /> },
                { path: routes.blog, element: <BlogPage /> },
                { path: routes.post(), element: <PostPage /> },
                { path: routes.contact, element: <ContactPage /> },
                { path: routes.login, element: <LoginPage /> },
                { path: "*", element: <NotFound /> }
            ]
        }
    ]);

    return router;
};

export default Router;

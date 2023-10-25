import { FC } from "react";
import { useRoutes } from "react-router-dom";
import routes from "../../config/routes";
import Layout from "./Layout";

import AuthPage from "../../pages/auth/AuthPage";
import BlogPage from "../../pages/blog/BlogPage";
import ContactPage from "../../pages/contact/ContactPage";
import DashbordPage from "../../pages/dashbord/DashbordPage";
import HomePage from "../../pages/home/HomePage";
import LoginForm from "../../pages/auth/LoginForm";
import NotFound from "../../pages/common/NotFound";
import OAuthCallbackPage from "../../pages/auth/OAuthCallbackPage";
import PostPage from "../../pages/blog/PostPage";
import PrivateRoutes from "./PrivateRoutes";
import SignupForm from "../../pages/auth/SignupForm";

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
                { element: <PrivateRoutes />, children: [{ path: routes.dashbord, element: <DashbordPage /> }] },
                {
                    path: routes.auth,
                    element: <AuthPage />,
                    children: [
                        { path: routes.login, element: <LoginForm /> },
                        { path: routes.signup, element: <SignupForm /> },
                        { path: routes.authCallback, element: <OAuthCallbackPage /> }
                    ]
                },
                { path: "*", element: <NotFound /> }
            ]
        }
    ]);

    return router;
};

export default Router;

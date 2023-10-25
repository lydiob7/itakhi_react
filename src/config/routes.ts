const routes = {
    auth: "/auth",
    authCallback: "/auth/callback",
    blog: "/blog",
    contact: "/contact",
    dashbord: "/dashbord",
    home: "/",
    login: "/auth/login",
    post: (postSlug: string = ":postSlug") => `/post/${postSlug}`,
    profile: "/profile",
    signup: "/auth/signup"
} as const;

export default routes;

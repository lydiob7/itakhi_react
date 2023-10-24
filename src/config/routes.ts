const routes = {
    home: "/",
    blog: "/blog",
    post: (postSlug: string = ":postSlug") => `/post/${postSlug}`,
    contact: "/contact",
    login: "/login"
} as const;

export default routes;

import { ComponentProps, useEffect } from "react";
import clsx from "clsx";
import { useBlogContext } from "../../context/useBlogContext";
import PostCard from "./PostCard";
import Spinner from "../../components/common/Spinner";

interface BlogPageProps extends ComponentProps<"div"> {}

const BlogPage = ({ className, ...props }: BlogPageProps) => {
    const { getPosts, isLoadingPosts, posts } = useBlogContext();

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <div className={clsx("container", className)} {...props}>
            <h2 className="text-4xl font-bold font-anton my-8">Blog</h2>
            {isLoadingPosts ? (
                <Spinner />
            ) : (
                <div className="grid gap-8 max-w-4xl my-20">
                    {posts?.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogPage;

import { ComponentProps } from "react";
import clsx from "clsx";
import Post from "../../types/Post";
import { Link } from "react-router-dom";
import routes from "../../config/routes";

const FALLBACK_POST_IMG = "";

interface PostCardProps extends ComponentProps<"div"> {
    post: Post;
}

const PostCard = ({ className, post, ...props }: PostCardProps) => {
    return (
        <Link to={routes.post(post.slug)}>
            <div className={clsx("flex gap-12 items-center h-40 w-full", className)} {...props}>
                <div className="flex-1">
                    <div className="flex gap-4 items-center">
                        <img
                            className="h-10 w-10 rounded-full object-cover overflow-hidden"
                            src={post.author.avatar?.url}
                            alt={post.author.avatar?.title}
                        />
                        <div className="font-semibold">{post.author.full_name}</div>
                        <span>
                            {" "}
                            -{" "}
                            {new Intl.DateTimeFormat(undefined, {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            }).format(new Date(post.created_at))}
                        </span>
                    </div>
                    <h3 className="font-bold text-2xl leading-loose">{post.title}</h3>
                    <p className="my-4">{post.excerpt}</p>
                    {post.tags?.length && (
                        <div className="flex gap-2 flex-wrap">
                            {post.tags.map((tag) => (
                                <span className="bg-gray rounded-full px-4 py-1" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <img
                    className="w-60 h-full shrink-0 object-cover"
                    src={post.featured_img?.url || FALLBACK_POST_IMG}
                    alt={post.featured_img?.title}
                />
            </div>
        </Link>
    );
};

export default PostCard;

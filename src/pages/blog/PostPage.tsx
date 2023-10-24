import { ComponentProps, useEffect, useState } from "react";
import clsx from "clsx";
import { Options, documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../../context/useBlogContext";
import Spinner from "../../components/common/Spinner";

const RICHTEXT_OPTIONS: Options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            if (node.data?.target?.fields?.file?.contentType?.includes("image"))
                return (
                    <div className="max-w-full h-auto">
                        <img
                            className="h-full mx-auto my-12"
                            src={node.data?.target?.fields?.file?.url}
                            alt={node.data?.target?.fields?.file?.fileName}
                        />
                    </div>
                );
            if (node.data?.target?.fields?.file?.contentType?.includes("audio"))
                return (
                    <audio controls className="mx-auto my-12">
                        <source
                            src={node.data?.target?.fields?.file?.url}
                            type={node.data?.target?.fields?.file?.contentType}
                        />
                    </audio>
                );
        },
        [BLOCKS.PARAGRAPH]: (_, children) => <p className="my-3">{children}</p>,
        [BLOCKS.HEADING_4]: (_, children) => <h4 className="font-anton text-3xl md:text-4xl my-16">{children}</h4>
    }
};

interface PostPageProps extends ComponentProps<"div"> {}

const PostPage = ({ className, ...props }: PostPageProps) => {
    const { postSlug } = useParams();
    const { currentPost, getPost, isLoadingCurrentPost } = useBlogContext();
    const [isBioExpanded, setIsBioExpanded] = useState<boolean>(false);

    useEffect(() => {
        if (postSlug) getPost(postSlug);
    }, [postSlug]);

    return (
        <div className={clsx("max-w-2xl mx-auto", className)} {...props}>
            {isLoadingCurrentPost && <Spinner />}
            {currentPost && (
                <div className="grid gap-16">
                    <div className="grid gap-4">
                        <h2 className="text-4xl font-bold">{currentPost.title}</h2>
                        <p className="text-xl font-medium text-lightBlack opacity-60">{currentPost.subtitle}</p>
                        <div className="flex gap-4 items-center">
                            <img
                                className="h-10 w-10 rounded-full object-cover overflow-hidden"
                                src={currentPost.author.avatar?.url}
                                alt={currentPost.author.avatar?.title}
                            />
                            <div>
                                <div className="font-semibold">
                                    {currentPost.author.full_name}
                                    {currentPost.author.role ? (
                                        <span className="font-normal opacity-80"> - {currentPost.author.role}</span>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <span>
                                    {new Intl.DateTimeFormat(undefined, {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric"
                                    }).format(new Date(currentPost.created_at))}
                                </span>
                            </div>
                        </div>
                        <div className="italic opacity-60">
                            Last updated:{" "}
                            {new Intl.DateTimeFormat(undefined, {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            }).format(new Date(currentPost.updated_at))}
                        </div>
                    </div>

                    {currentPost.content && (
                        <div>{documentToReactComponents(currentPost.content, RICHTEXT_OPTIONS)}</div>
                    )}

                    {currentPost.tags?.length && (
                        <div className="flex gap-2 flex-wrap">
                            {currentPost.tags.map((tag) => (
                                <span className="bg-gray rounded-full px-4 py-1" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="grid gap-4">
                        <img
                            className="h-16 w-16 rounded-full object-cover overflow-hidden"
                            src={currentPost.author.avatar?.url}
                            alt={currentPost.author.avatar?.title}
                        />
                        <div>
                            <p className="font-semibold text-2xl">Written by {currentPost.author.full_name}</p>
                            <p>{currentPost.author.role}</p>
                        </div>
                        <p className={isBioExpanded ? "" : "line-clamp-2"}>{currentPost.author.bio}</p>
                        <button className="w-max underline text-wine" onClick={() => setIsBioExpanded((b) => !b)}>
                            {isBioExpanded ? "Read less" : "Read more"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostPage;

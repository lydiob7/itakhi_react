import { Document } from "@contentful/rich-text-types";
import User from "./User";

interface Post {
    author: User;
    content?: Document;
    created_at: string;
    excerpt: string;
    featured_img?: {
        title?: string;
        url: string;
    };
    id: string;
    slug: string;
    subtitle?: string;
    tags: string[];
    title: string;
    updated_at: string;
}

export default Post;

import axios from "axios";
import { wpAPI } from './constants';

const getBlogs = (totalPost, cb) => {
    const apiUrl = `${wpAPI.posts}?per_page=${totalPost}`;

    axios.get(apiUrl)
        .then((response) => {
            const postData = extractDataForPreview(response.data);
            return cb(postData);
        })
        .catch(() => {
            return cb([]);
        });
};

const extractDataForPreview = (posts) => posts.map(({
    id,
    title: { rendered: postTitle },
    excerpt: { rendered: postPreviewContent },
    link,
    better_featured_image: { media_details }
}) => ({
    id,
    title: postTitle,
    content: postPreviewContent,
    url: link,
    imageUrl: media_details.sizes.medium.source_url,
}));

export {
    getBlogs,
}
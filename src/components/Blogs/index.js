import React, { useEffect, useState } from 'react';
import { getBlogs } from '../../api/BlogIWKZService';
import Card from './Card';
import { BlogsSection, BlogList, StyledTitle } from './styled.components';

const Blogs = () => {
    const MAX_SHOWED_BLOGS = 3;
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        if (Object.keys(blogData).length) {
            return;
        }

        getBlogs(MAX_SHOWED_BLOGS, callbackBlogData);
    });

    const callbackBlogData = (data) => setBlogData(data);

    return (
        <BlogsSection id="blogs">
            <StyledTitle className="has-text-weight-medium">Berita IWKZ</StyledTitle>
            <BlogList>
                {blogData.map((data) => (<Card key={data.id} {...data}/>))}
            </BlogList>
        </BlogsSection>
    );
};

export default Blogs;
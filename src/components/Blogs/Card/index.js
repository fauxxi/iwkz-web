import React from 'react';
import { CardSection, CardImage, CardContent } from './styled.component';

const Card = ({
    imageUrl,
    title,
    content,
    url
}) => (
    <CardSection className="card">
        <CardImage className="card-image">
            <figure className="image is-4by3">
                <a href={url} target="_blank"><img src={imageUrl} /></a>
            </figure>
        </CardImage>
        <CardContent className="card-content">
            <a href={url} target="_blank">
                <p className="title is-4" dangerouslySetInnerHTML={{__html: title}} />
            </a>
            <div className="content" dangerouslySetInnerHTML={{__html: content}} />
        </CardContent>
    </CardSection>
);

export default Card;
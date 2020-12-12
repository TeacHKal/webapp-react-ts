import React from 'react';
import { Avatar as AvatarPhoto} from '@material-ui/core';
import './index.scss';

interface IProps{
    url?: string
    alt?: string
    variant?: Variant
}

type Variant = {
    circle: 'circle',
     circular: 'circular',
     rounded: 'rounded',
     square: 'square'
}

export const Avatar: React.FC<IProps> = (props) => {

    const { url } = props;

    return(
        <div>
            <AvatarPhoto alt="avatar" src={ url } />
        </div>
    );
}
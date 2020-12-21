import React from 'react';
import {Button as Btn} from "@material-ui/core";

interface IProps {
    text: string,
    onClick: () => void,
    color?: color,
    size?: size,
    variant?: variant,
}

type color = {
    // default: default
    primary: 'primary',
    secondary: 'secondary',
    inherit: 'inherit',
}

type size = {
    // default: medium
    small: 'small',
    medium: 'medium',
    large: 'large',
}

type variant = {
    // default: text
    outlined: 'outlined',
    contained: 'contained',
}



export const Button: React.FC<IProps> = (props) =>{
    const { text } = props;
    return (
        <Btn
            onClick={() => props.onClick()}
            variant="contained"
            color="primary"
            size="small"
        >
            {text}
        </Btn>
    );

}
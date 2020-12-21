import React from 'react';
import {Button as Btn} from "@material-ui/core";

interface IProps {
    text: string,
    onClick: () => void,
    disabled?: boolean,
    color?: Color,
    size?: 'small' | 'medium' | 'large',
    variant?: 'text' | 'outlined' | 'contained',
}

type Color = 'inherit' | 'primary' | 'secondary' | 'default';

export const Button: React.FC<IProps> = (props) => {

    return (
        <Btn
            onClick={() => props.onClick()}
            variant={props.variant}
            color={props.color}
            size={props.size}
            disabled={props.disabled}
        >
            {props.text}
        </Btn>
    );

}
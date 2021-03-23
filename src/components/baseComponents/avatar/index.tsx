import React from 'react';

interface IProps {
    width?: number;
    borderRadius?: string;
    path: string
}



export const Avatar:React.FC<IProps> = (props) => {
    const { width, borderRadius, path } = props;

    const style = {
        width: width || 35,
        borderRadius: borderRadius || "50%",
    }

     return(

         <img
             style = {style}
             src={path}
             alt="Avatar"
             className="avatar"
             //border-radius={borderRadius}
             //border-radius={'50'}
         />

     );
}
import React from 'react';

interface IProps {
    name: string;
}

const Button = (props: IProps) =>{
    return(
        <button>{props.name}</button>
    )

}

export default Button
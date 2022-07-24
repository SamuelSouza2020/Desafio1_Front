import React from "react";

interface IProps 
{
    name: string;
    email: string;
    password: string;
    birth?: string;
    color?: string;
}

export default function User(props: IProps): JSX.Element
{
    const {name, email, password, birth, color} = props;
    return  (
        <>
            <p>{name}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{birth}</p>
            <p>{color}</p>
        </>
    );
}
User.defaultProps = {
    color: 'Red'
}
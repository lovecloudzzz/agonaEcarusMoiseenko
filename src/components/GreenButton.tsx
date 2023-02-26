import React from "react";
import '../styles/GreenButton.sass'


interface ButtonProps {
    name: string;
}
export const GreenButton: React.FC<ButtonProps> = (props) => {
    return (
        <button className="GreenButton">
            {props.name}
        </button>
    );
};
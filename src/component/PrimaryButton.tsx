import React from "react";
import { text } from "stream/consumers";

type Props = {
    text: string;
    onClick?: any;
};

const PrimaryButton = ({ text = "", onClick = () => {} }: Props) => {
    return (
        <button
            className="m-3 py-2 px-3 h-min text-secondaryLight font-semibold bg-primaryLight hover:bg-primaryHover transform duration-200 rounded-md text-xl "
            type="submit"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default PrimaryButton;

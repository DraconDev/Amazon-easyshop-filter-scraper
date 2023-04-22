import React from "react";

type Props = {
    checked: boolean;
    onClick: (checked: boolean) => void;
};

const CustomCheckbox = ({ checked, onClick }: Props) => {
    return (
        <input
            type="checkbox"
            className="w-5 h-5"
            onChange={() => onClick(!checked)}
            checked={checked}
        />
    );
};

export default CustomCheckbox;

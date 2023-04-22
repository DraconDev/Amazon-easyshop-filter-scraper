import React from "react";

type Props = {
    defaultValue?: string;
    value?: string;
    onChange?: (e: any) => void;
};

const InputBox = ({ defaultValue, value, onChange }: Props) => {
    return (
        <input
            type="text"
            className="bg-inputBg p-1 text-end text-xl w-1/2 m-1"
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
        />
    );
};

export default InputBox;

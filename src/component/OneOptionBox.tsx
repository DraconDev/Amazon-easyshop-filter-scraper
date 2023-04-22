import React from "react";

type Props = {
    children: React.ReactNode;
};

const OneOptionBox = ({ children }: Props) => {
    return (
        <div className="flex flex-row justify-between items-center p-2 w-1/3 text-xl">
            {children}
        </div>
    );
};

export default OneOptionBox;

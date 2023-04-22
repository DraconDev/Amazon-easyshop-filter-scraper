import React from "react";
import { text } from "stream/consumers";

type Props = {
    children: React.ReactNode;
};

const OptionTitle = ({ children }: Props) => {
    return <p className="text-lg">{children}</p>;
};

export default OptionTitle;

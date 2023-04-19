import React from "react";

type Props = {
	children: React.ReactNode;
};

const Container = ({ children }: Props) => {
	return <div className="flex w-full h-full">{children}</div>;
};

export default Container;

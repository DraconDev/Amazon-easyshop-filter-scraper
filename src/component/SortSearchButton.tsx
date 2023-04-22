import React, { useState } from "react";

type Props = {};

const SortSearchButton = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                className="block text-white font-semibold py-2 px-4 rounded-md hover:bg-primaryHover   bg-primaryDark"
                onClick={() => setIsOpen(!isOpen)}
            >
                Sort by
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                    >
                        Item 1
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                    >
                        Item 2
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                    >
                        Item 3
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                    >
                        Item 3
                    </a>
                </div>
            )}
        </div>
    );
};

export default SortSearchButton;

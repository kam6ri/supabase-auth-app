import React from 'react';

interface DividerProps {
    text?: string;
}

export const Divider: React.FC<DividerProps> = ({ text = null }) => {
    return text === null ? (
        <div className="border-t border-gray-300"></div>
    ) : (
        <div className="flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="px-3 text-xs text-gray-400">{text}</div>
            <div className="flex-grow border-t border-gray-300"></div>
        </div>
    );
};

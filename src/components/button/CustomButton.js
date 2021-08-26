import * as React from 'react';

export const CustomButton = ({ text }) => {
    return (
        <div style={{ width: "100%", margin: "0px", padding: "0px" }}>
            <span>{text}</span>
        </div>
    );
}
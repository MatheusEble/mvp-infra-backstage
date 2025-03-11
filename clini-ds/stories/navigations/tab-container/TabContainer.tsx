import React from "react";

interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    index?: number;
    value?: number;
    style?: React.CSSProperties,
}

export function TabContainer(props: TabPanelProps) {
    const { children, value, index, style, ...other } = props;

    return (
        <div
            role="tabcontainer"
            hidden={value !== index}
            id={`simple-tabcontainer-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            style={{ padding: 16, ...style }}
            {...other}
        >
            {value === index && children}
        </div>
    );
};
import React from "react";

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    color?: 'first' | 'second' | 'third' | 'fourth';
    width?: 'openModal' | 'postEdit' | 'addSave' | 'delete' | 'logout';
    type?: 'submit' | 'button';
    disabled?: boolean
};
import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large', 'btn--small'];
const COLORS = ['btn--white', 'btn--black'];
const POSITIONS = ['btn--relative', 'btn--absolute']

export const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonColor, buttonPosition, dataBtn}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[1];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[0];
    const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : STYLES[0];
    const checkButtonPosition = POSITIONS.includes(buttonPosition) ? buttonPosition : STYLES[0];

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor} ${checkButtonPosition}`}
            onClick={onClick}
            type={type}
            data-btn={dataBtn}
        >
            {children}
        </button>
    )
};
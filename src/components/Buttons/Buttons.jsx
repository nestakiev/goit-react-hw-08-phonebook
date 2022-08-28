import PropTypes from "prop-types";
import { Button, ContactButton } from "./Buttons.styled";

export const Btn = ({text, type, onClick, onSubmit, disabled}) => {
    return <Button type={type} onClick={onClick} onSubmit={onSubmit} disabled={disabled}>{text}</Button>
};

export const ContactBtn = ({text, onClick, disabled}) => {
    return <ContactButton type='button' onClick={onClick} disabled={disabled}>{text}</ContactButton>
};

Btn.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func,
    disabled: PropTypes.bool,
};

ContactBtn.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};
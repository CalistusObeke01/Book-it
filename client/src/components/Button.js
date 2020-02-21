import React from 'react';
import PropTypes from 'prop-types';
function Button({children, defaultBtnColor}) {
    return <button className={defaultBtnColor}>
        {children}
    </button>
}

Button.propTypes = {
    children: PropTypes.string.isRequired
};

Button.defaultProps = {
    defaultBtnColor: "defaultBtn",
}


export default Button
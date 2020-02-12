import React from 'react';
import PropTypes from 'prop-types';

function Title({title}) {
    return <h2 className="site-subHeader">{title}</h2>
}


Title.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Title


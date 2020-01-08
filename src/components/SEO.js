import React from "react";
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

function SEO({ title, name, content }) {
    return (
        <Helmet>
            <title>{ title } </title>
            <meta name={ name } content={ content } />
        </Helmet>
    )
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default SEO
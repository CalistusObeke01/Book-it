import React from 'react';
import Tabs from './Tabs';
import Title from './Title';

function Pricing() {
    return(
        <section className="pricing-section" id="pricing">
            <Title
            title={`Our Pricing`}/>
            <Tabs />

        </section>
    )
}

export default Pricing;
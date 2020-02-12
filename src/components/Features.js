import React from 'react';
import Title from './Title';

function Features() {
    const featuresAtrr = [
        'share the up-to-date availability of your spaces on every device.',
        'invite and empower users to amke frictionless self-service bookings.',
        'Enforce your policies (e.g quotas, cancellation rules, advance-notice rules).',
        'control how users interact with the system with custom user tags.',
        'automate any pricing and accept secure online payments.',
        'integrate with other systems and tools',
        'login with existing account (Microsoft, Google, Facebook, Twitter).'
    ];

    return(
        <section className="featues" id="features">
            <div className="text-center">
                <Title title={`Features`}/>
                <div className="feature-header-subText">
                    <p>
                        <b>Book!T</b> takes the hassles out of managing your spaces.
                    </p>
                    <p>
                        If you're looking to reduce adminstration and increase usage, we can help!
                    </p>
                </div>
            </div>
            <div className="col-md-12">
                {
                    featuresAtrr.map((content,index) => {
                        return(
                            <ul key={index}>
                                <li className="featureAttr">{content}</li>
                            </ul>  
                        )
                    }) 
                }
            </div>
        </section>
    )
}
export default Features
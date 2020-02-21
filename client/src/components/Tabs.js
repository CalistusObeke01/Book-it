import React, {Component} from 'react';

class Tabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
        this.TAB_DATA = [
            ["weekly", "edxcsuijkm, ghnf"],
            ["monthly", "dsvvcybjkm dfvcyubjmedfv gunk,ewdf yubjedfv"],
            ["yearly", "ybcdunkl  dfcvuihkn, gyubjkm ygubjkmds"]
        ];

    }

    clickHandler = (e) => {
        this.setState({
            active: parseInt(e.currentTarget.attributes.num.value)
        })
    }

    render() {
        let content  = '';
        const tabs = this.TAB_DATA.map(([label, text], i) => {
            content = this.state.active === i ? text : content;

            return <li className={ this.state.active === i ? "tab active" : "tab"}
                    key={label}
                    num={i}
                    onClick={this.clickHandler}>
                {label}
            </li>
        });


        return(
            <section className="tabs" id="section">
                <menu>
                    <ul>
                        {tabs}
                    </ul>
                </menu>
                <div>
                    {content}
                </div>
            </section>
        )
    }
}

export default Tabs;
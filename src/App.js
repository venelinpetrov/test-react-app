import React from 'react';
import './App.css';
import './dropdown.scss';


class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            value: {},
            data: props.data,
            selectedItem: {}
        }
    }

    render() {
        const dataTextField = this.props.dataTextField;

        return (
            <div className="x-dropdown">
                <div className="x-dropdown__input" onClick={this.expandCollapse.bind(this)}>{this.state.value[dataTextField]}</div>
                <div className={"x-dropdown__animation-container" + (this.state.expanded ? ' -expanded' : '')}>
                    <div className="x-dropdown__data-container">
                        <ul>
                            {
                                this.state.data.map(item => <li
                                    key={item[dataTextField]}
                                    className={item === this.state.selectedItem ? '-selected': ''}
                                    onClick={this.handleItemClick.bind(this, item)}>
                                        {item[dataTextField]}
                                    </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    expandCollapse() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    handleItemClick(value) {
        this.setState({
            value,
            selectedItem: value,
            expanded: false
        });
    }
}

function Playground() {
    const sampleData = Array(8).fill().map((_, i) => ({text: 'item' + i}));
    return (
        <div className="App">
            <Dropdown data={sampleData} dataTextField="text"/>
        </div>
    );
}

export default Playground;

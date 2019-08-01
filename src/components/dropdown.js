import React from 'react';
import './dropdown.scss';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            value: null,
            data: props.data,
            selectedItem: {}
        }
    }

    render() {
        return (
            <div className="x-dropdown">
                <div className="x-dropdown__input" onClick={this.expandCollapse.bind(this)}>
                    {this.getValue(this.state.value)}
                </div>
                <div className={"x-dropdown__animation-container" + (this.state.expanded ? ' -expanded' : '')}>
                    <div className="x-dropdown__data-container">
                        <ul>
                            {
                                this.state.data.map(item => <li
                                    key={this.getValue(item)}
                                    className={item === this.state.selectedItem ? '-selected' : ''}
                                    onClick={this.handleItemClick.bind(this, item)}>
                                    {this.getValue(item)}
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    getValue(field) {
        if (this.props.valuePrimitive) {
            return field;
        }
        return field && field[this.props.dataTextField];
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

export default Dropdown;
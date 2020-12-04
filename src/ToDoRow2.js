import React, {Component} from 'react';

export class ToDoRow extends Component {

    //  Feature 3 & 4
    //  There are 2 different kinds of PROPS
    //  Data PROPS (this.props.userName) - allows the parent to pass data to the child
    //  FUNCTION PROPS (this.props.theFunctionName) - allows the child to communicate with the parent.  This is the purpose of a callback

    render = () =>
        <tr>
            <td>
                {this.props.item.ingredient}
            </td>
            <td>
                <input 
                    type="checkbox" 
                    checked={this.props.item.gotit} 
                    onChange={() => this.props.callback(this.props.item)}
                />
            </td>
        </tr>

};
import React, {Component} from 'react';

export class ToDoBanner extends Component {

    //  Feature 1 & 2
    render = () =>
    <h4 className="bg-primary text-white text-center p-2">
        {this.props.recipeName}'s To Do List (
            {this.props.ingredientList.filter(www => !www.gotit).length} items still not done
        )
    </h4>

    

};
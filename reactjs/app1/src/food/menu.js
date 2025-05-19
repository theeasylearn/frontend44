import React from "react";
export default class Menu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className="container">
            <h2 className="mb-4">Types of Indian Cuisines</h2>
            <ul className="list-group">
                <li className="list-group-item">Punjabi Cuisine</li>
                <li className="list-group-item">Gujarati Cuisine</li>
                <li className="list-group-item">South Indian Cuisine</li>
                <li className="list-group-item">Fast Food</li>
            </ul>
        </div>
        );
    }
}
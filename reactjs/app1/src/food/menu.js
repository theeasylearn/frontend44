import React from "react";
import { Link } from "react-router-dom";
export default class Menu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className="container">
            <h2 className="mb-4">Types of Indian Cuisines</h2>
            <ul className="list-group">
                <li className="list-group-item"><Link to="/punjabi">Punjabi Cuisine</Link></li>
                <li className="list-group-item"><Link to="/gujarati">Gujarati Cuisine</Link></li>
                <li className="list-group-item"><Link to="/south-indian">South Indian Cuisine</Link></li>
                <li className="list-group-item"><Link to="/fast-food">Fast food</Link></li>
            </ul>
        </div>
        );
    }
}
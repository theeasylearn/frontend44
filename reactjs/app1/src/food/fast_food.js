import React from "react";
export default class FastFood extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className="container">
            <h2 className="mb-4">Popular Indian Fast Food</h2>
            <ul className="list-group">
                <li className="list-group-item">Pav Bhaji</li>
                <li className="list-group-item">Vada Pav</li>
                <li className="list-group-item">Samosa</li>
                <li className="list-group-item">Chole Bhature</li>
                <li className="list-group-item">Paneer Roll</li>
                <li className="list-group-item">Dabeli</li>
                <li className="list-group-item">Tandoori Sandwich</li>
                <li className="list-group-item">Masala Maggi</li>
                <li className="list-group-item">Frankie</li>
                <li className="list-group-item">Indian Veg Burger</li>
            </ul>
        </div>
        );
    }
}
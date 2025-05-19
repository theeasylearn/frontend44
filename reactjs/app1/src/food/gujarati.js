import React from "react";
export default class Gujarati extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className="container">
            <h2 className="mb-4">Famous Gujarati Dishes</h2>
            <ul className="list-group">
                <li className="list-group-item">Dhokla</li>
                <li className="list-group-item">Khandvi</li>
                <li className="list-group-item">Undhiyu</li>
                <li className="list-group-item">Thepla</li>
                <li className="list-group-item">Fafda Jalebi</li>
                <li className="list-group-item">Handvo</li>
                <li className="list-group-item">Sev Tameta nu Shaak</li>
                <li className="list-group-item">Bhaakhri</li>
                <li className="list-group-item">Dal Dhokli</li>
                <li className="list-group-item">Shrikhand</li>
            </ul>
        </div>
        );
    }
}
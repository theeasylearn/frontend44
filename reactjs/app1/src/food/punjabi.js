import React from "react";
export default class Punjabi extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className="container">
            <h2 className="mb-4">Famous Punjabi Dishes</h2>
            <ul className="list-group">
                <li className="list-group-item">Sarson Da Saag</li>
                <li className="list-group-item">Makki Di Roti</li>
                <li className="list-group-item">Chole Bhature</li>
                <li className="list-group-item">Paneer Tikka</li>
                <li className="list-group-item">Rajma Chawal</li>
                <li className="list-group-item">Amritsari Kulcha</li>
                <li className="list-group-item">Dal Makhani</li>
                <li className="list-group-item">Lassi</li>
            </ul>
        </div>
        );
    }
}
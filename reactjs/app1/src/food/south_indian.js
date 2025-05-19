import React from "react";
export default class SouthIndian extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className="container">
            <h2 className="mb-4">Famous South Indian Dishes</h2>
            <ul className="list-group">
                <li className="list-group-item">Masala Dosa</li>
                <li className="list-group-item">Idli</li>
                <li className="list-group-item">Vada (Medu Vada)</li>
                <li className="list-group-item">Sambar</li>
                <li className="list-group-item">Uttapam</li>
                <li className="list-group-item">Upma</li>
                <li className="list-group-item">Rasam</li>
                <li className="list-group-item">Pongal</li>
                <li className="list-group-item">Hyderabadi Biryani</li>
                <li className="list-group-item">Filter Coffee</li>
            </ul>
        </div>
        );
    }
}
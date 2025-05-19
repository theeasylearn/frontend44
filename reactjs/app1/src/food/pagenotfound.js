import React from "react";
export default class PageNotFound extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className="container">
            <h2 className="mb-4">No such page exist</h2>
            try some different dish. we have plenty varieties to try
        </div>
        );
    }
}
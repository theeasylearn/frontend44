import React from "react";
//create class 
class MyFooter extends React.Component {
    render() {
        return (<footer className="footer">
            <div className="container">
                <div className="border-top py-4">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <span className="small text-muted">
                                © 2022
                                <span id="copyright">
                                    -
                                </span>
                                . All rights reserved. Powered by
                                <a href="#">The easylearn academy</a>
                                .
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>);
    }
}
export default MyFooter;
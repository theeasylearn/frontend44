import React from "react";
import HeaderMenu from "./HeaderMenu";
import MyFooter from "./Footer";
import getBaseAddress, { getBaseImageAddress } from "./common";
import axios from "axios";
import { showError } from "./message";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        //api calling
        let apiAddress = getBaseAddress() + "category.php";
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error)
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0)
                    showError('no category found');
                else {
                    //delete 2 objects from begining
                    response.data.splice(0, 2);
                    this.setState({
                        categories: response.data
                    })
                }
            }
        }).catch((error) => {
            if (error === 'ERR_NETWORK')
                showError();
        })
    }
    display = (item) => {
        return (<div className="col-lg-2 col-md-4 col-6">
            <div className="text-center mb-10">
                {/* img */}
                <Link to={"/shop/" + item['id']}><img src={getBaseImageAddress() + "category/" + item['photo']} alt className="card-image rounded-circle img-fluid" /></Link>
                {/* text */}
                <div className="mt-4">
                    <h5 className="fs-6 mb-0"><a href="shop-grid.html" className="text-inherit">{item['title']}</a></h5>
                </div>
            </div>
        </div>);
    }
    render() {
        return (<>
            <HeaderMenu />
            <main>
                {/* section */}
                <section className="mt-8">
                    {/* contianer */}
                    <div className="container">
                        <ToastContainer />
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-6">
                                    {/* heading    */}
                                    <h3 className="mb-0">Shop Popular Categories</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* below div tag will repeat for each category */}
                            {this.state.categories.map((item) => this.display(item))}
                        </div>
                    </div>
                </section>
            </main>

            <MyFooter />
        </>)
    }
}
export default Category;
import React from "react";
import HeaderMenu from "./HeaderMenu";
import MyFooter from "./Footer";
class Category extends React.Component {
    render() {
        return (<>
            <HeaderMenu />
            <main>
                {/* section */}
                <section className="mt-8">
                    {/* contianer */}
                    <div className="container">
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
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="text-center mb-10">
                                    {/* img */}
                                    <a href="#"><img src="theme/assets/images/category/dairy-bread-eggs.png" alt className="card-image rounded-circle" /></a>
                                    {/* text */}
                                    <div className="mt-4">
                                        <h5 className="fs-6 mb-0"><a href="shop-grid.html" className="text-inherit">Dairy, Bread &amp; Eggs</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <MyFooter />
        </>)
    }
}
export default Category;
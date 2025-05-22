import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
function Author(props) {
  //object destructring 
  let { artId, name, photo } = props;

  return (<div className="col-lg-3">
    <div className="card shadow">
      <div className="card-header d-flex justify-content-between text-bg-primary">
        <span className="h4">{artId}</span>
        <span className="h4">{name}</span>
      </div>
      <img src={photo} alt className="card-img-bottom" />
    </div>
  </div>);
}
function Gallery() {
  //create state array using useState 
  let [products, setProducts] = useState([]);
  // use useEffect hook to call api to fetch data 
  useEffect(() => {
    if(products.length === 0)
    {
      let apiAddress = "https://picsum.photos/v2/list?page=1&limit=20";
      fetch(apiAddress).then((response) => response.json()).then((data) => {
        console.log(data);
        //store this data array into state array products
        setProducts(data);
      }).catch((error) => {

      });
    }
  })
  return (<div className="container">
    <div className="row">
      <div className="col-12">
        <h1>Image Gallery</h1>
      </div>
      {products.map((item) => {
        return <Author artId={item.id} name={item.author} photo={item.download_url} />
      })}
      {/* 
        <Author artId='3' name='Diya Patel' photo='https://picsum.photos/id/3/5000/3333' /> */}
    </div>
  </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Gallery />);
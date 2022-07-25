import React from "react";
import Product from './product';

const data = [{
    title: "The Lean",
    price: 19.99,
    rating: 3,
    image: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
},
{
    title: "Books",
    price: 9.99,
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavsHy-hMh-T06nuxoOBzVWIOJdgIMGlRpGA&usqp=CAU"
},
{
    title: "shoes",
    price: 3.99,
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8eKnxiNwP0dpxusK0qZpEhM0siWrzTpfqg&usqp=CAU"
},
{
    title: "The Lean",
    price: 19.99,
    rating: 3,
    image: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
},
{
    title: "Books",
    price: 9.99,
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8eKnxiNwP0dpxusK0qZpEhM0siWrzTpfqg&usqp=CAU"
},
{
    title: "shoes",
    price: 3.99,
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8eKnxiNwP0dpxusK0qZpEhM0siWrzTpfqg&usqp=CAU"
}, {
    title: "The Lean",
    price: 19.99,
    rating: 3,
    image: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
},
{
    title: "Books",
    price: 9.99,
    rating: 4,
    image: "data:image/jpeg;base64,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"
},
{
    title: "shoes",
    price: 3.99,
    rating: 5,
    image: "data:image/jpeg;base64,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"
}];

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">

                <img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="Home IMG" />
                <div className="home_row">
                    <Product title={data.title} price={data.price} rating={data.rating} image={data.image} />
                    <Product title={data.title} price={data.price} rating={data.rating} image={data.image} />

                </div>
                <div className="home_row">
                    <Product title={data.title} price={data.price} rating={data.rating} image={data.image} />
                    <Product title={data.title} price={data.price} rating={data.rating} image={data.image} />
                    <Product title={data.title} price={data.price} rating={data.rating} image={data.image} />
                </div>
                <div className="home_row">
                    <Product title={data.title} price={data.price} rating={data.rating} image={data.image} />
                </div>
            </div>
        </div>
    )
}

export default Home;
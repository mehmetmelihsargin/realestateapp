import React, { useState, useEffect } from "react";

const Card = (props) => {

    const [product, setproduct] = useState();
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer 00D8d000005BGrx!AQEAQEFAFOolawM4HXM4SpQ1O_GeyEPjtZmstf2SZvBdaN6LENWuk0MU1lraAu5UqrDmMPEEZqooRaTg4yNRK3ksMnB8erSy' },


    };
    // requestOptions = gonderilecek
    useEffect(() => {

        fetch('https://rea3-dev-ed.my.salesforce.com/services/apexrest/Property', requestOptions)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setproduct(json);
            })


    }, []);

    console.log(props);
    return <div>
        {product ? product.map((i) => (
            <div className="h-a w-full border-b-2 flex justify-center items-center">
                <div className="flex h-5/6 w-5/6 rounded-lg justify-center ">
                    <div className="flex flex-col h-full md:flex-row w-full rounded-lg  shadow-lg">
                        <img className=" w-full md:h-auto object-cover md:w-96 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="p-6 flex flex-col justify-around h-full">
                            <h5 className="text-gray-900 text-xl font-medium">Card Title</h5>
                            <p className="text-gray-700 text-base">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                            <div className="bg-sky-400 hover:bg-sky-500 rounded-md flex justify-center p-2">
                                <button className="text-xl w-full h-full text-white">View Details</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )) : console.log('gelmedi')
        }
    </div>;
};

export default Card;

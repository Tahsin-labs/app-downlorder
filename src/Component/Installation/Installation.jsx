import React, { useEffect, useState } from 'react';
import { useLoaderData, } from 'react-router';
import { getStoreapk } from '../alljs/all';
import OneApp from '../oneApp/OneApp';

const Installation = () => {

    // const [sort, setSort] = useState("");

    

    const [install, setInstall] = useState([])
     const [loading, setLoading] = useState(true);

    const data = useLoaderData();
 const storeAppData = getStoreapk();
    console.log(install,storeAppData);

    useEffect(() => {
        // Stop loading once data is available
        if (Array.isArray(install) && install.length > 0) {
            setLoading(false);
        } else {
            // Still stop loading even if array is empty
            setLoading(false);
        }
    }, [install]);



    useEffect(() => {
        const storeAppData = getStoreapk();
        const ConvartedStoredApk = storeAppData.map(idd => parseInt(idd))
        const myapplist = data.filter(app => ConvartedStoredApk.includes(app.id))
        setInstall(myapplist)
    }, [])



    // console.log(singleData)


    const handleSort = (e) => {
      
        e.preventDefault()

        if (e.target.value === "Low-High") {
            const sortBylow = [...install].sort((a, b) => a.downloads - b.downloads);
            console.log(sortBylow)
            setInstall(sortBylow)
        }
        if (e.target.value === "High-Low") {
            const sortBylow = [...install].sort((a, b) => b.downloads - a.downloads);
            console.log(sortBylow)
            setInstall(sortBylow)
        }



    }

 if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-600 mt-4 text-lg font-medium">Loading Products...</p>
                </div>
            </div>
        );
    }



    return (
        <div>
            <div class="container mx-auto px-4 py-8">

                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold text-gray-800 mb-2">Your Installed Apps</h1>
                    <p class="text-gray-500">Explore All Trending Apps on the Market developed by us</p>
                </div>


                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-lg font-semibold text-gray-800">{install.length} Apps Found</h2>


                    <div class="relative">
                        <select onChange={handleSort} class="appearance-none bg-white border border-gray-300 rounded px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option>Sort By</option>

                            <option value="Low-High">Low-HIGH</option>
                            <option value="High-Low">High-Low</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L9.293 11.586l-4.95-4.95L2.929 8l5.657 5.657z" />
                            </svg>
                        </div>
                    </div>
                </div>





                {


                    install.map(a => <OneApp install={install} setInstall={setInstall} singleapk={a}></OneApp>)


                }






            </div>
        </div>
    );
};

export default Installation;
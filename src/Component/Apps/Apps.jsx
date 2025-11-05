import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Allapk from '../Allapk/Allapk';

const Apps = () => {

    const allApk = useLoaderData();
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true);
    const term = search.trim().toLowerCase()

    const searchApp = term ? allApk.filter(ap => ap.title.toLowerCase().includes(term)) : allApk
    // console.log(searchApp)
    // console.log(search)



    useEffect(() => {

        if (Array.isArray(allApk) && allApk.length > 0) {
            setLoading(false);
        } else {

            setLoading(false);
        }
    }, [allApk]);





    //   console.log(allApk);

    // Show loader until data is ready
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-600 mt-4 text-lg font-medium">Loading Apps...</p>
                </div>
            </div>
        );
    }
    return (
        <div class="bg-gray-50 min-h-screen p-6">
            {/* <body class="bg-gray-50 min-h-screen p-6"> */}
            <div class="max-w-7xl mx-auto">

                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold text-gray-800 mb-2">Our All Applications</h1>
                    <p class="text-gray-600">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>


                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <div class="text-lg font-semibold text-gray-800">{searchApp.length} Apps Found</div>
                    <div class="w-full sm:w-64">
                        <div class="relative">
                            <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search Apps" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />



                        </div>
                    </div>
                </div>
                {/* <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                         searchApp.map(singleapk => <Allapk singleapk={singleapk}></Allapk>)
                    }
                </div> */}
                {searchApp.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {searchApp.map(singleapk => (
                            <Allapk key={singleapk.id} singleapk={singleapk} />
                        ))}
                    </div>
                ) : (
                    <div>
                        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
                            <div class=" max-w-4xl w-full  p-8 text-center">
                                <div className='mb-8'>
                                    <img className='mx-auto max-w-full h-auto' src={'https://i.ibb.co.com/27rptrgg/7104553-search-no-result-not-found-concept-illustration-flat-design-vector-eps10-modern-graphic-elem.jpg'} alt="" />
                                </div>

                                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Oops, The app doesnt exixt !</h1>


                                <p class="text-gray-600 mb-6">Sraech anything else</p>


                                <a href="#" class="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors duration-300">
                                    Go Back!
                                </a>
                            </div>

                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Apps;
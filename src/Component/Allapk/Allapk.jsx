import React from 'react';
import { Link } from 'react-router';

const Allapk = ({ singleapk }) => {

    const { id, title, downloads, ratingAvg ,image} = singleapk;

    return (




        <Link to={`/appDetails/${id}`}>
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div class="h-40 bg-gray-300 flex items-center justify-center">
                    <span >  <img src={image} alt="" /></span>
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-gray-800 mb-2">{title}</h3>
                    <div class="flex justify-between items-center">
                        <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">↓ {downloads}</span>
                        <span class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded flex items-center">
                            <i class="fas fa-star mr-1"></i> {ratingAvg}
                        </span>
                    </div>
                </div>
            </div>
        </Link>


    );
};

export default Allapk;
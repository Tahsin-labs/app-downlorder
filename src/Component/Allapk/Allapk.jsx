import React from 'react';
import { Link } from 'react-router';

const Allapk = ({ singleapk }) => {

    const { id, title, downloads, ratingAvg, image } = singleapk;

    return (




        <Link to={`/appDetails/${id}`}>
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div class="h-40 bg-white-300 flex items-center justify-center">
                    <span >  <img src={image} alt="" className='w-70 h-40' /></span>
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-gray-800 mb-2">{title}</h3>
                    <div class="flex justify-between items-center">
                        <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded flex gap-2"><img src={'https://i.ibb.co.com/3YdrfN8k/fi-18110198.png'} alt="" className='w-4 h-4' /><span> {downloads} </span></span>
                        <span class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded flex items-center gap-2">
                            <img src={'https://i.ibb.co.com/sv4h3zmJ/icon-ratings.png'} alt="" className='w-4 h-4' />
                            <span>{ratingAvg}</span>
                        </span>
                    </div>
                </div>
            </div>
        </Link>


    );
};

export default Allapk;
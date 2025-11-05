import React from 'react';

const App = ({apps}) => {

const {title,downloads,ratingAvg,image}=apps;

    
    return (
        <div>
            {/* <h3>{title}</h3>
            <p>{id}</p> */}


             <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                            {/* <img src={image}alt="Alarmy App" class="w-full h-48 object-cover"> */}
                            <img src={image} alt="" />
                            <div class="p-4">
                                <h3 class="font-semibold mb-2">{title}</h3>
                                <div class="flex justify-between items-center">
                                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">↓{downloads}</span>
                                    <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded"><i class="fas fa-star mr-1"></i>{ratingAvg}</span>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default App;
import React from 'react';

const App = ({ apps }) => {

    const { title, downloads, ratingAvg, image } = apps;


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
                        <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded flex gap-2"><img src={'https://i.ibb.co.com/3YdrfN8k/fi-18110198.png'} alt="" className='w-4 h-4' /><span> {downloads} </span></span>
                        <span class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded flex items-center gap-2">
                            <img src={'https://i.ibb.co.com/sv4h3zmJ/icon-ratings.png'} alt="" className='w-4 h-4' />
                            <span>{ratingAvg}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
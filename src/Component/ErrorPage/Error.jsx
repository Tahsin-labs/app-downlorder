import React from 'react';

const Error = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">


            <div class=" max-w-4xl w-full  p-8 text-center">

                <div className='mb-8'>
                    <img className='mx-auto max-w-full h-auto' src={'https://i.ibb.co.com/NBzLZsL/error-404.png'} alt="" />
                </div>

                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Oops, page not found!</h1>


                <p class="text-gray-600 mb-6">The page you are looking for is not available.</p>


                <a href="#" class="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors duration-300">
                    Go Back!
                </a>
            </div>



        </div>
    );
};

export default Error;
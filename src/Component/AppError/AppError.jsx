import React from 'react';
// import { useRouteError } from 'react-router';

const AppError = () => {





    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
            <div class=" max-w-4xl w-full  p-8 text-center">

                {/* <div class="mb-8">
             <img src={''} alt="404 Illustration" class="mx-auto max-w-full h-auto">
         </div>  */}


                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Oops, app........ not found!</h1>


                <p class="text-gray-600 mb-6">The page you are looking for is not available.</p>


                <a href="#" class="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors duration-300">
                    Go Back!
                </a>
            </div>

        </div>
    );
};

export default AppError;
import React from 'react';



const OneApp = ({ install, singleapk, setInstall }) => {



    const handleRemove = id => {
        console.log(id)
        const storeAppData = JSON.parse(localStorage.getItem("installList"))
        let updateList = storeAppData.filter(p => p != id)
        let filterList = install.filter(p => p.id != id)
        setInstall(filterList)
        localStorage.setItem("installList", JSON.stringify(updateList))

    }





    return (

        <div>
            <div class="space-y-4 mb-4">

                <div class="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                            <i ><img src={singleapk.image} alt="" /></i>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">{singleapk.title}</h3>
                            <div class="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                                <span class="flex items-center"><i class="fas fa-download text-green-500 mr-1"></i>{singleapk.ratingAvg}</span>
                                <span class="flex items-center"><i class="fas fa-star text-yellow-500 mr-1"></i> {singleapk.downloads}</span>
                                <span>{singleapk.size} MB</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => handleRemove(singleapk.id)} class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                        Uninstall
                    </button>
                </div>


            </div>
        </div>
    );
};

export default OneApp;
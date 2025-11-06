import { ToastContainer, toast } from 'react-toastify';
const getStoreapk = () => {

    const storeAppsSTR = localStorage.getItem("installList")

    if (storeAppsSTR) {

        const storeAppData = JSON.parse(storeAppsSTR);

        return storeAppData
    }

    else {
        return [];
    }

}

const addToStoreDB = (id) => {
    // console.log(id)
    const storeAppData = getStoreapk();

    if (storeAppData.includes(id)) {
        toast("id already exist")
    }
    else {


        storeAppData.push(id);
        const data = JSON.stringify(storeAppData);
        localStorage.setItem("installList", data)
    }
}


export { addToStoreDB, getStoreapk }
import { useState, useEffect } from 'react';
import axios from 'axios'


function VistaPrincipal() {

    const [getAuto, setAuto] = useState([]);

    useEffect(() => {
        axios.get('')

            .then(response => {
                setAuto(response.data);
                console.log(response.data);
            })
            .catch(error => {
            });
    }, []);

    return (
        <>
            <br></br>
            <p className="text-3xl text-gray-900 dark:text-white text-center">Tabla de autos</p>
            <br></br>


            <div className=" w-3/4 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                cilindraje
                            </th>
                            <th scope="col" className="px-6 py-3">
                                kilometraje
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Apple MacBook Pro 17"
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>


        </>


    );


}

export default VistaPrincipal;

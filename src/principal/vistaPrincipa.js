import { useState, useEffect } from 'react';
import axios from 'axios'


function VistaPrincipal() {

    const [getAuto, setAuto] = useState([]);
    const [getError, setError] = useState("");


    useEffect(() => {
        axios.get('')

            .then(response => {
                setAuto(response.data);
                console.log(response.data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    return (
        <>
            <br></br>
            <p className="text-3xl text-gray-900 dark:text-white text-center">Formulario</p>
            <br></br>
            <form class="max-w-sm mx-auto">
                <div class="mb-5">
                    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escriba el nombre del auto</label>
                    <input type="text" name="nombre" id="nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite el nombre" required />
                </div>
                <div class="mb-5">
                    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Digite el kilometraje</label>
                    <input type="text" name="kilometraje" id="kilometraje" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite el kilometraje" required />
                </div>
                <div class="mb-5">
                    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Digite el cilindraje</label>
                    <input type="text" id="cilindraje" name="cilindraje" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite el cilindraje" required />
                </div>
                <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Registrar</button>
            </form>

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
                        {/* {getAuto.map((auto) => (

                            <tr key={auto.id} className="border-b border-gray-200 dark:border-gray-700">
                                < th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800" >
                                    {auto.id}
                                </th>

                                < th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800" >
                                    {auto.nombre}
                                </th>

                                < th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800" >
                                    {auto.kilometraje}
                                </th>

                                < th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800" >
                                    {auto.cilindraje}
                                </th>


                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div >


        </>


    );


}

export default VistaPrincipal;

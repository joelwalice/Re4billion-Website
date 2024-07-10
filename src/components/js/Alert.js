import React, { useState } from 'react';

export default function Alert(props) {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);

    return (
        <div className="w-full p-2">
            {props.alert && (
                <div className={`border-l-4 ${props.alert.type === 'success' ? 'border-green-700 bg-[#D4EDDA]' : 'border-red-700 bg-[#F8D7DA]'} p-2 rounded-md shadow-md`}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center justify-between">
                            <div className={`text-xl ${ props.alert.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                                {props.alert.type === 'success' ? (
                                    <div className='flex items-center p-1 gap-2 text-green-700'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="size-6">
                                                <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <h1 className='font-semibold'>{props.alert.msg}</h1>
                                    </div>
                                ) : (
                                    <div className='flex items-center p-2 gap-2 text-red-700'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="crimson" class="size-6">
                                                <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <h1 className='font-semibold'>{props.alert.msg}</h1>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={`${props.alert.type === 'success' ? 'text-green-700' : 'text-red-700'} flex items-center gap-2 m-2`}>
                            <h1 className='font-semibold'>{props.location === undefined ? '' : `Site Name : ${props.location}`}</h1>
                            {props.alert.type === "success" ? (<button className='cursor-pointer' onClick={() => setShowModal(!showModal)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1E90FF" class="size-6">
                                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                </svg>
                            </button>) : <div className='p-2'></div>}
                        </div>
                    </div>
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold">Device Checkup</h2>
                            <i className="fas fa-satellite-dish text-xl"></i>
                        </div>
                        <div className="mb-4">
                            <p><i className="fas fa-box mr-2"></i>{props.InverterCheck && props.InverterCheck.msg}</p>
                            <p><i className="fas fa-battery-full mr-2"></i>{props.BatteryCheck && props.BatteryCheck.msg}</p>
                            <p><i className="fas fa-solar-panel mr-2"></i>{props.SolarCheck && props.SolarCheck.msg}</p>
                        </div>
                        <div className="text-right">
                            <button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

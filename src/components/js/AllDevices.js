import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Loading from './Loading';

const AllDevices = () => {
  const [working, setWorking] = useState([]);
  const [notWorking, setNotWorking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedWorkingIndex, setExpandedWorkingIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_HOST}/admin/Alldevices/`);
        if (response.status === 200) {
          const data = response.data.data;
          console.log(data);
          setWorking(data.workingDevices);
          setNotWorking(data.notWorkingDevices);
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleWorkingDetails = (index) => {
    setExpandedWorkingIndex(expandedWorkingIndex === index ? null : index);
  };

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-300'>
      <div className='w-full'>
        <Navbar />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='flex w-full p-2 gap-2'>
          <div className="w-1/2 border border-1 border-black rounded-lg">
            <h1 className="text-md md:text-3xl px-2 bg-green-600 flex items-center text-white justify-center p-1 rounded-l-lg rounded-bl-none rounded-r-lg rounded-br-none">
              Working Devices : {working.length}
            </h1>
            <div className="">
              {working.map((device, index) => (
                <div key={index} className="p-2 hover:bg-gray-200 rounded-b-lg">
                  <div className='flex items-center justify-between gap-2 cursor-pointer' onClick={() => toggleWorkingDetails(index)}>
                    <p className="text-sm md:text-xl cursor-pointer p-1" >
                      {device.email}
                    </p>
                    <p className="text-md cursor-pointer p-1 bg-[#8CF35D] shadow-lg rounded-lg border border-black">
                      Solar Generation : {device.p1ValueTot} kW
                    </p>
                  </div>
                  {expandedWorkingIndex === index && (
                    <div className="mt-2">
                      {device.additionalData ? (
                        <div className='flex grid grid-cols-2 items-center gap-2 p-2'>
                          {device.additionalData.solarVoltage >= 0 && (
                            <p className={`${device.additionalData.solarVoltage.toFixed(2) > 2 ? "bg-[#8CF35D]" : "bg-[#FC7266]"} p-2 rounded-lg shadow-lg border border-black`}>Solar Voltage: {device.additionalData.solarVoltage.toFixed(2)} V</p>
                          )}
                          {device.additionalData.inverterVoltage >= 0 && (
                            <p className={`${device.additionalData.inverterVoltage.toFixed(2) > 2 ? "bg-[#8CF35D]" : "bg-[#FC7266]"} p-2 rounded-lg shadow-lg border border-black`}>Inverter Voltage: {device.additionalData.inverterVoltage.toFixed(2)} V</p>
                          )}
                          {device.additionalData.gridVoltage >= 0 && (
                            <p className={`${device.additionalData.gridVoltage.toFixed(2) > 2 ? "bg-[#8CF35D]" : "bg-[#FC7266]"} p-2 rounded-lg shadow-lg border border-black`}>Grid Voltage: {device.additionalData.gridVoltage.toFixed(2)} V</p>
                          )}
                          {device.additionalData.batteryVoltage >= 0 && (
                            <p className={`${device.additionalData.batteryVoltage.toFixed(2) > 2 ? "bg-[#8CF35D]" : "bg-[#FC7266]"} p-2 rounded-lg shadow-lg border border-black`}>Battery Voltage: {device.additionalData.batteryVoltage.toFixed(2)} V</p>
                          )}
                          {device.additionalData.solarVoltage >= 0 && device.additionalData.solarCurrent >= 0 && (
                            <p className={`${(device.additionalData.solarVoltage * device.additionalData.solarCurrent).toFixed(2) > 2 ? "bg-[#8CF35D]" : "bg-[#FC7266]"} p-2 rounded-lg shadow-lg border border-black`}>{(device.additionalData.solarVoltage * device.additionalData.solarCurrent).toFixed(2) > 2 ? `Solar is Up :  ${(device.additionalData.solarVoltage * device.additionalData.solarCurrent).toFixed(2)} V` : `Solar is Down :  ${(device.additionalData.solarVoltage * device.additionalData.solarCurrent).toFixed(2)} V`} </p>
                          )}
                          {device.additionalData.inverterVoltage >= 0 && device.additionalData.inverterCurrent >= 0 && (
                            <p className={`${(device.additionalData.inverterVoltage * device.additionalData.inverterCurrent).toFixed(2) > 2 ? "bg-[#8CF35D]" : "bg-[#FC7266]"} p-2 rounded-lg shadow-lg border border-black`}>{(device.additionalData.inverterVoltage * device.additionalData.inverterCurrent).toFixed(2) > 2 ? `Inverter is Up :  ${(device.additionalData.inverterVoltage * device.additionalData.inverterCurrent).toFixed(2)} V` : `Inverter is Down :  ${(device.additionalData.solarVoltage * device.additionalData.solarCurrent).toFixed(2)} V`} </p>
                          )}
                          {device.additionalData.batteryVoltage >= 0 && device.additionalData.batteryCurrent >= 0 && (
                            <p className={`${(device.additionalData.batteryVoltage * device.additionalData.batteryCurrent).toFixed(2) > 2 ? "bg-[#8CF35D]" : "bg-[#FC7266]"} p-2 rounded-lg shadow-lg border border-black`}>{(device.additionalData.inverterVoltage * device.additionalData.inverterCurrent).toFixed(2) > 2 ? `Battery is Up :  ${(device.additionalData.solarVoltage * device.additionalData.batteryCurrent).toFixed(2)} V` : `Battery is Down :  ${(device.additionalData.batteryVoltage * device.additionalData.solarCurrent).toFixed(2)} V`} </p>
                          )}
                        </div>
                      ) : (
                        <p>Data not available</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 border border-1 rounded-lg border-black">
            <div><h1 className="text-md md:text-3xl px-2 bg-red-500 flex items-center text-white justify-center p-1 rounded-l-lg rounded-bl-none rounded-r-lg rounded-br-none">
              Devices under Review : {notWorking.length}
            </h1>
            </div>
            <div className="">
              {notWorking.map((device, index) => (
                <div key={index} className="p-2 p-2 hover:bg-gray-200 rounded-b-lg">
                  <div className="flex items-center justify-between gap-2 cursor-pointer">
                    <p className="text-sm md:text-xl p-1">
                      {device.email}
                    </p>
                    <p className={`bg-[#FC7266] p-2 rounded-lg shadow-lg border border-black`}>No Data Available</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllDevices;

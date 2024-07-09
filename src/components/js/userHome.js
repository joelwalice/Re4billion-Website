import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserNavbar from './userNavbar';
import Loading from './Loading';
import Cookies from 'js-cookie';
import Alert from './Alert';
import SolarImg from '../images/solar.png';
import InverterImg from '../images/inverter.png';
import ThunderImg from '../images/thunder.png';
import BatteryImg from '../images/battery.png';
import BulbImg from '../images/bulb.png';
import Graph from './Graph';
import * as XLSX from 'xlsx';


const AllDevices = () => {
  const [token, setToken] = useState("");
  const [formattedDate, setFormattedDate] = useState('');
  const [nav, setNav] = useState(false);
  const [sg, setSg] = useState("");
  const [ge, setGe] = useState("");
  const [lc, setLc] = useState("");
  const [dateOrg, setDateOrg] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [solarVoltage, setSolarVoltage] = useState('');
  const [solarCurrent, setSolarCurrent] = useState('');
  const [inverterVoltage, setInverterVoltage] = useState('');
  const [inverterCurrent, setInverterCurrent] = useState('');
  const [gridVoltage, setGridVoltage] = useState('');
  const [gridCurrent, setGridCurrent] = useState('');
  const [batteryVoltage, setBatteryVoltage] = useState('');
  const [batteryCurrent, setBatteryCurrent] = useState('');
  const [tvalue, settValue] = useState('');
  const [alerts, setAlerts] = useState('');
  const [InverterCheck, setInverterCheck] = useState(null);
  const [BatteryCheck, setBatteryCheck] = useState(null);
  const [SolarCheck, setSolarCheck] = useState(null);
  const [currDate, setCurrDate] = useState("");
  const [dataCharts, setDataCharts] = useState([]);
  const [records, setRecords] = useState([]);

  const InverterAlart = (message) => {
    setInverterCheck({
      msg: message
    })
  }

  const BatteryAlart = (message) => {
    setBatteryCheck({
      msg: message
    })
  }

  const SolarAlart = (message) => {
    setSolarCheck({
      msg: message
    })
  }

  const showAlert = (message, type) => {
    setAlerts({
      msg: message,
      type: type
    })
  }

  const changeDate = async (e) => {
    const data = await axios.post(`${process.env.REACT_APP_HOST}/admin/date`, { selectedItem: selectedItem, date: e });
    if (data.status === 200) {

      const convertTo12HourFormat = (time24) => {
        const [hours, minutes] = time24.split(':');
        let hours12 = hours % 12 || 12;
        const ampm = hours < 12 || hours === 24 ? 'AM' : 'PM';
        return `${hours12}:${minutes} ${ampm}`;
      };

      const newDataArray = data.data.data.dataCharts.map(chart => ({
        time: convertTo12HourFormat(chart.ccAxisXValue),
        solarVoltage: '' + chart.SolarVoltage + ' V',
        solarCurrent: '' + chart.SolarCurrent + ' A',
        inverterVoltage: '' + chart.InverterVoltage + ' V',
        inverterCurrent: '' + chart.InverterCurrent + ' A',
        gridVoltage: '' + chart.GridVoltage + ' V',
        gridCurrent: '' + chart.GridCurrent + ' A',
        batteryCurrent: '' + chart.BatteryCurrent + ' A',
        batteryVoltage: '' + chart.BatteryVoltage + ' V'
      }));

      setRecords(newDataArray);
      setDataCharts(data.data.data.dataCharts);
    }
  }

  const fetchData = async (item) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_HOST}/admin/db`, { selectedItem: item });
      if (response.status === 200) {
        const data = response.data.data;
        console.log(data);
        setDateOrg(data.caldate);
        setCurrDate(data.caldate);
        settValue(data.snapshot.tValue);
        setSolarVoltage((data.snapshot.solarVoltage).toFixed(2));
        setSolarCurrent((data.snapshot.solarCurrent).toFixed(2));
        setInverterVoltage((data.snapshot.inverterVoltage).toFixed(2));
        setInverterCurrent((data.snapshot.inverterCurrent).toFixed(2));
        setGridVoltage((data.snapshot.gridVoltage).toFixed(2));
        setGridCurrent((data.snapshot.gridCurrent).toFixed(2));
        setBatteryVoltage((data.snapshot.batteryVoltage).toFixed(2));
        setDataCharts(data.dataCharts);
        setSg(data.p1ValueTot);
        setGe(data.p2ValueTot);
        setLc(data.p3ValueTot);

        if (data.dataCharts.length > 0) {
          const t = Date.now();
          const currTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }).format(t);
          const check = data.dataCharts[data.dataCharts.length - 1].ccAxisXValue;
          const currValTime = Number(currTime.split(':')[0] + currTime.split(':')[1]);
          const checkVal = Number(check.split(':')[0] + check.split(':')[1]);
          if (Math.abs(currValTime - checkVal) < 200) {
            showAlert("This device is working", "success");
          } else {
            showAlert("This device is not working!", "danger");
          }
        }
        else {
          showAlert("This device is not working!", "danger");
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const setDat = async () => {
    const newDate = new Date().toISOString().substring(0, 10);
    setDateOrg(newDate);

    await changeDate(currDate);
  }

  useEffect(() => {
    if (!Cookies.get('token') || Cookies.get('role') !== "User") {
      window.location.href = "/";
    }
    if (Cookies.get("selectedItem")) {
      setSelectedItem(Cookies.get("selectedItem"));
    }
    setToken(Cookies.get("token"));
    fetchData(Cookies.get('selectedItem'));
  }, [selectedItem]);

  useEffect(() => {
    if (tvalue) {
      const val = new Date(tvalue * 1000);
      setFormattedDate(val.toLocaleString());
    }
  }, [tvalue]);

  const dataFetch = async () => {
    const datas = await axios.post('http://localhost:1337/admin/date', { selectedItem: selectedItem, date: dateOrg });
    if (datas.status === 200) {
      const convertTo12HourFormat = (time24) => {
        const [hours, minutes] = time24.split(':');
        let hours12 = hours % 12 || 12;
        const ampm = hours < 12 || hours === 24 ? 'AM' : 'PM';
        return `${hours12}:${minutes} ${ampm}`;
      };

      const newDataArray = datas.data.data.dataCharts.map(chart => ({
        time: convertTo12HourFormat(chart.ccAxisXValue),
        solarVoltage: '' + chart.SolarVoltage + ' V',
        solarCurrent: '' + chart.SolarCurrent + ' A',
        inverterVoltage: '' + chart.InverterVoltage + ' V',
        inverterCurrent: '' + chart.InverterCurrent + ' A',
        gridVoltage: '' + chart.GridVoltage + ' V',
        gridCurrent: '' + chart.GridCurrent + ' A',
        batteryCurrent: '' + chart.BatteryCurrent + ' A',
        batteryVoltage: '' + chart.BatteryVoltage + ' V'
      }));

      setRecords(newDataArray);
    }
  }

  const handlePrint = async (e) => {
    e.preventDefault();
    await dataFetch();

    const data = records.map(item => ({
      'Time': item.time,
      'Solar Voltage': item.solarVoltage,
      'Solar Current': item.solarCurrent,
      'Inverter Voltage': item.inverterVoltage,
      'Inverter Current': item.inverterCurrent,
      'Grid Voltage': item.gridVoltage,
      'Grid Current': item.gridCurrent,
      'Battery Voltage': item.batteryVoltage,
      'Battery Current': item.batteryCurrent
    }));

    const ws = XLSX.utils.json_to_sheet(data);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data Sheet');

    XLSX.writeFile(wb, `${dateOrg}.xlsx`);
  }


  useEffect(() => {
    function isSolarFailure(solarValue) {
      const currentTime = new Date().getTime();
      const startTime = new Date();
      startTime.setHours(6);
      startTime.setMinutes(0);
      startTime.setSeconds(0);

      var endTime = new Date();
      endTime.setHours(17);
      endTime.setMinutes(30);
      endTime.setSeconds(0);

      if (currentTime >= startTime.getTime() && currentTime <= endTime.getTime() && solarValue < 0.5) {
        return true;
      } else {
        return false;
      }
    }
    var solarValue = solarVoltage * solarCurrent;
    if (isSolarFailure(solarValue)) {
      SolarAlart(`Solar failure detected between 6:00 AM and 5:30 PM. ${(solarCurrent * solarVoltage).toFixed(2)} W`);
    } else {
      SolarAlart(`Solar system is operational. ${(solarCurrent * solarVoltage).toFixed(2)} W`);
    }

    function checkInverterStatus(solarVoltage, solarCurrent, batteryCharge, loadStatus, gridAvailability, inverterOutput) {
      if (solarVoltage > 0 && solarCurrent === 0 && isPeakTime()) {
        InverterAlart("Inverter failure: Solar power is not charging.");
      }
      if (solarVoltage > 0 && batteryCharge === 100 && loadStatus === "Grid") {
        InverterAlart("Inverter failure: Load is running on Grid instead of inverter.");
      }
      if (inverterOutput > 0 && !gridAvailability) {
        InverterAlart("Inverter failure: Inverter only works when Grid is available.");
      }
      if (solarVoltage > 0 && gridAvailability && batteryCharge > 0 && inverterOutput === 0) {
        InverterAlart("Inverter failure: Inverter output is zero.");
      }
      InverterAlart(`Inverter is functioning properly.  ${(inverterVoltage * inverterCurrent).toFixed(2)} W`);
    }


    function isPeakTime() {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      return currentHour >= 10 && currentHour <= 14;
    }
    const loadStatus = inverterVoltage < gridVoltage ? "Grid" : "Inverter";
    const gridAvailability = gridVoltage > 0;
    const inverterOutput = inverterVoltage * inverterCurrent;
    const batteryCharge = 100;
    checkInverterStatus(solarVoltage, solarCurrent, batteryCharge, loadStatus, gridAvailability, inverterOutput);

    BatteryAlart("Hello i am battery");
  }, [solarVoltage, solarCurrent, inverterVoltage, inverterCurrent, gridVoltage]);

  return (
    <div className='flex flex-col items-center min-h-screen bg-[#79e2f2]'>
      <div className='fixed w-full h-[70px] z-10'>
        <UserNavbar />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={`w-full mt-[80px] flex flex-col items-center`} >
          <div className='flex items-center justify-between p-2 w-full'>
            <div className='flex items-center gap-1 mx-2 select-none'>
              <h1 className='flex items-center justify-center text-xl font-bold'>VALUES CALCULATED ON </h1>
              <h1 className='flex items-center text-indigo-700 justify-center text-xl font-bold'>{formattedDate.substring(0, 10)}</h1>
            </div>
            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center mx-2 gap-1 p-2 shadow-lg rounded-lg bg-blue-700 hover:shadow-xl cursor-pointer select-none' onClick={handlePrint}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                  </svg>
                </div>
                <h1 className='font-semibold text-white'>Download Data on</h1>
              </div>
              <input type="date" value={dateOrg} onChange={(e) => { setDateOrg(e.target.value); changeDate(e.target.value) }} className={`p-1 rounded-lg shadow-lg ${dataCharts.length > 0 ? 'border-green-700 border border-1 bg-[#D4EDDA]' : 'border-red-700 border border-1 bg-[#F8D7DA]'} `} />
            </div>
          </div>
          <div className="w-full p-2">
            <Alert alert={alerts} InverterCheck={InverterCheck} BatteryCheck={BatteryCheck} SolarCheck={SolarCheck} location={Cookies.get('selectedLocation')} />
          </div>
          <div className='flex items-center px-2 md:mt-1 w-full'>
            <div className='p-4 rounded-lg bg-white w-full mx-2 flex flex-col'>
              <div className='flex items-center justify-center w-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center'>
                  <div className={`lg:w-[300px] md:w-[200px] hover:cursor-pointer hover:scale-105 duration-500 ${solarVoltage > 2 ? 'bg-[#50DFC2]' : 'bg-[#FF627C]'} flex flex-col items-center p-3 gap-2 rounded-lg shadow-lg`}>
                    <h1 className="text-white text-2xl font-bold">Solar Voltage</h1>
                    <div className="flex items-center gap-2 p-2">
                      <img src={SolarImg} width={30} />
                      <h1 className="text-white text-2xl font-bold">{solarVoltage} V</h1>
                    </div>
                  </div>
                  <div className={`lg:w-[300px] md:w-[200px] hover:cursor-pointer hover:scale-105 duration-500 ${solarCurrent > 0 ? 'bg-[#50DFC2]' : 'bg-[#FF627C]'} flex flex-col items-center p-3 gap-2 rounded-lg shadow-lg`}>
                    <h1 className="text-white text-2xl font-bold">Solar Current</h1>
                    <div className="flex items-center gap-2 p-2">
                      <img src={SolarImg} width={30} />
                      <h1 className="text-white text-2xl font-bold">{solarCurrent} A</h1>
                    </div>
                  </div>
                  <div className={`lg:w-[300px] md:w-[200px] hover:cursor-pointer hover:scale-105 duration-500 ${inverterVoltage > 180 ? 'bg-[#50DFC2]' : 'bg-[#FF627C]'} flex flex-col items-center p-3 gap-2 rounded-lg shadow-lg`}>
                    <h1 className="text-white text-2xl font-bold">Inverter Voltage</h1>
                    <div className="flex items-center gap-2 p-2">
                      <img src={InverterImg} width={30} />
                      <h1 className="text-white text-2xl font-bold">{inverterVoltage} V</h1>
                    </div>
                  </div>
                  <div className={`lg:w-[300px] md:w-[200px] hover:cursor-pointer hover:scale-105 duration-500 ${inverterCurrent > 0 ? 'bg-[#50DFC2]' : 'bg-[#FF627C]'} flex flex-col items-center p-3 gap-2 rounded-lg shadow-lg`}>
                    <h1 className="text-white text-2xl font-bold">Inverter Current</h1>
                    <div className="flex items-center gap-2 p-2">
                      <img src={InverterImg} width={30} />
                      <h1 className="text-white text-2xl font-bold">{inverterCurrent} A</h1>
                    </div>
                  </div>
                  <div className={`lg:w-[300px] md:w-[200px] hover:cursor-pointer hover:scale-105 duration-500 ${gridVoltage > 160 ? 'bg-[#50DFC2]' : 'bg-[#FF627C]'} flex flex-col items-center p-3 gap-2 rounded-lg shadow-lg`}>
                    <h1 className="text-white text-2xl font-bold">Grid Voltage</h1>
                    <div className="flex items-center gap-2 p-2">
                      <img src={ThunderImg} width={30} />
                      <h1 className="text-white text-2xl font-bold">{gridVoltage} V</h1>
                    </div>
                  </div>
                  <div className={`lg:w-[300px] md:w-[200px] hover:cursor-pointer hover:scale-105 duration-500 ${gridCurrent > 0 ? 'bg-[#50DFC2]' : 'bg-[#FF627C]'} flex flex-col items-center p-3 gap-2 rounded-lg shadow-lg`}>
                    <h1 className="text-white text-2xl font-bold">Grid Current</h1>
                    <div className="flex items-center gap-2 p-2">
                      <img src={ThunderImg} width={30} />
                      <h1 className="text-white text-2xl font-bold">{gridCurrent} A</h1>
                    </div>
                  </div>
                </div>

              </div>
              <div className='flex items-center justify-center gap-2 mt-4'>
                <div className={`lg:w-[300px] md:w-[200px] p-4 hover:cursor-pointer hover:scale-105 duration-500 ${batteryVoltage > 22 ? 'bg-[#50DFC2]' : 'bg-[#FF627C]'} flex flex-col items-center p-3 gap-2 rounded-lg shadow-lg`}>
                  <h1 className="text-white text-2xl font-bold">Battery Voltage</h1>
                  <div className="flex items-center gap-2 p-2">
                    <img src={BatteryImg} width={50} />
                    <h1 className="text-white text-2xl font-bold">{batteryVoltage} V</h1>
                  </div>
                </div>
                {batteryCurrent && (<div className={`lg:w-[300px] md:w-[200px] p-4 hover:cursor-pointer hover:scale-105 duration-500 ${batteryVoltage > 0 ? 'bg-[#50DFC2]' : 'bg-[#FF627C]'} flex flex-col items-center p-3 gap-2 rounded-lg shadow-lg`}>
                  <h1 className="text-white text-2xl font-bold">Battery Current</h1>
                  <div className="flex items-center gap-2 p-2">
                    <img src={BatteryImg} width={50} />
                    <h1 className="text-white text-2xl font-bold">{batteryCurrent} V</h1>
                  </div>
                </div>)}
              </div>
            </div>
          </div>
          <div className='flex items-center p-2 w-full'>
            <div className='p-4 rounded-lg bg-white w-full m-2 flex flex-col items-center'>
              <h1 className='p-4 flex items-center justify-center text-2xl font-bold text-[#FF5A76]'>ENERGY CONSUMPTIONS</h1>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center'>
                <div className={`lg:w-[280px] md:w-[200px] bg-[#38DAB9] m-4 p-4 hover:cursor-pointer hover:scale-105 duration-500 flex flex-col items-center p-3 gap-5 rounded-lg shadow-lg`}>
                  <h1 className="text-white text-2xl font-bold">Solar Generation</h1>
                  <div className="flex items-center gap-2 p-2">
                    <img src={SolarImg} width={30} />
                    <h1 className="text-white text-2xl font-bold">{sg} kWh</h1>
                  </div>
                </div>
                <div className={`lg:w-[280px] md:w-[200px] bg-[#67AEFF] m-4 p-4 hover:cursor-pointer hover:scale-105 duration-500 flex flex-col items-center p-3 gap-2 rounded-lg shadow-lg`}>
                  <h1 className="text-white text-2xl font-bold">Grid Energy</h1>
                  <div className="flex items-center gap-2 p-2">
                    <img src={ThunderImg} width={30} />
                    <h1 className="text-white text-2xl font-bold">{ge} kWh</h1>
                  </div>
                </div>
                <div className={`lg:w-[280px] md:w-[200px] bg-[#FF5A76] m-4 p-4 hover:cursor-pointer hover:scale-105 duration-500 flex flex-col items-center p-3 gap-2 rounded-lg shadow-lg`}>
                  <h1 className="text-white text-2xl font-bold">Load Consumption</h1>
                  <div className="flex items-center gap-2 p-2">
                    <img src={BulbImg} width={40} />
                    <h1 className="text-white text-2xl font-bold">{lc} kWh</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center p-2 w-full'>
            <div className='p-4 rounded-lg bg-white w-full m-2 flex flex-col items-center justify-center'>
              <div className='flex items-center justify-between w-full'>
                <div><div className='flex items-center justify-between p-2'>
                  <h1 className='p-4 flex items-center justify-center text-2xl font-bold'>VISUAL REPRESENTATION ON </h1>
                  <input type="date" value={dateOrg} onChange={(e) => { setDateOrg(e.target.value); changeDate(e.target.value) }} className={`p-1 rounded-lg shadow-lg ${dataCharts.length > 0 ? 'border-green-700 border border-1 bg-[#D4EDDA]' : 'border-red-700 border border-1 bg-[#F8D7DA]'} `} />
                </div></div>
                <div onClick={setDat} className='p-2 cursor-pointer flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  Refresh
                </div>
              </div>
              <Graph dataCharts={dataCharts} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllDevices;

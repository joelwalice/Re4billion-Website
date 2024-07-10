import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Enlarge from '../images/expand.png'

const Graph = ({ dataCharts }) => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);
    const [showModal7, setShowModal7] = useState(false);
    const [showModal8, setShowModal8] = useState(false);
    const [showModal9, setShowModal9] = useState(false);
    const [showModal10, setShowModal10] = useState(false);
    const [showModal11, setShowModal11] = useState(false);
    const [showModal12, setShowModal12] = useState(false);

    const handleCloseModal1 = () => setShowModal1(false);
    const handleCloseModal2 = () => setShowModal2(false);
    const handleCloseModal3 = () => setShowModal3(false);
    const handleCloseModal4 = () => setShowModal4(false);
    const handleCloseModal5 = () => setShowModal5(false);
    const handleCloseModal6 = () => setShowModal6(false);
    const handleCloseModal7 = () => setShowModal7(false);
    const handleCloseModal8 = () => setShowModal8(false);
    const handleCloseModal9 = () => setShowModal9(false);
    const handleCloseModal10 = () => setShowModal10(false);
    const handleCloseModal11 = () => setShowModal11(false);
    const handleCloseModal12 = () => setShowModal12(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleShowModal2 = () => setShowModal2(true);
    const handleShowModal3 = () => setShowModal3(true);
    const handleShowModal4 = () => setShowModal4(true);
    const handleShowModal5 = () => setShowModal5(true);
    const handleShowModal6 = () => setShowModal6(true);
    const handleShowModal7 = () => setShowModal7(true);
    const handleShowModal8 = () => setShowModal8(true);
    const handleShowModal9 = () => setShowModal9(true);
    const handleShowModal10 = () => setShowModal10(true);
    const handleShowModal11 = () => setShowModal11(true);
    const handleShowModal12 = () => setShowModal12(true);


    const curr = new Date(new Date());
    const CustomTooltipGW = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;

            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                    <p className="label" style={{ color: '#B90E0A' }}>{`Date : ${curr.getDate() + ' / ' + curr.getMonth() + " / " + curr.getFullYear()}`}</p>
                    <p className="label" style={{ color: '#B90E0A' }}>{`Time: ${data.ccAxisXValue.split(":")[0] == 24 ? "00:" + data.ccAxisXValue.split(":")[1] : data.ccAxisXValue}`}</p>
                    <p className="intro" style={{ color: '#B90E0A' }}>{`Grid Power: ${data.GridPower.toFixed(2)} KW`}</p>
                </div>
            );
        }
        return null;
    }

    const CustomTooltipSW = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;

            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                    <p className="label" style={{ color: '#B90E0A' }}>{`Date : ${curr.getDate() + ' / ' + curr.getMonth() + " / " + curr.getFullYear()}`}</p>
                    <p className="label" style={{ color: '#B90E0A' }}>{`Time: ${data.ccAxisXValue.split(":")[0] == 24 ? "00:" + data.ccAxisXValue.split(":")[1] : data.ccAxisXValue}`}</p>
                    <p className="intro" style={{ color: '#B90E0A' }}>{`Solar Power: ${data.SolarPower.toFixed(2)} KW`}</p>
                </div>
            );
        }
        return null;
    }

    const CustomTooltipIW = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;

            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                    <p className="label" style={{ color: '#B90E0A' }}>{`Date : ${curr.getDate() + ' / ' + curr.getMonth() + " / " + curr.getFullYear()}`}</p>
                    <p className="label" style={{ color: '#B90E0A' }}>{`Time: ${data.ccAxisXValue.split(":")[0] == 24 ? "00:" + data.ccAxisXValue.split(":")[1] : data.ccAxisXValue}`}</p>
                    <p className="intro" style={{ color: '#B90E0A' }}>{`Inverter Power: ${data.InverterPower.toFixed(2)} KW`}</p>
                </div>
            );
        }
        return null;
    }

    const CustomTooltipBW = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;

            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                    <p className="label" style={{ color: '#B90E0A' }}>{`Date : ${curr.getDate() + ' / ' + curr.getMonth() + " / " + curr.getFullYear()}`}</p>
                    <p className="label" style={{ color: '#B90E0A' }}>{`Time: ${data.ccAxisXValue.split(":")[0] == 24 ? "00:" + data.ccAxisXValue.split(":")[1] : data.ccAxisXValue}`}</p>
                    <p className="intro" style={{ color: '#B90E0A' }}>{`Inverter Power: ${data.BatteryPower.toFixed(2)} KW`}</p>
                </div>
            );
        }
        return null;
    }

    const CustomTooltipGI = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;

            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                    <p className="label" style={{ color: '#03C04A' }}>{`Date : ${curr.getDate() + ' / ' + curr.getMonth() + " / " + curr.getFullYear()}`}</p>
                    <p className="label" style={{ color: '#03C04A' }}>{`Time: ${data.ccAxisXValue.split(":")[0] == 24 ? "00:" + data.ccAxisXValue.split(":")[1] : data.ccAxisXValue}`}</p>
                    <p className="intro" style={{ color: '#03C04A' }}>{`Grid Current: ${data.GridCurrent} I`}</p>
                </div>
            );
        }
        return null;
    }

    const CustomTooltipII = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;

            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                    <p className="label" style={{ color: '#03C04A' }}>{`Date : ${curr.getDate() + ' / ' + curr.getMonth() + " / " + curr.getFullYear()}`}</p>
                    <p className="label" style={{ color: '#03C04A' }}>{`Time: ${data.ccAxisXValue.split(":")[0] == 24 ? "00:" + data.ccAxisXValue.split(":")[1] : data.ccAxisXValue}`}</p>
                    <p className="intro" style={{ color: '#03C04A' }}>{`Inverter Current: ${data.InverterCurrent} I`}</p>
                </div>
            );
        }
        return null;
    }

    const CustomTooltipSI = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;

            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                    <p className="label" style={{ color: '#03C04A' }}>{`Date : ${curr.getDate() + ' / ' + curr.getMonth() + " / " + curr.getFullYear()}`}</p>
                    <p className="label" style={{ color: '#03C04A' }}>{`Time: ${data.ccAxisXValue.split(":")[0] == 24 ? "00:" + data.ccAxisXValue.split(":")[1] : data.ccAxisXValue}`}</p>
                    <p className="intro" style={{ color: '#03C04A' }}>{`Solar Current: ${data.SolarCurrent} I`}</p>
                </div>
            );
        }
        return null;
    }

    const CustomTooltipBI = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;

            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                    <p className="label" style={{ color: '#03C04A' }}>{`Date : ${curr.getDate() + ' / ' + curr.getMonth() + " / " + curr.getFullYear()}`}</p>
                    <p className="label" style={{ color: '#03C04A' }}>{`Time: ${data.ccAxisXValue.split(":")[0] == 24 ? "00:" + data.ccAxisXValue.split(":")[1] : data.ccAxisXValue}`}</p>
                    <p className="intro" style={{ color: '#03C04A' }}>{`Solar Current: ${data.BatteryCurrent.toFixed(2)} I`}</p>
                </div>
            );
        }
        return null;
    }

    const CustomTooltipSV = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;

            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                    <p className="label" style={{ color: '#1338BE' }}>{`Date : ${curr.getDate() + ' / ' + curr.getMonth() + " / " + curr.getFullYear()}`}</p>
                    <p className="label" style={{ color: '#1338BE' }}>{`Time: ${data.ccAxisXValue.split(":")[0] == 24 ? "00:" + data.ccAxisXValue.split(":")[1] : data.ccAxisXValue}`}</p>
                    <p className="intro" style={{ color: '#1338BE' }}>{`Solar Voltage: ${data.SolarVoltage.toFixed(2)} V`}</p>
                </div>
            );
        }
        return null;
    }

    const CustomTooltipBV = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;

            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                    <p className="label" style={{ color: '#1338BE' }}>{`Date : ${curr.getDate() + ' / ' + curr.getMonth() + " / " + curr.getFullYear()}`}</p>
                    <p className="label" style={{ color: '#1338BE' }}>{`Time: ${data.ccAxisXValue.split(":")[0] == 24 ? "00:" + data.ccAxisXValue.split(":")[1] : data.ccAxisXValue}`}</p>
                    <p className="intro" style={{ color: '#1338BE' }}>{`Battery Voltage: ${data.BatteryVoltage.toFixed(2)} V`}</p>
                </div>
            );
        }
        return null;
    }

    const CustomTooltipGV = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;

            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                    <p className="label" style={{ color: '#1338BE' }}>{`Date : ${curr.getDate() + ' / ' + curr.getMonth() + " / " + curr.getFullYear()}`}</p>
                    <p className="label" style={{ color: '#1338BE' }}>{`Time: ${data.ccAxisXValue.split(":")[0] == 24 ? "00:" + data.ccAxisXValue.split(":")[1] : data.ccAxisXValue}`}</p>
                    <p className="intro" style={{ color: '#1338BE' }}>{`Grid Voltage: ${data.GridVoltage.toFixed(2)} V`}</p>
                </div>
            );
        }
        return null;
    }
    
    const CustomTooltipIV = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            let h;
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
                    <p className="label" style={{ color: '#1338BE' }}>{`Date : ${curr.getDate() + ' / ' + curr.getMonth() + " / " + curr.getFullYear()}`}</p>
                    <p className="label" style={{ color: '#1338BE' }}>{`Time: ${data.ccAxisXValue.split(":")[0] == 24 ? "00:" + data.ccAxisXValue.split(":")[1] : data.ccAxisXValue}`}</p>
                    <p className="intro" style={{ color: '#1338BE' }}>{`Inverter Voltage: ${data.InverterVoltage.toFixed(2)} V`}</p>
                </div>
            );
        }
        return null;
    }
    return (
        <div className="w-full">
            <div className="flex items-center justify-center grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-3 gap-5">
                <div className="bg-gray-100 rounded-lg shadow-lg border-[#17A2B8] border-2">
                    <div className="flex items-center justify-between p-1 cursor-pointer">
                        <div></div>
                        <img src={Enlarge} width={20} className="" onClick={handleShowModal1} />
                    </div>
                    <div className="">
                        <LineChart width={380} height={280} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 0, bottom: 25 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem' }} tickSize={10}/>
                            <YAxis style={{ fontSize: '0.8rem' }} label={{ dx: -20, value: '(Volts)', angle: -90, fontSize: '0.9rem' }} domain={[0, 'dataMax + 2']} tickCount={12} />
                            <Tooltip content={CustomTooltipSV} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="SolarVoltage" stroke="#1338be" dot={false} />
                        </LineChart>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg border-[#17A2B8] border-2">
                    <div className="flex items-center justify-between p-1 cursor-pointer">
                        <div></div>
                        <img src={Enlarge} width={20} className="" onClick={handleShowModal2} />
                    </div>
                    <div className="">
                        <LineChart width={380} height={280} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 0, bottom: 25 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Amps)', angle: -90, fontSize: '0.9rem', }} tickCount={5} domain={[0, 'dataMax + 2']} />
                            <Tooltip content={CustomTooltipSI} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="SolarCurrent" stroke="#03c04a" dot={false} />
                            {/* <Line name="Solar Current" type="monotone" dataKey="SolarCurrentSmooth"  stroke="#03C04A"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg shadow-lg border-[#17A2B8] border-2">
                    <div className="flex items-center justify-between p-1 cursor-pointer">
                        <div></div>
                        <img src={Enlarge} width={20} className="" onClick={handleShowModal3} />
                    </div>
                    <div className="">
                        <LineChart width={380} height={280} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 0, bottom: 25 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Watts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 2']} tickCount={20}  />
                            <Tooltip content={CustomTooltipSW} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="SolarPower" stroke="#b90e0a" dot={false} />
                            {/* <Line name="Solar Power" type="monotone" dataKey="SolarPowerSmooth"  stroke="#b90e0a"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg shadow-lg border-[#17A2B8] border-2">
                    <div className="flex items-center justify-between p-1 cursor-pointer">
                        <div></div>
                        <img src={Enlarge} width={20} className="" onClick={handleShowModal4} />
                    </div>
                    <div className="">
                        <LineChart width={380} height={280} data={dataCharts} margin={{ top: 0, right: 30, left: 0, bottom: 25, }} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Volts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 10']} tickCount={14}  />
                            <Tooltip content={CustomTooltipIV} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="InverterVoltage" stroke="#1338be" dot={false} />
                            {/* <Line name="Inverter Voltage" type="monotone" dataKey="InverterVoltageSmooth"  stroke="#1338be"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg shadow-lg border-[#17A2B8] border-2">
                    <div className="flex items-center justify-between p-1 cursor-pointer">
                        <div></div>
                        <img src={Enlarge} width={20} className="" onClick={handleShowModal5} />
                    </div>
                    <div className="">
                        <LineChart width={380} height={280} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 0, bottom: 25, }} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Amps)', angle: -90, fontSize: '0.9rem', }} tickCount={10} domain={[0, 'dataMax + 2']} />
                            <Tooltip content={CustomTooltipII} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="InverterCurrent" stroke="#03c04a" dot={false} />
                            {/* <Line name="Inverter Current" type="monotone" dataKey="InverterCurrentSmooth"  stroke="#03c04a"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg shadow-lg border-[#17A2B8] border-2">
                    <div className="flex items-center justify-between p-1 cursor-pointer">
                        <div></div>
                        <img src={Enlarge} width={20} className="" onClick={handleShowModal6} />
                    </div>
                    <div className="">
                        <LineChart width={380} height={280} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 0, bottom: 25, }} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Watts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 2']} tickCount={10} />
                            <Tooltip content={CustomTooltipIW} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="InverterPower" stroke="#b90e0a" dot={false} />
                            {/* <Line name="Inverter Power" type="monotone" dataKey="InverterPowerSmooth"  stroke="#b90e0a"  dot={false} /> */}
                        </LineChart>
                    </div>

                </div>

                <div className="bg-gray-100 rounded-lg shadow-lg border-[#17A2B8] border-2">
                    <div className="flex items-center justify-between p-1 cursor-pointer">
                        <div></div>
                        <img src={Enlarge} width={20} className="" onClick={handleShowModal7} />
                    </div>
                    <div className="">
                        <LineChart width={380} height={280} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 0, bottom: 25, }} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Volts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 2']} tickCount={20}/>
                            <Tooltip content={CustomTooltipGV} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="GridVoltage" stroke="#1338be" dot={false} />
                            {/* <Line name="Grid Voltage" type="monotone" dataKey="GridVoltageSmooth" stroke="#1338be"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg shadow-lg border-[#17A2B8] border-2">
                    <div className="flex items-center justify-between p-1 cursor-pointer">
                        <div></div>
                        <img src={Enlarge} width={20} className="" onClick={handleShowModal8} />
                    </div>
                    <div className="">
                        <LineChart width={380} height={280} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 0, bottom: 25, }} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Amps)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 2']} tickCount={10}/>
                            <Tooltip content={CustomTooltipGI} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="GridCurrent" stroke="#03c04a" dot={false} />
                            {/* <Line name="Grid Current" type="monotone" dataKey="GridCurrentSmooth" stroke="#03c04a"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg shadow-lg border-[#17A2B8] border-2">
                    <div className="flex items-center justify-between p-1 cursor-pointer">
                        <div></div>
                        <img src={Enlarge} width={20} className="" onClick={handleShowModal9} />
                    </div>
                    <div className="">
                        <LineChart width={380} height={280} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 0, bottom: 25 }} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Watts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 2']} tickCount={20}/>
                            <Tooltip content={CustomTooltipGW} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="GridPower" stroke="#b90e0a" dot={false} />
                            {/* <Line name="Grid Power" type="monotone" dataKey="GridPowerSmooth" stroke="#b90e0a"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg shadow-lg border-[#17A2B8] border-2">
                    <div className="flex items-center justify-between p-1 cursor-pointer">
                        <div></div>
                        <img src={Enlarge} width={20} className="" onClick={handleShowModal10} />
                    </div>
                    <div className="">
                        <LineChart width={380} height={280} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 0, bottom: 25, }} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Volts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 2']} tickCount={10}/>
                            <Tooltip content={CustomTooltipBV} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="BatteryVoltage" stroke="#1338be" dot={false} />
                            {/* <Line name="Battery Voltage" type="monotone" dataKey="BatteryVoltageSmooth" stroke="#1338be"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg shadow-lg border-[#17A2B8] border-2">
                    <div className="flex items-center justify-between p-1 cursor-pointer">
                        <div></div>
                        <img src={Enlarge} width={20} className="" onClick={handleShowModal11} />
                    </div>
                    <div className="">
                        <LineChart width={380} height={280} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 0, bottom: 25 }} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Amps)', angle: -90, fontSize: '0.9rem', }} domain={[0, 50]} />
                            <Tooltip content={CustomTooltipGI} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="BatteryCurrent" stroke="#03c04a" dot={false} />
                            {/* <Line name="Grid Current" type="monotone" dataKey="GridCurrentSmooth" stroke="#03c04a"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg shadow-lg border-[#17A2B8] border-2">
                    <div className="flex items-center justify-between p-1 cursor-pointer">
                        <div></div>
                        <img src={Enlarge} width={20} className="" onClick={handleShowModal12} />
                    </div>
                    <div className="">
                        <LineChart width={380} height={280} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 0, bottom: 25 }} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem' }} label={{ dx: -20, value: '(Watts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 2']} />
                            <Tooltip content={CustomTooltipGW} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="BatteryPower" stroke="#b90e0a" dot={false} />
                            {/* <Line name="Grid Power" type="monotone" dataKey="GridPowerSmooth" stroke="#b90e0a"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>
            </div >
            {showModal1 && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="relative top-7 bg-white rounded-lg flex flex-col">
                        <div className="flex items-center justify-between p-2">
                            <div>

                            </div>
                            <button onClick={handleCloseModal1}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <LineChart width={1000} height={500} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem' }} />
                            <YAxis style={{ fontSize: '0.8rem' }} label={{ dx: -20, value: '(Volts)', angle: -90, fontSize: '0.9rem' }} domain={[0, 'dataMax + 2']} tickCount={12} />
                            <Tooltip content={CustomTooltipSV} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line dataKey="SolarVoltage" stroke="#1338be" dot={false} />
                        </LineChart>
                    </div>
                </div>
            )}
            {showModal2 && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="relative top-7 bg-white rounded-lg flex flex-col">
                        <div className="flex items-center justify-between p-2">
                            <div>

                            </div>
                            <button onClick={handleCloseModal2}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <LineChart width={1000} height={500} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Amps)', angle: -90, fontSize: '0.9rem', }} domain={[0, 50]} />
                            <Tooltip content={CustomTooltipSI} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="SolarCurrent" stroke="#03c04a" dot={false} />
                            {/* <Line name="Solar Current" type="monotone" dataKey="SolarCurrentSmooth"  stroke="#ff0000"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>
            )}{showModal3 && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="relative top-7 bg-white rounded-lg flex flex-col">
                        <div className="flex items-center justify-between p-2">
                            <div>

                            </div>
                            <button onClick={handleCloseModal3}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <LineChart width={1000} height={500} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Watts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 5']} tickCount={10}/>
                            <Tooltip content={CustomTooltipSW} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="SolarPower" stroke="#b90e0a" dot={false} />
                            {/* <Line name="Solar Power" type="monotone" dataKey="SolarPowerSmooth"  stroke="#b90e0a"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>
            )}{showModal4 && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="relative top-7 bg-white rounded-lg flex flex-col">
                        <div className="flex items-center justify-between p-2">
                            <div>

                            </div>
                            <button onClick={handleCloseModal4}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <LineChart width={1000} height={500} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Volts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 5']} tickCount={10}/>
                            <Tooltip content={CustomTooltipIV} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="InverterVoltage" stroke="#1338be" dot={false} />
                            {/* <Line name="Inverter Voltage" type="monotone" dataKey="InverterVoltageSmooth"  stroke="#1338be"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>
            )}{showModal5 && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="relative top-7 bg-white rounded-lg flex flex-col">
                        <div className="flex items-center justify-between p-2">
                            <div>

                            </div>
                            <button onClick={handleCloseModal5}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <LineChart width={1000} height={500} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Amps)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 5']} tickCount={10}/>
                            <Tooltip content={CustomTooltipII} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="InverterCurrent" stroke="#03c04a" dot={false} />
                            {/* <Line name="Inverter Current" type="monotone" dataKey="InverterCurrentSmooth"  stroke="#03c04a"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>
            )}{showModal6 && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="relative top-7 bg-white rounded-lg flex flex-col">
                        <div className="flex items-center justify-between p-2">
                            <div>

                            </div>
                            <button onClick={handleCloseModal6}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <LineChart width={1000} height={500} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Watts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 5']} tickCount={10}/>
                            <Tooltip content={CustomTooltipIW} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="InverterPower" stroke="#b90e0a" dot={false} />
                            {/* <Line name="Inverter Power" type="monotone" dataKey="InverterPowerSmooth"  stroke="#b90e0a"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>
            )}{showModal7 && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="relative top-7 bg-white rounded-lg flex flex-col">
                        <div className="flex items-center justify-between p-2">
                            <div>

                            </div>
                            <button onClick={handleCloseModal7}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <LineChart width={1000} height={500} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Volts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 5']} tickCount={10}/>
                            <Tooltip content={CustomTooltipGV} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="GridVoltage" stroke="#1338be" dot={false} />
                            {/* <Line name="Grid Voltage" type="monotone" dataKey="GridVoltageSmooth" stroke="#1338be"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>
            )}{showModal8 && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="relative top-7 bg-white rounded-lg flex flex-col">
                        <div className="flex items-center justify-between p-2">
                            <div>

                            </div>
                            <button onClick={handleCloseModal8}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <LineChart width={800} height={450} data={dataCharts}
                            margin={{ top: 0, right: 20, left: 10, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Amps)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 5']} />
                            <Tooltip content={CustomTooltipGI} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="GridCurrent" stroke="#03c04a" dot={false} />
                            {/* <Line name="Grid Current" type="monotone" dataKey="GridCurrentSmooth" stroke="#03c04a"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>
            )}{showModal9 && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="relative top-7 bg-white rounded-lg flex flex-col">
                        <div className="flex items-center justify-between p-2">
                            <div>

                            </div>
                            <button onClick={handleCloseModal9}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <LineChart width={1000} height={500} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Watts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 5']} tickCount={10}/>
                            <Tooltip content={CustomTooltipGW} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="GridPower" stroke="#b90e0a" dot={false} />
                            {/* <Line name="Grid Power" type="monotone" dataKey="GridPowerSmooth" stroke="#b90e0a"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>
            )}{showModal10 && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="relative top-7 bg-white rounded-lg flex flex-col">
                        <div className="flex items-center justify-between p-2">
                            <div>

                            </div>
                            <button onClick={handleCloseModal10}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <LineChart width={1000} height={500} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Volts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 5']} tickCount={10}/>
                            <Tooltip content={CustomTooltipBV} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="BatteryVoltage" stroke="#1338be" dot={false} />
                            {/* <Line name="Battery Voltage" type="monotone" dataKey="BatteryVoltageSmooth" stroke="#1338be"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>
            )}{showModal11 && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="relative top-7 bg-white rounded-lg flex flex-col">
                        <div className="flex items-center justify-between p-2">
                            <div>

                            </div>
                            <button onClick={handleCloseModal11}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <LineChart width={1000} height={500} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Amps)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 5']}/>
                            <Tooltip content={CustomTooltipBI} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="BatteryCurrent" stroke="#03c04a" dot={false} />
                            {/* <Line name="Grid Current" type="monotone" dataKey="GridCurrentSmooth" stroke="#03c04a"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>
            )}{showModal12 && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="relative top-7 bg-white rounded-lg flex flex-col">
                        <div className="flex items-center justify-between p-2">
                            <div>

                            </div>
                            <button onClick={handleCloseModal12}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <LineChart width={1000} height={500} data={dataCharts}
                            margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ccAxisXValue" angle={-15} textAnchor="end" style={{ fontSize: '0.8rem', }} />
                            <YAxis style={{ fontSize: '0.8rem', }} label={{ dx: -20, value: '(Watts)', angle: -90, fontSize: '0.9rem', }} domain={[0, 'dataMax + 5']} />
                            <Tooltip content={CustomTooltipBW} />
                            <Legend layout="horizontal" verticalAlign="top" align="center" />
                            <Line type="monotone" dataKey="BatteryPower" stroke="#b90e0a" dot={false} />
                            {/* <Line name="Grid Power" type="monotone" dataKey="GridPowerSmooth" stroke="#b90e0a"  dot={false} /> */}
                        </LineChart>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Graph
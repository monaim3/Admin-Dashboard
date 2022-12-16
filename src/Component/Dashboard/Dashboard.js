import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import  './Dashboard.css'
import Revune from '../Revune/Revune';
import FooterCampian from '../FooterCampian/FooterCampian';
const Dashboard = () => {
    return (
        <>
          <div className="flex justify-between ">
            <div className="mt-4">
              <h2 className='text-2xl font-semibold text-indigo-900'> Dashboard </h2>
             
            </div>
            <div className="mt-2 bg-slate-800 px-4 mr-4 flex justify-between items-center rounded-md">
            <FontAwesomeIcon icon={faDownload} className='text-white' />
            <span className='text-white text-xl ml-2'>Reports</span>
            </div>
          </div>
          <div className="progreess grid grid-cols-3 gap-5 mt-6">
            
            <div className="progress-inner bg-gray-700 p-4 flex justify-between items-center">
                <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} className='text-lime-500'/>
                <h4 className='text-2xl text-white ml-[-2%]'>12,361</h4>
                <h5 className='text-xl  text-lime-500 '>Emails Sents</h5>
                </div>
                <div className="circle">
                <div className="radial-progress bg-transparent	 text-teal-500 border-4 border-[#3A3A8A]" style={{"--value":14}}>+14%</div>
                <h5 className='text-base text-lime-500 text-center mt-2'>+14%</h5>
                </div>
            </div>
            <div className="progress-inner bg-gray-700 p-4 flex justify-between items-center">
                <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} className='text-lime-500'/>
                <h4 className='text-2xl text-white ml-[-2%]'>19,365</h4>
                <h5 className='text-xl text-lime-500 '>Sales Obtained</h5>
                </div>
                <div className="circle">
                <div className="radial-progress bg-transparent	 text-teal-500 border-4 border-[#3A3A8A]" style={{"--value":15}}>+15%</div>
                <h5 className='text-base text-lime-500 text-center mt-2'>+15%</h5>
                </div>
            </div>
            <div className="progress-inner bg-gray-700 p-4 flex justify-between items-center">
                <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} className='text-lime-500'/>
                <h4 className='text-2xl text-white ml-[-2%]'>32,156</h4>
                <h5 className='text-xl  text-lime-500 '>New cliants</h5>
                </div>
                <div className="circle">
                <div className="radial-progress bg-transparent	 text-teal-500 border-4 border-[#3A3A8A]" style={{"--value":16}}>16%</div>
                <h5 className='text-base text-lime-500 text-center mt-2'>+16%</h5>
                </div>
            </div>
          </div>
          <Revune></Revune>
          <div className='h-12vh mt-6'>
          <FooterCampian></FooterCampian>
          </div>
        </>
    );
};

export default Dashboard;
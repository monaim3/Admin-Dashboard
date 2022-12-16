import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import {mockTransactions as data} from "../../Data/MockData";
import RevenueLine from '../RevenueLine/RevenueLine';
const Revune = () => {
    return (
        <>
          <div className="wrapper grid grid-cols-5 gap-3 mt-12 ">
            <div className="line-area col-span-4 bg-[#374151] p-4 text-white">
            <div className="revenue flex justify-between  ">
              <div className="regen">
               <h3 className='text-xl'>Revenue Generate</h3>
               <h4 className='text-2xl'>$56,934,25</h4>
              </div>
              <div className="icon-area">
                
                     <FontAwesomeIcon icon={faDownload}  />

              </div>
            </div> 
           <RevenueLine></RevenueLine>
            </div>
            <div className="recent ">
               <div className="bg-[#374151] p-2 text-white recent-transction">
                <h2>Recent Transction</h2>
               </div>
              {
                data.map((ele,i)=> <div className="mt-2 mock-transtion flex justify-between bg-[#374151] p-2 text-white">
                <div className="">
                  <h2 className='text-sm text-emerald-400'> {ele.txId}</h2>
                  <h2 className='text-sm'>{ele.user}</h2>
                </div>
                <div className="">
                  <h2 className='bg-emerald-400 py-2 px-2 ml-2 rounded-md'> ${ele.cost}</h2>
                </div>
             </div>)
              }
            </div>
          </div>
        </>
    );
};

export default Revune;
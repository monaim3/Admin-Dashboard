import React from 'react';
import Barchart from '../Barchart/Barchart';
import Geography from '../Geography/Geography';
import Piechart from '../Piechart/Piechart';

const FooterCampian = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-5">
              <div className="box1 h-10 bg-[#374151]">
                <Piechart></Piechart>
              </div>
              <div className="box2 h-10 bg-[#374151]">
                <Barchart></Barchart>
               </div>
              <div className="box3 h-10 bg-[#374151]">
              <Geography></Geography>
              </div>
            </div>
        </>
    );
};

export default FooterCampian;
import React from 'react';
import InvoiceBalanceDeatils from './InvoiceBalanceDeatils';
import  {mockDataInvoices} from '../../Data/MockData' 
const InvoiceBalance = () => {
    return (
        <>
      
        <div class="antialiased font-sans bg-gray-200">
            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight">Invoice Balance</h2>
                    </div>
                    
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                           Name 
                                        </th>
                                       
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                          Phone Number
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                          Email
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                         Cost
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                         Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {mockDataInvoices.map((team)=><InvoiceBalanceDeatils invoice={team} key={team.id}></InvoiceBalanceDeatils>)}
                                
                                </tbody>
                            </table>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>  
                </>
    );
};

export default InvoiceBalance;
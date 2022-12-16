import React from 'react';

const InvoiceBalanceDeatils = ({invoice}) => {
    const {id,name,email,phone,cost,date}=invoice
    return (
        <>
           <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                         <p class="text-gray-900 whitespace-no-wrap">
                                             {id}
                                            </p>

                                </td>
                               
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">{name}</p>
                                </td>
                               
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                    {phone}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                    {email}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                   ${cost}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                    {date}
                                    </p>
                                </td>
                              
                                
                            </tr>
                            
        </>
    );
};

export default InvoiceBalanceDeatils;
import React from 'react';

const ContactInfoDeatils = ({team}) => {
    const {id,name,email,phone,age,zipCode,registrarId,city,address}=team
    return (
        <>
           <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                         <p class="text-gray-900 whitespace-no-wrap">
                                             {id}
                                            </p>

                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                         <p class="text-gray-900 whitespace-no-wrap">
                                             {registrarId}
                                            </p>

                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">{name}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                    {age}
                                    </p>
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
                                    {address}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                    {city}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                    {zipCode}
                                    </p>
                                </td>
                                
                            </tr>
                            
        </>
    );
};

export default ContactInfoDeatils;
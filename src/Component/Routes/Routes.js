import { createBrowserRouter } from "react-router-dom";
import Bar from "../Barchart/Bar";
import Barchart from "../Barchart/Barchart";

import Calender from "../Calender/Calender";
import Chat from "../Chat/Chat";
import ContactInformation from "../ContactInformation/ContactInformation";
import Dashboard from "../Dashboard/Dashboard";
import Faq from "../Faq/Faq";
import Geography from "../Geography/Geography";
import InvoiceBalance from "../InvoiceBalance/InvoiceBalance";
import Layout from "../Layout/Layout";
import Linechart from "../Linechart/Linechart";
import ManageTeam from "../ManageTeam/ManageTeam";
import Piechart from "../Piechart/Piechart";
import ProfileForm from "../ProfileForm/ProfileForm";


 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Dashboard></Dashboard>
            },
           
            {
                path:'/ManageTeam',
                element:<ManageTeam></ManageTeam>
            },
            {
                path:'/chat',
                element:<Chat></Chat>
            },
            {
                path:'/contact',
                element:<ContactInformation></ContactInformation>
            },
            {
                path:'/Invoice',
                element:<InvoiceBalance></InvoiceBalance>
            },
          
            {
                path:'/profile',
                element:<ProfileForm></ProfileForm>
            },
            {
                path:'/calender',
                element:<Calender></Calender>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/bar',
                element:<Barchart></Barchart>
            },
            {
                path:'/pie',
                element:<Piechart></Piechart>
            },
            {
                path:'/line',
                element:<Linechart></Linechart>
            },
            {
                path:'/geograpy',
                element:<Geography></Geography>
            },
        ]
      },
])
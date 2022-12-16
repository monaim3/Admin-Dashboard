import { ToastContainer} from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './Component/Routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from 'react';

export const darkContext=createContext()
function App() {
  const [dark,setDark]=useState(false)
   const themStyle={
     backgroundColor:dark ? 'black':'white',
     color:dark ? 'white' : 'black'
   }
  return (
   <> 
   <div style={themStyle}>
   <ToastContainer position='top-center'></ToastContainer>
       <darkContext.Provider value={[dark,setDark]}>
       <RouterProvider router={router}/>
       </darkContext.Provider>
   </div>
         
    </>
  );
}

export default App;

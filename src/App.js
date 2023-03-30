import { Outlet } from 'react-router-dom';
import './App.css';
import {motion} from 'framer-motion'

function App() {
  return (
 <>
   <div className="App">
      <motion.div
          animate={{rotateZ: 360, color: '#ff2994', x: 0, scale: 1,}}
          initial={{
            x: 300,
            scale: 0.5,
          }}
          transition={{ duration: 1 }}
          >
         <h1 className='heading'>This is my Book App</h1>
   
          </motion.div>
     </div>
        <Outlet/>
        </>
      )}

export default App;
import React from 'react';
 
import {motion} from 'framer-motion'
import {Link } from "react-router-dom";



const Home = () => {


    return (
    
        <div className='Home'>
          
        
          <motion.div
 initial={{
     x: -300,
     scale: 0.5,
    }}
    animate={{
        fontSize: 50,
        x: 0,
        scale: 1,
    }}
    transition={{ duration: 1 }}
    >
<p className='welcome-note'
            
            >Introducing the Ultimate Book App: Your Personal Library at Your Fingertips</p>
        
 </motion.div>
    <Link className='button' to="/home" >Click Here</Link>
           
        </div>
    );
};


export default Home;
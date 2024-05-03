import './navbar.scss';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/*sidebar*/}
      <Sidebar />
      <div className='wrapper'>
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Harsh dev
        </motion.span>
        <div className='social'>
          <a href='https://www.linkedin.com/in/harshvardhantripathi21/'>
            <img src='/linkedin.png' />
          </a>
          <a href='https://github.com/Harsh21hv'>
            <img src='/github.png' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

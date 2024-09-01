import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    Transition: {
      duration: 10,
      staggerChildren: 10,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>HARSH VARDHAN TRIPATHI </motion.h2>
          <motion.h1 variants={textVariants}>
            Full stack Web developer
          </motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <motion.button variants={textVariants}>
              <a href='https://github.com/Harsh21hv/Natours-API'>
                {' '}
                Latest Work
              </a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href='https://drive.google.com/file/d/1p9pu3Bfbj3Hsuz_KbXEy8Q6uq6DqQX_q/view?usp=drivesdk' >
                My Resume
              </a>{' '}
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate='scrollButton'
            src='/scroll.png'
          />
        </motion.div>
      </div>
      <div className='imageContainer'>
        <img src='/hv.png' alt='img' />
      </div>
    </div>
  );
};

export default Hero;

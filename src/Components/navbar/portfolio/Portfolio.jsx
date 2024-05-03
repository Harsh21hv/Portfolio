import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'Netflix GPT',
    img: 'https://www.missioncriticalmagazine.com/ext/resources/2023/10/CHatgpt.jpg?1697059739',
    desc: 'Netflix-GPT is a movie search application that leverages React.js, Redux Toolkit, Firebase, and OpenAI API for an immersive movie search experience. The project is styled using Tailwind CSS to ensure a clean and responsive user interface.',
    link: 'https://netflix-gpt-ten-rose.vercel.app/',
  },
  {
    id: 2,
    title: 'Natours - The natures wanderer',
    img: 'https://user-images.githubusercontent.com/94133102/209841542-20c1a989-bf13-455c-a3e7-ddd8ef1f6539.png',
    desc: 'This is a Node.js project built with Express and MongoDB, utilizing Mongoose for data modeling. The project incorporates routing, error handling, and authentication to create a robust and secure web application.',
    link: 'https://natours-api-gg0p.onrender.com/',
  },
  {
    id: 3,
    title: 'Food Ordering App',
    img: 'https://camo.githubusercontent.com/5e88db1bb868f925b70646ca2728a84e93afe2aaa4a9652aba664f921dc086b1/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6477777466666566732f696d6167652f75706c6f61642f76313637373439353631392f666f6f646966792f686f6d655f7264696b63332e706e673f7261773d74727565',
    desc: 'This is a React-based food ordering application that leverages various functionalities and tools to enable seamless food ordering experiences.It uses a live Swiggy API which shows live restaurants and menu. It is integrated with many latest features such as On demand loading, lazy loading and many such advanced features',
    link: 'https://food-order-app-vite.vercel.app/',
  },
  {
    id: 4,
    title: 'Node farm- an organic tour',
    img: 'https://user-images.githubusercontent.com/58518192/72437738-9c666100-37cd-11ea-92dc-7092f0e93289.png',
    desc: 'This is my first project learning backend technologies such as Node, Express, MongoDB and is also dynamic in terms of its functioning  ',
    link: 'https://node-farm-project-nine.vercel.app/',
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-250, 250]);
  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <motion.img
              src={item.img}
              alt='img'
              whileHover={{ opacity: 0.3 }}
            />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2 style={{ y }}>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.div
              className='demo'
              whileHover={{ backgroundColor: 'white' }}
            >
              <a href={item.link}>See Demo</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

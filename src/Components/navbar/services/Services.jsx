import React, { useRef } from 'react';
import './services.scss';
import { animate, motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });
  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      //whileInView='animate'
      ref={ref}
      animate={'animate'}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          My focus is on creating your websites look <br />
          responsive with better dynamics
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Skills</motion.b> that
            helped me
          </h1>
          <button className='portButton'><a href='https://github.com/Harsh21hv'>My portfolio</a></button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Javascript</h2>

          <p>
            JavaScript is a cross-platform, object-oriented scripting language
            used to make webpages interactive (e.g., having complex animations,
            clickable buttons, popup menus, etc.). There are also more advanced
            server side versions of JavaScript such as Node.js, which allow you
            to add more functionality to a website than downloading files (such
            as realtime collaboration between multiple computers).
          </p>
          <div className='button'>
            <a
              style={{ padding: '72px' }}
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            >
              Know more{' '}
            </a>
          </div>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Reactjs</h2>
          <p>
            React primary goal is to minimize the bugs that occur when
            developers are building UIs. It does this through the use of
            components — self-contained, logical pieces of code that describe a
            portion of the user interface. These components can be composed
            together to create a full UI, and React abstracts away much of the
            rendering work, leaving you to concentrate on the UI design.
          </p>
          <div className='button'>
            <a style={{ padding: '68px' }} href='https://react.dev/'>
              Know more{' '}
            </a>
          </div>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Nodejs</h2>
          <p>
            Node (or more formally Node.js) is an open-source, cross-platform
            runtime environment that allows developers to create all kinds of
            server-side tools and applications in JavaScript. The runtime is
            intended for use outside of a browser context (i.e. running directly
            on a computer or server OS). As such, the environment omits
            browser-specific JavaScript APIs and adds support for more
            traditional OS APIs including HTTP and file system libraries.
          </p>
          <div className='button'>
            <a style={{ padding: '80px' }} href='https://nodejs.org/en'>
              Know more{' '}
            </a>
          </div>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Express</h2>
          <p>
            Express is a popular unopinionated web framework, written in
            JavaScript and hosted within the Node.js runtime environment. This
            module explains some of the key benefits of the framework, how to
            set up your development environment and how to perform common web
            development and deployment tasks.
          </p>
          <div className='button'>
            <a
              style={{ padding: '50px' }}
              href='https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction'
            >
              Know more{' '}
            </a>
          </div>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>MongoDB</h2>
          <p>
            MongoDB is an open-source, document-oriented database management
            system (DBMS) that stores data in JSON-like documents. It is
            designed to store large amounts of data, and is categorized as a
            NoSQL (Not only SQL) database because data is stored and retrieved
            in documents and collections, not tables.
          </p>
          <div className='button'>
            <a style={{ padding: '50px' }} href='https://www.mongodb.com/'>
              Know more{' '}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

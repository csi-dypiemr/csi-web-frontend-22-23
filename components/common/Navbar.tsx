import React from 'react';
import styles from '../../styles/Home.module.css'
// import { Container } from '@chakra-ui/react';

// const breakpoints = {
//   sm: '480px',
//   md: '600px',
//   lg: '960px',
//   xl: '1200px',
//   xxl: '1440px',
// }

type Props = {};

const Navbar = (props: Props) => {
  return <div className={styles.navBar}>
    <div className={styles.logo}>
      <img src="" alt="" />
       <h1 className={styles.navtitle}>CSI DYPIEMR</h1>
    </div>
    <div className={styles.navLinks}>
      <a href="#">Home</a>
      <a href="#">Event</a>
      <a href="#">Team</a>
      <a href="#">About</a>
    </div>
    <div>
      <div className={styles.joinBtn}>join</div>
    </div>
  </div>;
};

export default Navbar;

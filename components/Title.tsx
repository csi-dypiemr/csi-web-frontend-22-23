import React from 'react';
import { Container } from '@chakra-ui/react';
import styles from "../styles/Home.module.css"

// const breakpoints = {
//   sm: '480px',
//   md: '600px',
//   lg: '960px',
//   xl: '1200px',
//   xxl: '1440px',
// }


type Props = {};

const Title = (props: Props) => {
  return <div className={styles.titlePage}>
    <div className={styles.titlePageContent}>
      <div className={styles.titlePageTitle}>
        <strong>
          Computer Society Of India, DYPIEMR
        </strong>
      </div>
      <div className={styles.titlePageDesc}>
        <p>
          CSI-DYPIEMR is the Student Chapter of Computer Society of India,  <br />
          Dr. D. Y. Patil Pratishthan's Dr. D. Y. Patil Institute of Engineering, <br />
          Management, and Research. Computer Society of India is a <br />
          body of computer professionals in India. 
        </p>
      </div>
      <div className={styles.joinBtn}>
        <p>Join</p>
      </div>
      <div>
        <p>
          600+ Members
        </p>
      </div>
    </div>
  </div>;
};

export default Title;

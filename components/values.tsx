import React, { FC } from 'react';
import styles from "../styles/Home.module.css"
// import valuesnippt from "./valuesnippt";
import { Container } from '@chakra-ui/react';


// const breakpoints = {
//   sm: '480px',
//   md: '600px',
//   lg: '960px',
//   xl: '1200px',
//   xxl: '1440px',
// }

const val = () => {
    return <h1>hello</h1>;
};

type Props = {};

// const valuesnippt: FC<Props> = () => (
//     <div>hello</div>
// );

const values = (props: Props) => {
    return <div className={styles.valuesPage}>
        <div className={styles.valuePageContent}>
            <div className={styles.title}>
                <b>OUR VALUES</b>
            </div>
            <div className={styles.values}>
                <div className={styles.valuesnippit}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1160/1160758.png" alt="" />
                    <div className={styles.content}>
                        <h1>Execution &gt; plan</h1>
                        <p>CSI-DYPIEMR is the Student Chapter of Computer Society of India in  Dr. D. Y. Patil Pratishthan's Dr. D. Y. Patil Institute of Engineering, Management, and Research. Computer Society of India is a body of computer professionals in India. </p>
                    </div>
                </div>
                <div className={styles.valuesnippit}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1769/1769090.png" alt="" />
                    <div className={styles.content}>
                        <h1>Support Each Other</h1>
                        <p>CSI-DYPIEMR is the Student Chapter of Computer Society of India in  Dr. D. Y. Patil Pratishthan's Dr. D. Y. Patil Institute of Engineering, Management, and Research. Computer Society of India is a body of computer professionals in India. </p>
                    </div>
                </div>
            </div>
            <div className={styles.valuepart}></div>
            <div className={styles.values}>
                <div className={styles.valuesnippit}>
                    <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="" />
                    <div className={styles.content}>
                        <h1>Strong Passion</h1>
                        <p>CSI-DYPIEMR is the Student Chapter of Computer Society of India in  Dr. D. Y. Patil Pratishthan's Dr. D. Y. Patil Institute of Engineering, Management, and Research. Computer Society of India is a body of computer professionals in India. </p>
                    </div>
                </div>
                <div className={styles.valuesnippit}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2963/2963933.png" alt="" />
                    <div className={styles.content}>
                        <h1>Enjoy Learning</h1>
                        <p>CSI-DYPIEMR is the Student Chapter of Computer Society of India in  Dr. D. Y. Patil Pratishthan's Dr. D. Y. Patil Institute of Engineering, Management, and Research. Computer Society of India is a body of computer professionals in India. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default values;

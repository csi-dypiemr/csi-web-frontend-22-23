import React from 'react';
import { Container, Text, Image } from '@chakra-ui/react';

// const breakpoints = {
//   sm: '480px',
//   md: '600px',
//   lg: '960px',
//   xl: '1200px',
//   xxl: '1440px',
// }

type Props = {};

const Footer = (props: Props) => {
  return <div style={{ display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'baseline',
  gap: 'auto',
  marginTop: '4em',
  marginBottom: '5em' }}>
    <div style={{
      display: 'flex'
    }}>
      <Image
        style={{
          width: '3em',
          height: '3em',
          marginLeft: '1em'
        }}
        src="https://www.acpce.org/en/wp-content/uploads/2017/06/csi-logo.png"
      ></Image>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '1em'
      }}>
        <Text style={{
          fontSize: '1em',
          fontWeight: 'bold'
        }}>
          Computer Society of India
          <br /> D. Y. Patil Institute of Engineering, Management and Research
        </Text>
      </div>
    </div>
    <div style={{
      textDecoration: 'none',
      display:'flex',
      gap: '1em'
    }}>
      <a href="#">Home</a>
      <a href="#">Event</a>
      <a href="#">Team</a>
      <a href="#">About</a>
    </div>
    <div style={{
      display:'flex',
      gap: '1em'
    }}>
      <img src="https://cdn-icons-png.flaticon.com/128/717/717392.png" alt="" style={{ width:'1.5em', height: '1.5em' }}/>
      <img src="https://cdn-icons-png.flaticon.com/128/160/160154.png" alt="" style={{ width:'1.5em', height: '1.5em' }}/>
      <img src="https://cdn-icons-png.flaticon.com/128/1236/1236849.png" alt="" style={{ width:'1.5em', height: '1.5em' }}/>
      <img src="https://cdn-icons-png.flaticon.com/128/739/739257.png" alt="" style={{ width:'1.5em', height: '1.5em' }}/>
    </div>


  </div>;
};

export default Footer;
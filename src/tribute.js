import React from 'react';
import TributeInfo from './tribute_info';
function Tribute() {
  return (
    <>
      <main id='main'>
        <div id='title'>
          <h2>Mahatma Gandhi</h2>
        </div>
        <div id='img-div'>
          <img
            id='image'
            src='https://www.mkgandhi.org/images/logo-header.jpg'
            alt='mahatma gandhi'
          />
          <div id='img-caption'>
            <h4>My life is my message</h4>
          </div>
        </div>
        <TributeInfo />
        <div id='a-link'>
          <h4>
            If you have time, you should read more about this incredible human
            being,
            <a
              id='tribute-link'
              href='https://www.mkgandhi.org/tributes.htm'
              target='_blank'
            >
              click here.
            </a>
          </h4>
        </div>
      </main>
    </>
  );
}

export default Tribute;

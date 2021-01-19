import React from 'react';
import data from './data';
console.log(data);
function TributeInfo() {
  return (
    <div>
      {data.map((item, index) => {
        const { url, name, title, position, content } = item;
        return (
          <div key={index} id='tribute-info'>
            <div>
              <img src={url} alt={name} />
              <h4>{name}</h4>
              <p>{position}</p>
            </div>
            <div className='content'>
              <h4>{title}</h4>
              <p>{content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TributeInfo;

import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    
    
    <div>
      <div className='white f3'>
        {`${name},  your current entry countnumber is...`}
      </div>
      
      <div className='black f1 fw8'>
        {entries}
      </div>
    </div>
    
  );
}

export default Rank;
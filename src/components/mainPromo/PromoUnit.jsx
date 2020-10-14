import React from 'react';

const PromoUnit = (props) => {
  return (
    <div
      className='promo-unit-container'
      style={{
        backgroundColor:
          props.activeIndex === props.index ? 'rgba(0, 0, 0, 0.5)' : '',
      }}
      onClick={() => props.setActiveIndex(props.index)}
    >
      <img className='promo-unit-img' src={props.promo.thumbnail} alt='' />
      <div className='promo-unit-text'>
        <h3>{props.promo.title}</h3>
        <p>{props.promo.text}</p>
      </div>
    </div>
  );
};

export default PromoUnit;

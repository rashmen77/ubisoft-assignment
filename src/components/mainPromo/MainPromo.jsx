import React, { useState } from 'react';
import './mainPromo.css';
import EzioAltiar from '../../images/mainPromo/ezioAltiar.png';
import EzioOnCliff from '../../images/mainPromo/onCliff.png';
import EzioKillPose from '../../images/mainPromo/killPose.png';
import EzioAltiarThumbnail from '../../images/mainPromo/ezioAltiar_thumbnail.png';
import EzioOnCliffThumbnail from '../../images/mainPromo/onCliff_thumbnail.png';
import EzioKillPoseThumbnail from '../../images/mainPromo/killPose_thumbnail.png';
import useInterval from './useInterval';
import PromoUnit from './PromoUnit';

const MainPromo = () => {
  const promos = [
    {
      title: 'Assassin Creed',
      text:
        'The Truth is written in blood all is forgotten but never seen. Assasins will come to those that disrespect our laws.',
      image: EzioAltiar,
      thumbnail: EzioAltiarThumbnail,
    },
    {
      title: 'Assassin Creed',
      text:
        'The Truth is written in blood all is forgotten but never seen. Assasins will come to those that disrespect our laws.',
      image: EzioOnCliff,
      thumbnail: EzioOnCliffThumbnail,
    },
    {
      title: 'Assassin Creed',
      text:
        'The Truth is written in blood all is forgotten but never seen. Assasins will come to those that disrespect our laws.',
      image: EzioKillPose,
      thumbnail: EzioKillPoseThumbnail,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useInterval(() => {
    let count = activeIndex;
    count++;
    if (activeIndex >= promos.length - 1) {
      count = 0;
    }
    setActiveIndex(count);
  }, 6000);

  return (
    <div
      className='mainPromo-container'
      style={{ backgroundImage: 'url(' + promos[activeIndex].image + ')' }}
    >
      <div className='promo-units-container'>
        {promos.map((promo, index) => {
          return (
            <PromoUnit
              key={index}
              activeIndex={activeIndex}
              index={index}
              promo={promo}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainPromo;

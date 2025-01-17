import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import svgSuite from '../../assets/images/svg/suite.svg';
import svgBathroom from '../../assets/images/svg/bathroom.svg';
import svgBedroom from '../../assets/images/svg/bedroom.svg';
import svgGarage from '../../assets/images/svg/garage.svg';
import svgRuler from '../../assets/images/svg/ruler.svg';

const Case = (props) => {
  const {
    id,
    min_price,
    min_bedrooms,
    min_area,
    min_suites,
    min_parking,
    min_bathrooms,
    status,
    finality,
    address,
    default_image,
  } = props.data;

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const picStyle = {
    backgroundImage:
      `linear-gradient(to top, rgba(16,16,16,0.8), rgba(255, 255, 255, 0), rgba(16,16,16,0.2)),
      url("${default_image['520x280']}")`,
    backgroundSize: '130%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '0.3rem',
    height: '240px',
  };

  return (
    <Link to={`/profiles/${id}`}>
      <div className="case">
        <div
          style={picStyle}
          className="display-img"
        >
          <div className="price queue column end">
            <p>{formatter.format(min_price)}</p>
          </div>
        </div>
        <div>
          <div className="finality">
            <p>{finality}</p>
          </div>
          <div className="queue between">
            <div className="info">
              <span className="address-main">
                {address.city}
                ,
                {' '}
                {address.state}
                {' '}
              </span>
              <br />
              <span className="address-secondary">
                {address.street_type}
                {' '}
                {address.street}
                {' '}
                {address.area}
                ,
                {' '}
              </span>
            </div>
            <div className="status">
              <div>
                {status}
              </div>
            </div>
          </div>
        </div>
        <div className="queue around">
          <div queue column>
            <img src={svgBedroom} alt="bed-icon" />
            <div className="queue">{min_bedrooms}</div>
          </div>
          <div>
            <img src={svgRuler} alt="ruler-icon" />
            <div className="queue">{`${min_area}m²`}</div>
          </div>
          <div>
            <img src={svgGarage} alt="garage-icon" />
            <div className="queue">{min_parking}</div>
          </div>
          <div>
            <img src={svgBathroom} alt="bathroom-icon" />
            <div className="queue">{min_bathrooms}</div>
          </div>
          <div>
            <img src={svgSuite} alt="suites-icon" />
            <div className="queue">{min_suites}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Case;

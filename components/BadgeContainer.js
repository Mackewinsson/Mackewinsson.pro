import React from 'react';
import { Badge } from 'react-bootstrap';

const BadgeContainer = ({ technologies }) => {
  let badgeColor;
  let dice;
  let badgeColors = ['primary', 'success', 'warning', 'info', 'danger'];
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const technologiesBadges = technologies.map((el, i) => {
    if (badgeColor === undefined) {
      dice = getRandomInt(0, badgeColors.length);
      badgeColor = badgeColors[dice];
    } else {
      dice = getRandomInt(0, badgeColors.length);
      badgeColor = badgeColors[dice];
    }
    return (
      <Badge pill variant={badgeColor} className="ml-1 mb-3" key={i}>
        {el}
      </Badge>
    );
  });
  return <div>{technologiesBadges}</div>;
};

export default BadgeContainer;

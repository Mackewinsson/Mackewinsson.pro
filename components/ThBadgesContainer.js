import React from 'react';
import { useState, useEffect } from 'react';
import ThBadge from './ThBadge';
import { Row } from 'react-bootstrap';

const ThBadgesContainer = () => {
  let [data, setData] = useState([]);

  const fetchBadges = async () => {
    try {
      const fetchData = await fetch(
        'https://teamtreehouse.com/mackewinsson.json'
      );
      const { badges } = await fetchData.json();
      setData(badges);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBadges();
  }, []);

  const badgesCards = data.map((el) => {
    return <ThBadge key={el.id} name={el.name} icon_url={el.icon_url} />;
  });

  return (
    <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
      {badgesCards}
    </Row>
  );
};

export default ThBadgesContainer;

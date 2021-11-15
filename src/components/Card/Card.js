import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import {
  Container, FlagImage, Content, Name, Category, CategoryName,
} from './Card.styles';

const getCategories = (country) => [
  { name: 'Population', value: country.population },
  { name: 'Region', value: country.region },
  { name: 'Capital', value: country.capital },
];

const Card = ({ country }) => {
  const context = useContext(AppContext);
  const { data: { isDarkThemeActive } } = context;
  return (
    <Container isDarkThemeActive={isDarkThemeActive} country={country}>
      {
        country && (
        <Link to={`/country/${country.alpha3Code}`}>
          <FlagImage style={{ backgroundImage: `url(${country.flag})` }} />
          <Content isDarkThemeActive={isDarkThemeActive}>
            <Name>{country.name}</Name>
            {
            getCategories(country).map((category) => (
              <Category key={`country-${category.name}`}>
                <CategoryName>
                  {category.name}
                  :
                </CategoryName>
                {category.value.toLocaleString()}
              </Category>
            ))
          }
          </Content>
        </Link>
        )
      }
    </Container>
  );
};

Card.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    alpha3Code: PropTypes.string,
    population: PropTypes.number,
  }),
};

Card.defaultProps = {
  country: null,
};

export default Card;

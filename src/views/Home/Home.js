import React, { useContext } from 'react';
import {
  HomeContainer, TopBar, CountriesContainer,
} from './Home.styles';
import AppContext from '../../context/AppContext';
import {
  Card, Loading, Search, Filter,
} from '../../components';

const Home = () => {
  const context = useContext(AppContext);
  const { data: { countries, loading } } = context;

  if (loading) return <Loading />;

  return (
    <HomeContainer>
      <TopBar>
        <Search />
        <Filter />
      </TopBar>
      <CountriesContainer>
        {countries.map((country) => (
          <Card country={country} key={`country-${country.alpha3Code}`} />
        ))}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CountriesContainer>
    </HomeContainer>
  );
};

export default Home;

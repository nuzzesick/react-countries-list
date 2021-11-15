import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Loading } from '../../components';
import { getCountryByCode, getBordersCountries } from '../../services';
import { AppContext } from '../../context';
import { getDetails } from './Country.data';
import {
  Container,
  BackButton,
  BackIcon,
  Content,
  CountryImageContainer,
  CountryImage,
  CountryInfo,
  TopInfo,
  CountryName,
  CountryDetails,
  Details,
  Detail,
  BordersCountries,
  BorderCountry,
} from './Country.styles';

const Country = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [countryDetails, setCountryDetails] = useState([]);
  const [bordersCountries, setBordersCountries] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const context = useContext(AppContext);
  const { data: { isDarkThemeActive } } = context;

  const getCountry = async () => {
    try {
      const data = await getCountryByCode(code);
      setCountry(data);
      if (data.status === 400) enqueueSnackbar('This country does not exists!');
      else {
        setCountryDetails(getDetails(data));
        setBordersCountries(await getBordersCountries(data.borders));
      }
    } catch (error) {
      enqueueSnackbar('An unexpected error ocurred!');
    }
  };

  useEffect(() => {
    if (code) getCountry();
  }, [code]);

  if (!country) return <Loading />;

  if (country.status === 400) return null;

  return (
    <Container>
      <Link to="/">
        <BackButton isDarkThemeActive={isDarkThemeActive}>
          <BackIcon isDarkThemeActive={isDarkThemeActive} />
          Back
        </BackButton>
      </Link>
      <Content>
        <CountryImageContainer>
          <CountryImage style={{ backgroundImage: `url(${country.flag})` }} />
        </CountryImageContainer>
        <CountryInfo>
          <TopInfo>
            <CountryName isDarkThemeActive={isDarkThemeActive}>{country.name}</CountryName>
            <CountryDetails>
              <Details>
                {
                  countryDetails.length && countryDetails[0].map((detail) => (
                    <Detail isDarkThemeActive={isDarkThemeActive} key={`country-detail-${detail.id}`}>
                      <b>
                        {detail.name}
                        :&nbsp;
                      </b>
                      {detail.value}
                    </Detail>
                  ))
                }
              </Details>
              <Details>
                {
                  countryDetails.length && countryDetails[1].map((detail, index) => (
                    <Detail isDarkThemeActive={isDarkThemeActive} key={`country-detail-${detail.id}`}>
                      <b>
                        {detail.name}
                        :&nbsp;
                      </b>
                      {index === 0 ? detail.value : detail.value.map((e, i) => (
                        i + 1 !== detail.value.length ? `${e.name}, ` : e.name
                      ))}
                    </Detail>
                  ))
                }
              </Details>
            </CountryDetails>
            {
              bordersCountries.length > 0 && (
                <BordersCountries isDarkThemeActive={isDarkThemeActive}>
                  <b>Borders Countries: &nbsp;</b>
                  {
                bordersCountries.map((el) => (
                  <Link to={`/country/${el.alpha3Code}`} key={`/country/${el.alpha3Code}`}>
                    <BorderCountry isDarkThemeActive={isDarkThemeActive}>{el.name}</BorderCountry>
                  </Link>
                ))
              }
                </BordersCountries>
              )
            }
          </TopInfo>
        </CountryInfo>
      </Content>
    </Container>
  );
};

export default Country;

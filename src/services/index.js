import { get } from './fetch';

const API_URL = 'https://restcountries.eu/rest/v2';

export const getAllCountries = () => (
  get(`${API_URL}/all`)
);

export const getCountryByCode = (code) => (
  get(`${API_URL}/alpha/${code}`)
);

export const getBordersCountries = async (codes) => Promise.all(codes.map(
  async (item) => getCountryByCode(item),
));

export const getDetails = (country) => (
  [
    [
      {
        id: 1,
        name: 'Native Name',
        value: country.nativeName,
      },
      {
        id: 2,
        name: 'Population',
        value: country.population,
      },
      {
        id: 3,
        name: 'Region',
        value: country.region,
      },
      {
        id: 4,
        name: 'Sub Region',
        value: country.subregion,
      },
      {
        id: 5,
        name: 'Capital',
        value: country.capital,
      },
    ],
    [
      {
        id: 6,
        name: 'Top Level Domain',
        value: country.topLevelDomain,
      },
      {
        id: 7,
        name: 'Currencies',
        value: country.currencies,
      },
      {
        id: 8,
        name: 'Languages',
        value: country.languages,
      },
    ],
  ]
);

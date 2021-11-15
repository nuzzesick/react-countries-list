import React, { useContext, useState } from 'react';
import { AppContext } from '../../context';
import {
  Button, Container, Content, ArrowIcon,
} from './Filter.styles';
import { regions } from '../../data';

const Filter = () => {
  const context = useContext(AppContext);
  const { data: { isDarkThemeActive, regionSelected }, actions: { handleRegion } } = context;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Container type="button" onClick={handleOpen} isDarkThemeActive={isDarkThemeActive}>
      { !regionSelected ? 'Filter by Region' : regionSelected }
      <ArrowIcon isDarkThemeActive={isDarkThemeActive} open={open} />
      { open && (
        <Content isDarkThemeActive={isDarkThemeActive} regionSelected={regionSelected}>
          {
            regions.map((region) => (
              <Button
                type="button"
                onClick={() => { handleRegion(region.name); }}
                key={`region-${region.id}`}
                isDarkThemeActive={isDarkThemeActive}
              >
                {region.name}
              </Button>
            ))
          }
          {
            regionSelected && (
            <Button
              type="button"
              onClick={() => { handleRegion(''); }}
              isDarkThemeActive={isDarkThemeActive}
            >
              Clear selection
            </Button>
            )
          }
        </Content>
      )}
    </Container>
  );
};

export default Filter;

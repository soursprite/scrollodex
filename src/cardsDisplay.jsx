import React from 'react';
import './cardsDisplay.scss';

import ExampleCard from './cards/exampleCard/exampleCard';
import IndigoCard from "./cards/indigoCard/indigoCard";
import KristiCard from './cards/kristiCard/kristiCard';
import PalesaCard from './cards/palesaCard/palesaCard';

function CardsDisplay() {
  return (
    <div className="cardholder">
      <div>
        <ExampleCard />
      </div>

      <div>
        <IndigoCard />
      </div>

      <div>
        <PalesaCard />
      </div>

  
    </div>
  );
}

export default CardsDisplay;

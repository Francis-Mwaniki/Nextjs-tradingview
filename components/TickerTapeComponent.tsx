// TickerTapeComponent.tsx

import React from 'react';
import dynamic from 'next/dynamic';
import { ColorTheme } from 'react-ts-tradingview-widgets';

const TickerTape = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.TickerTape),
  {
    ssr: false,
  }
);

interface TickerTapeProps {
  colorTheme: ColorTheme;
  // Add other required props based on the component's specification
}

const TickerTapeComponent: React.FC<TickerTapeProps> = ({ colorTheme }) => {
  return <TickerTape colorTheme={colorTheme} />;
};

export default TickerTapeComponent;

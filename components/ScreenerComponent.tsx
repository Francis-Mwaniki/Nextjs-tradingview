// ScreenerComponent.tsx

import React from 'react';
import dynamic from 'next/dynamic';
import { ColorTheme } from 'react-ts-tradingview-widgets';
const Screener = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.Screener),
  {
    ssr: false,
  }
);

interface ScreenerProps {
  colorTheme: ColorTheme;
  width: string;
  height: number;
  // Add other required props based on the component's specification
}

const ScreenerComponent: React.FC<ScreenerProps> = ({ colorTheme, width, height }) => {
  return <Screener colorTheme={colorTheme} width={width} height={height} />;
};

export default ScreenerComponent;

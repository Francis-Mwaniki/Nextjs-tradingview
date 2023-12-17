// MarketOverviewComponent.tsx

import React from 'react';
import dynamic from 'next/dynamic';
import { ColorTheme } from 'react-ts-tradingview-widgets';
const MarketOverview = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.MarketOverview),
  {
    ssr: false,
  }
);

interface MarketOverviewProps {
  colorTheme: ColorTheme;
  height: number;
  width: string;
  showFloatingTooltip: boolean;
  // Add other required props based on the component's specification
}

const MarketOverviewComponent: React.FC<MarketOverviewProps> = ({
  colorTheme,
  height,
  width,
  showFloatingTooltip,
  // Other props
}) => {
  return (
    <MarketOverview
      colorTheme={colorTheme}
      height={height}
      width={width}
      showFloatingTooltip={showFloatingTooltip}
    />
  );
};

export default MarketOverviewComponent;

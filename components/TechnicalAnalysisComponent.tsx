// TechnicalAnalysisComponent.tsx

import React from 'react';
import dynamic from 'next/dynamic';
import { ColorTheme } from 'react-ts-tradingview-widgets';
const TechnicalAnalysis = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.TechnicalAnalysis),
  {
    ssr: false,
  }
);

interface TechnicalAnalysisProps {
   colorTheme: ColorTheme;
  width: string;
  // Add other required props based on the component's specification
}

const TechnicalAnalysisComponent: React.FC<TechnicalAnalysisProps> = ({
  colorTheme,
  width,
  // Other props
}) => {
  return <TechnicalAnalysis colorTheme={colorTheme} width={width} />;
};

export default TechnicalAnalysisComponent;

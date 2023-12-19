"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Card, Divider } from "@tremor/react";
import TechnicalAnalysisComponent from '@/components/TechnicalAnalysisComponent';
import MarketOverviewComponent from '@/components/MarketOverviewComponent';
import TickerTapeComponent from '@/components/TickerTapeComponent';
import ScreenerComponent from '@/components/ScreenerComponent';
import Navbar from '@/components/Navbar';
import DashboardNav from '@/components/UInterfaces/DashboardNav';
import Inputs from '@/components/UInterfaces/Inputs';
// interface Inputs {
//   amount: number;
//   trailingBuy: number;
//   trailingStopLoss: number;
//   takeProfit: number;
//   quantity: number;
//   setAmount: (amount: number) => void;
//   setTrailingBuy: (trailingBuy: number) => void;
//   setTrailingStopLoss: (trailingStopLoss: number) => void;
//   setTakeProfit: (takeProfit: number) => void;
//   setQuantity: (quantity: number) => void;
// }

const AdvancedRealTimeChart = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

const TradingView = () => {
  const [showChart, setShowChart] = useState(true);
  const [showTechnicalAnalysis, setShowTechnicalAnalysis] = useState(false);
  const [showMarketOverview, setShowMarketOverview] = useState(false);
  const [showScreener, setShowScreener] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmartTrade, setIsSmartTrade] = useState(false);
  const [amount, setAmount] = useState<number | null>(null);
  const [trailingBuy, setTrailingBuy] =  useState<number | null>(null);
  const [trailingStopLoss, setTrailingStopLoss] = useState<number | null>(null);
  const [takeProfit, setTakeProfit] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number | null>(null);
  const [sequence, setSequence] = useState<number | null>(null);
  const [stopLoss, setStopLoss] = useState<number | null>(null);



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const showOnlyChart=()=>{
    setShowChart(true)
    setShowScreener(false)
    setShowTechnicalAnalysis(false)
    setShowMarketOverview(false)
    setIsSmartTrade(false)
  }
  const showOnlyTechnicalAnalysis=()=>{
    setShowChart(false)
    setShowScreener(false)
    setShowTechnicalAnalysis(true)
    setShowMarketOverview(false)
    setIsSmartTrade(false)
  }
  const showOnlyMarketOverview=()=>{
    setShowChart(false)
    setShowScreener(false)
    setShowTechnicalAnalysis(false)
    setShowMarketOverview(true)
    setIsSmartTrade(false)
  }
  const showOnlyScreener=()=>{
    setShowChart(false)
    setShowScreener(true)
    setShowTechnicalAnalysis(false)
    setShowMarketOverview(false)
    setIsSmartTrade(false)
  }
  const showOnlySmartTrade=()=>{
    setIsSmartTrade(true)
    setShowMarketOverview(false)
    setShowScreener(false)
    setShowTechnicalAnalysis(false)
    setShowChart(false)
    
  }

  return (
    <>
    {/* <Navbar/> */}
    <div className='my-2' />
    <DashboardNav />
    <div className='flex'>
      {/* Sidebar */}
      <div className={`sm:w-1/4 w-3/4  h-auto p-4 ${isSidebarOpen ? 'flex flex-col justify-start items-center absolute left-0 inset-y-0 z-10 bg-gray-200 h-auto' : 'hidden md:block '}`} onClick={closeSidebar}>
        <h2 className='text-lg mb-2'>Dashboard</h2>
        <div className='space-y-2'>
        <button onClick={showOnlyChart} className='bg-slate-900 sm:bg-gray-100 sm:text-black sm:hover:bg-gray-400 hover:bg-slate-700 text-white py-2 px-4 rounded-lg text-sm font-light flex justify-center justify-self-center items-center w-full'>
            {showChart ? 'Hide Chart' : 'Show Chart'}
          </button>
          <button onClick={showOnlyTechnicalAnalysis} className='bg-slate-900 sm:bg-gray-100 sm:text-black sm:hover:bg-gray-400 hover:bg-slate-700 text-white py-2 px-4 rounded-lg text-sm font-light flex justify-center justify-self-center items-center w-full'>
            {showTechnicalAnalysis ? 'Hide Technical Analysis' : 'Show Technical Analysis'}
          </button>
          <button onClick={showOnlyMarketOverview} className='bg-slate-900 sm:bg-gray-100 sm:text-black sm:hover:bg-gray-400 hover:bg-slate-700 text-white py-2 px-4 rounded-lg text-sm font-light flex justify-center justify-self-center items-center w-full'>
            {showMarketOverview ? 'Hide Market Overview' : 'Show Market Overview'}
          </button>
          <button onClick={showOnlyScreener} className='bg-slate-900 sm:bg-gray-100 sm:text-black sm:hover:bg-gray-400 hover:bg-slate-700 text-white py-2 px-4 rounded-lg text-sm font-light flex justify-center justify-self-center items-center w-full'>
            {showScreener ? 'Hide Screener' : 'Show Screener'}
          </button>
          {/* smart trading */}
          <button className='bg-slate-900 sm:bg-gray-100 sm:text-black sm:hover:bg-gray-400 hover:bg-slate-700 text-white py-2 px-4 rounded-lg text-sm font-light flex justify-center justify-self-center items-center w-full'
          onClick={showOnlySmartTrade}
          >
            Smart Trading
          </button>
          
        </div>
      </div>

      {/* Content Area */}
      <div className='md:w-3/4 p-4 relative'>
        {/* Mobile Toggle Button */}
        <div className='md:hidden text-right absolute right-0 top-2 m-1 z-10'>
          <button className='block text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none 
            transition duration-150 ease-in-out 
          ' onClick={toggleSidebar}>
           {
              isSidebarOpen ? (
                <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M19.414 4.586a2 2 0 00-2.828 0L12 9.172 7.414 4.586a2 2 0 10-2.828 2.828L9.172 12l-4.586 4.586a2 2 0 102.828 2.828L12 14.828l4.586 4.586a2 2 0 102.828-2.828L14.828 12l4.586-4.586a2 2 0 000-2.828z'
                  />
                </svg>
              ) : (
                <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z'
                  />
                </svg>
              )
           }
          </button>
        </div>

        {/* Content */}
        <Divider className='my-4' />
        <TickerTapeComponent colorTheme='light' />

        {showChart && (
          <Card className='w-full mx-auto my-4 p-4'>
            <AdvancedRealTimeChart
              theme='light'
              symbol='NASDAQ:AAPL'
              interval='D'
              timezone='Etc/UTC'
              locale='en'
              toolbar_bg='#f1f3f6'
              enable_publishing={false}
              allow_symbol_change={true}
              container_id='tradingview_9a0d6'
              width='100%'
              height='600'
            />
          </Card>
        )}

        {/* Other components */}
        {showTechnicalAnalysis && (
          <Card className='w-full mx-auto my-4 p-4'>
            <TechnicalAnalysisComponent colorTheme='light' width='100%' />
          </Card>
        )}

        {showMarketOverview && (
          <Card className='w-full mx-auto my-4 p-4'>
            <MarketOverviewComponent colorTheme='light' height={400} width='100%' showFloatingTooltip={true} />
          </Card>
        )}

        {showScreener && (
          <Card className='w-full mx-auto my-4 p-4'>
            <ScreenerComponent colorTheme='light' width='100%' height={600} />
          </Card>
        )}

        {/* Smart Trade */}
        {
          isSmartTrade && (
            <Inputs  amount={amount} trailingBuy={trailingBuy} trailingStopLoss={trailingStopLoss} takeProfit={takeProfit} quantity={quantity} setAmount={setAmount} setTrailingBuy={setTrailingBuy} setTrailingStopLoss={setTrailingStopLoss} setTakeProfit={setTakeProfit} setQuantity={setQuantity} 
            sequence={sequence} setSequence={setSequence} stopLoss={stopLoss} setStopLoss={setStopLoss}
            />
          )
        }
      </div>
    </div>
    </>
    
  );
};

export default TradingView;

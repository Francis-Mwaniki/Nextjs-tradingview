import {Card, Flex, Subtitle, TextInput, Title } from "@tremor/react";
import CustomTextInput from "../layouts/Input";
/* 
Amount,trailing buy,trailing stop loss,take profit , quantity, sequence, stop-Loss
*/

interface Props {
    amount: number | null;
    trailingBuy: number | null;
    trailingStopLoss: number   | null;
    takeProfit: number | null;
    quantity: number | null;
    sequence: number | null;
    stopLoss: number | null;
    setAmount: (amount: number | null) => void;
    setTrailingBuy: (trailingBuy: number | null) => void;
    setTrailingStopLoss: (trailingStopLoss: number | null) => void;
    setTakeProfit: (takeProfit: number | null) => void;
    setQuantity: (quantity: number | null) => void;
    setSequence: (sequence: number | null) => void;
    setStopLoss: (stopLoss: number | null) => void;
}

const Inputs = ({
  amount,
  trailingBuy,
  trailingStopLoss,
  takeProfit,
  quantity,
  setAmount,
  setTrailingBuy,
  setTrailingStopLoss,
  setSequence,
    setStopLoss,
  setTakeProfit,
  setQuantity,
    sequence,
    stopLoss,
}: Props) => {
  return (
    <Card className=" max-w-sm p-4  rounded-xl shadow-md bg-white dark:bg-neutral-950 dark:text-neutral-50 mx-auto mt-3" >
      <Flex   className="  flex flex-col gap-y-4 ">
        <Title className="text-sm font-light">Smart Trade</Title>
      <div className=" mx-auto my-1 p-1 max-w-xs">
        <Subtitle className="text-sm font-light">Amount</Subtitle>
        <CustomTextInput type="number" value={amount} label="Amount" onChange={(e) => setAmount(Number(e.target.value))} />
        </div>

        <Title className="text-sm font-light">Activate Trailing</Title>
        <Flex className="mx-auto max-w-xs gap-2 ">
             <div className=" mx-auto my-1 p-1 max-w-xs">
              <Subtitle className="text-sm font-light">Trailing Buy</Subtitle>
        <CustomTextInput type="number" value={trailingBuy} label="Trailing Buy" onChange={(e) => setTrailingBuy(Number(e.target.value))} />
            </div>

            <div className=" mx-auto my-1 p-1 max-w-xs">
                 <Subtitle className="text-sm font-light">Trailing Stop Loss</Subtitle>
        <CustomTextInput type="number" value={trailingStopLoss} label="Trailing Stop Loss" onChange={(e) => setTrailingStopLoss(Number(e.target.value))} />
            </div>
         
        </Flex>
      

        <Title className="text-sm font-light">Take profit </Title>
      
       <Flex className="mx-auto max-w-xs gap-2">

            <div className=" mx-auto my-1 p-1 max-w-xs">
        <Subtitle className="text-sm font-light">Take Profit</Subtitle>
        <CustomTextInput type="number" value={takeProfit} label="Take Profit" onChange={(e) => setTakeProfit(Number(e.target.value))} />
        </div>
        <div className=" mx-auto my-1 p-1 max-w-xs">
            <Subtitle className="text-sm font-light">Quantity</Subtitle>
        <CustomTextInput type="number" value={quantity} label="Quantity" onChange={(e) => setQuantity(Number(e.target.value))} />
        </div>
       </Flex>

        <Title className="text-sm font-light">Stop Loss Targets</Title>
        <Flex className="mx-auto max-w-xs gap-2">
            <div className=" mx-auto my-1 p-1 max-w-xs">
        <Subtitle className="text-sm font-light">Sequence</Subtitle>
        <CustomTextInput type="number" value={sequence} label="Sequence" onChange={(e) => setSequence(Number(e.target.value))} />
        </div>
        <div className=" mx-auto my-1 p-1 max-w-xs">
            <Subtitle className="text-sm font-light">Stop Loss</Subtitle>
       <CustomTextInput type="number" value={stopLoss} label="Stop Loss" onChange={(e) => setStopLoss(Number(e.target.value))} />
        </div>
        </Flex>
        
      </Flex>
    </Card>
  );
};

export default Inputs;
      

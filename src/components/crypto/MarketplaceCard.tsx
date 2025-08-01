
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface MarketplaceCardProps {
  maker: string;
  date: string;
  time: string;
  type: 'buy' | 'sell';
  token: {
    icon: string;
    name: string;
  };
  priceProtection: string;
  marketPrice: string;
  orderPrice: string;
  amount: string;
  totalPrice: string;
}

export const MarketplaceCard: React.FC<MarketplaceCardProps> = ({
  maker,
  date,
  time,
  type,
  token,
  priceProtection,
  marketPrice,
  orderPrice,
  amount,
  totalPrice
}) => {
  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div>
          <p className="text-sm font-medium">{maker}</p>
          <p className="text-sm text-muted-foreground">{date} at {time}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          type === 'buy' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
        }`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <div className="flex items-center gap-3 mb-4">
          <img src={token.icon} alt={token.name} className="w-8 h-8" />
          <span className="font-medium">{token.name}</span>
        </div>

        <p className="text-sm mb-4">
          Price Protection: <span className="text-primary">{priceProtection}</span>
        </p>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Market Price</p>
            <p className="font-medium">{marketPrice}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Order Price</p>
            <p className="font-medium">{orderPrice}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Amount</p>
            <p className="font-medium">{amount}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/50">
          <span className="text-sm text-muted-foreground">Total Price</span>
          <span className="font-medium">{totalPrice}</span>
        </div>
      </CardContent>
    </Card>
  );
};

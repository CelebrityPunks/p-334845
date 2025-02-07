
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface CryptoCardProps {
  name: string;
  icon: string;
  marketPrice: string;
  change: {
    value: string;
    percentage: string;
  };
  averagePrice: string;
  deals: string;
  chartImage: string;
}

export const CryptoCard: React.FC<CryptoCardProps> = ({
  name,
  icon,
  marketPrice,
  change,
  averagePrice,
  deals,
  chartImage
}) => {
  const isPositive = !change.value.startsWith('-');

  return (
    <Card className="p-4 glass-card">
      <CardContent className="p-0">
        <div className="flex items-center gap-3 mb-4">
          <img src={icon} alt={name} className="w-8 h-8" />
          <span className="font-semibold text-lg">{name}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Market price</p>
              <p className="text-lg font-semibold">{marketPrice}</p>
            </div>
            <div className="mt-2">
              <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {change.value} ({change.percentage})
              </span>
            </div>
          </div>
          
          <div className="text-right">
            <img src={chartImage} alt="Price chart" className="w-full h-16" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border/50">
          <div>
            <p className="text-sm text-muted-foreground">Average order price</p>
            <p className="font-medium">{averagePrice}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Deals</p>
            <p className="font-medium">{deals}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

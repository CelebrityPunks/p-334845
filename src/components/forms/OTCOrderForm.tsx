
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export const OTCOrderForm = () => {
  return (
    <div className="glass-card rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Create OTC Order</h2>
        <div className="flex gap-4 mb-6">
          <Button variant="outline">
            Sell Token
          </Button>
          <Button variant="outline">
            Buy Token
          </Button>
        </div>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label>Select Token</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a token" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="btc">Bitcoin</SelectItem>
                <SelectItem value="eth">Ethereum</SelectItem>
                <SelectItem value="ada">Cardano</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Amount</Label>
            <Input type="number" placeholder="Enter amount" className="glass-input" />
          </div>

          <div>
            <Label>Trade Price per token</Label>
            <Input type="number" placeholder="Enter price" className="glass-input" />
          </div>

          <div>
            <Label>Trade Expiration</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Never Expires" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="never">Never Expires</SelectItem>
                <SelectItem value="1d">1 Day</SelectItem>
                <SelectItem value="1w">1 Week</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="pt-6 border-t border-border/50">
          <h3 className="font-medium mb-4">Price Protection</h3>
          <div className="flex items-center gap-2">
            <Switch id="price-protection" />
            <Label htmlFor="price-protection">
              Auto-cancel if market price drops below trade price by threshold
            </Label>
          </div>
        </div>

        <div className="pt-6 border-t border-border/50">
          <div className="flex justify-between mb-2">
            <span className="text-muted-foreground">You will get</span>
            <span className="font-medium">169.000 ₳</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-muted-foreground">Platform Fee (0.25%)</span>
            <span className="font-medium">0.422 ₳ (added)</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Total with Fee</span>
            <span>169.423 ₳</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Fee is only charged when trade is executed and refunded if cancelled
          </p>
        </div>

        <Button className="w-full" size="lg">
          Place OTC Order
        </Button>
      </form>
    </div>
  );
};

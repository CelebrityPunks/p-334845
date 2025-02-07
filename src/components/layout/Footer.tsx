import React from 'react';
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-primary">Chad</span>
              <span className="text-muted-foreground">Swap</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 All rights reserved.
            </p>
          </div>

          <div className="space-y-2">
            <a href="#" className="block text-sm hover:text-primary">Privacy Policy</a>
            <a href="#" className="block text-sm hover:text-primary">Security</a>
            <a href="#" className="block text-sm hover:text-primary">Risk Warnings</a>
          </div>

          <div className="space-y-2">
            <a href="#" className="block text-sm hover:text-primary">Terms & Conditions</a>
            <a href="#" className="block text-sm hover:text-primary">Acceptable Use Policy</a>
            <a href="#" className="block text-sm hover:text-primary">Risk Disclaimer</a>
          </div>

          <div className="space-y-2">
            <a href="#" className="block text-sm hover:text-primary">Cookie Policy</a>
            <a href="#" className="block text-sm hover:text-primary">GDPR FAQ</a>
            <a href="#" className="block text-sm hover:text-primary">Newsletter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
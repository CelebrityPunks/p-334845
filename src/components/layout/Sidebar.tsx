import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  Info, 
  Settings, 
  LogOut 
} from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground h-screen flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/0bab94bd08a540a081d66c0dc0f4587d/1ffb9fdfe634949cd7da1172560e594637cf8de745a09ba6c7806ddc8efdb8b9" 
            alt="Logo" 
            className="w-8 h-8"
          />
          <h1 className="font-bold text-xl">OTC MARKET</h1>
        </div>

        <nav className="space-y-2">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3"
          >
            <Wallet className="w-5 h-5" />
            Wallet
          </Button>

          <div className="flex items-center gap-2 mt-4">
            <Button variant="ghost" size="icon">
              <Info className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </nav>
      </div>

      <div className="mt-auto p-6">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
};
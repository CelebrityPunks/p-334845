import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { CryptoCard } from '@/components/crypto/CryptoCard';
import { MarketplaceCard } from '@/components/crypto/MarketplaceCard';
import { OTCOrderForm } from '@/components/forms/OTCOrderForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Index = () => {
  const cryptoData = [
    {
      name: 'Bitcoin',
      icon: 'https://cdn.builder.io/api/v1/image/assets/0bab94bd08a540a081d66c0dc0f4587d/73b48af29ebb76e697b4ec2701e962491d084b44146480a743a14879ad50ce83',
      marketPrice: '$65,456.34',
      change: { value: '+0.027788', percentage: '+27.99%' },
      averagePrice: '$65,456.34',
      deals: '13,088',
      chartImage: 'https://cdn.builder.io/api/v1/image/assets/0bab94bd08a540a081d66c0dc0f4587d/5615ff19c982684b227f8deb869926609759a6684b8ccbbb2ef5be0432456ced'
    },
    // Add other crypto data here
  ];

  const marketplaceData: Array<{
    maker: string;
    date: string;
    time: string;
    type: 'buy' | 'sell';  // Explicitly define as union type
    token: {
      icon: string;
      name: string;
    };
    priceProtection: string;
    marketPrice: string;
    orderPrice: string;
    amount: string;
    totalPrice: string;
  }> = [
    {
      maker: '$Cardanowhale',
      date: '31.01.2022',
      time: '12:00 pm',
      type: 'buy' as const,  // Explicitly type as 'buy'
      token: {
        icon: 'https://cdn.builder.io/api/v1/image/assets/0bab94bd08a540a081d66c0dc0f4587d/2eb705451e515f9b5edc6196c763e8b6bdf63308e1619d2d5f6c86e7b8cd49a0',
        name: 'Lorsky'
      },
      priceProtection: '5%',
      marketPrice: '36.000₳',
      orderPrice: '38.000₳',
      amount: '54',
      totalPrice: '1238236.000₳'
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1">
        <div className="container mx-auto p-6">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0bab94bd08a540a081d66c0dc0f4587d/6fe0d6e00ce6f64420d6e8777439b9a8321e3d93d16293866711acf0c5f2c592"
                alt="Welcome"
                className="w-12 h-12"
              />
              <div>
                <h1 className="text-2xl font-bold">Welcome to the CHAD Swap</h1>
                <p className="text-gray-600">Cardano OTC Market</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-500">TOTAL WALLET BALANCE</span>
                <div className="space-x-2">
                  <Button variant="ghost" size="sm">Hide</Button>
                  <Button variant="ghost" size="sm">Show</Button>
                </div>
              </div>
              <div className="text-2xl font-bold">••••••••••••••</div>
              <div className="text-gray-500">•••••••••••</div>
            </div>
          </div>

          {/* Top Blast Offers Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">TOP BLAST OFFERS</h2>
              <Select defaultValue="50001+">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Choose price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50001+">50 001+</SelectItem>
                  <SelectItem value="10000-50000">10,000 - 50,000</SelectItem>
                  <SelectItem value="1000-10000">1,000 - 10,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cryptoData.map((crypto, index) => (
                <CryptoCard key={index} {...crypto} />
              ))}
            </div>
          </div>

          {/* OTC Order Form and Marketplace */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <OTCOrderForm />

            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">OTC MARKETPLACE</h2>
                <div className="flex gap-4 mb-4">
                  <Button variant="outline">All</Button>
                  <Button variant="outline">Sell</Button>
                  <Button variant="outline">Buy</Button>
                </div>
                <div className="relative">
                  <Input placeholder="Search" className="pl-10" />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-4">
                {marketplaceData.map((item, index) => (
                  <MarketplaceCard key={index} {...item} />
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {[1, 2, 3, 4, 5, '...', 12].map((page, index) => (
                  <Button
                    key={index}
                    variant={page === 1 ? 'default' : 'outline'}
                    size="sm"
                  >
                    {page}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Index;

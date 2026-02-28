/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import FinancialGraph from './components/FinancialGraph';
import ComparisonTable from './components/ComparisonTable';
import PlugAndPlay from './components/PlugAndPlay';
import SocialProof from './components/SocialProof';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-cadian-orange selection:text-white">
      <Header />
      <main>
        <Hero />
        <FinancialGraph />
        <ComparisonTable />
        <PlugAndPlay />
        <SocialProof />
      </main>
    </div>
  );
}

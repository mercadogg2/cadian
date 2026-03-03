/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import ComparisonTable from './components/ComparisonTable';
import PlugAndPlay from './components/PlugAndPlay';
import FormNotice from './components/FormNotice';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-cadian-orange selection:text-white">
      <Header />
      <main>
        <Hero />
        <ComparisonTable />
        <PlugAndPlay />
        <FormNotice />
      </main>
    </div>
  );
}

import React from 'react';

import PokemonForm from './components/Form/PokemonForm';
import { Header } from './components/ui';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-12 px-4 sm:px-6 lg:px-8">
      <Header className="mx-auto w-full max-w-md mb-8" />

      <PokemonForm />
    </div>
  );
}

export default App;

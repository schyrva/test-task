import React from "react";
import PokemonForm from "./components/Form/PokemonForm";
import lunaEdgeLogo from "./assets/logos/LunaEdgeLogo.svg";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md mb-8 flex justify-center bg-indigo-700 p-4 rounded-lg">
        <img src={lunaEdgeLogo} alt="Luna Edge Logo" className="h-8" />
      </div>
      <PokemonForm />
    </div>
  );
}

export default App;

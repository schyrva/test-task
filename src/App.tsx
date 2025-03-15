import React from "react";
import PokemonForm from "./components/Form/PokemonForm";
import lunaEdgeLogo from "./assets/logos/LunaEdgeLogo.svg";
import { Card } from "./components/ui";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-12 px-4 sm:px-6 lg:px-8">
      <Card className="mx-auto w-full max-w-md mb-8 flex justify-center bg-indigo-700 p-4">
        <img src={lunaEdgeLogo} alt="Luna Edge Logo" className="h-8" />
      </Card>

      <PokemonForm />
    </div>
  );
}

export default App;

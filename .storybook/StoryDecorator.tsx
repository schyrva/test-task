import React from "react";
import { Decorator } from "@storybook/react";

/**
 * A decorator that wraps stories in a consistent layout with Tailwind CSS styling
 */
export const StoryDecorator: Decorator = (Story, context) => {
  const isDarkMode = context.globals?.backgrounds?.value === "#1e293b";

  return (
    <div
      className={`p-6 min-h-[200px] rounded-lg transition-all duration-200 ease-in-out ${
        isDarkMode ? "bg-slate-800 text-white" : "bg-gray-50"
      }`}
    >
      <div className="mb-8">
        <img
          src="/src/assets/logos/LunaEdgeLogo.svg"
          alt="Luna Edge Logo"
          className={`h-8 transition-all duration-200 ${
            isDarkMode ? "invert" : "brightness-0"
          }`}
        />
      </div>
      <Story />
    </div>
  );
};

export default StoryDecorator;

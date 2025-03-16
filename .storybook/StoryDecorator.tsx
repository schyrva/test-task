import React from "react";
import { Decorator } from "@storybook/react";

/**
 * A decorator that wraps stories in a consistent layout with Tailwind CSS styling
 */
export const StoryDecorator: Decorator = (Story, context) => {
  const isDarkMode = context.globals?.backgrounds?.value === "#1e293b";

  return (
    <div
      className={`p-6 ${isDarkMode ? "bg-slate-800 text-white" : "bg-gray-50"}`}
      style={{
        minHeight: "200px",
        borderRadius: "8px",
        transition: "all 0.2s ease",
      }}
    >
      <div className="mb-8">
        <img
          src="/src/assets/logos/LunaEdgeLogo.svg"
          alt="Luna Edge Logo"
          className="h-8"
          style={{
            filter: isDarkMode ? "invert(1)" : "brightness(0)",
            transition: "filter 0.2s ease",
          }}
        />
      </div>
      <Story />
    </div>
  );
};

export default StoryDecorator;

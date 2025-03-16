# Pokemon Team Builder

A React application that allows users to create a team of Pokemon by filling out a form with their name and selecting their favorite Pokemon.

## Features

- Form with validation for first name and last name
- Select component with search/filter functionality
- Pokemon selection with sprites
- Modal to display the selected Pokemon team
- Full Storybook documentation
- Responsive UI that works on mobile, tablet, and desktop
- Accessibility features for better usability

## Tech Stack

- React + TypeScript
- Tailwind CSS for styling
- React Hook Form for form validation
- Axios for API requests
- HeroIcons for icons
- Storybook for component documentation
- ESLint + Prettier for code quality
- Vite for fast development and building

## Getting Started

### Prerequisites

- Node.js (v14+)
- Yarn package manager

### Installation

1. Install dependencies:

```bash
yarn install
```

2. Start the development server:

```bash
yarn dev
```

3. Open your browser and visit `http://localhost:5173/`

### Storybook

To run Storybook and view the component documentation:

```bash
yarn storybook
```

This will start Storybook at `http://localhost:6006/`

### Code Quality Tools

The project includes ESLint and Prettier for maintaining code quality:

```bash
# Run linting
yarn lint:src

# Fix linting issues
yarn lint:src:fix

# Format code with Prettier
yarn format

# Run both formatting and linting
yarn code:fix
```

## Project Structure

```
src/
├── assets/            # Images, logos, and design assets
├── components/        # Reusable UI components
│   ├── Form/          # Form-related components
│   ├── Input/         # Input components
│   ├── Modal/         # Modal components
│   ├── Select/        # Select component with stories
│   └── ui/            # Base UI components
├── constants/         # Application constants
├── hooks/             # Custom React hooks
├── stories/           # Storybook stories
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Requirements

- **Form Validation**:

  - First name and last name must be between 2-12 characters
  - Only letters (a-z, A-Z) are allowed
  - All fields are required

- **Pokemon Selection**:

  - Users must select exactly 4 Pokemon
  - The select component supports searching/filtering
  - Pokemon sprites are displayed in the selection

- **Team Display**:
  - After completing the form and selecting 4 Pokemon, users can view their team
  - A modal displays the user's name and their selected Pokemon

## Component Architecture

The application follows a component-based architecture with a focus on reusability:

- **UI Components**: Basic building blocks like Button, Badge, Card, and Typography
- **Form Components**: Validation inputs with error handling
- **Select Components**: Custom multi-select with search functionality
- **Modal Components**: Accessible modal windows with proper focus handling

## API

The application uses the [PokeAPI](https://pokeapi.co/) to fetch Pokemon data.

## Design System

The project implements a consistent design system with:

- Typography scales
- Color system
- Spacing system
- Component variants
- Consistent elevation (shadow) system

## Future Improvements

- Add unit and integration tests
- Implement state management for larger application needs
- Add internationalization support
- Enhance accessibility features

## Contact

**Author**: Stanislav Chyrva  
**Email**: stanislav.chyrva@gmail.com  
**LinkedIn**: [https://www.linkedin.com/in/stanislav-chyrva-3a3b24347/](https://www.linkedin.com/in/stanislav-chyrva-3a3b24347/)

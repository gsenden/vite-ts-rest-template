# Vite TS REST Template

A modern TypeScript REST API template using Vite for fast development and building. Built following the Hexagonal Architecture (also known as Ports and Adapters) pattern for maintainable and testable code.

## Dependencies

- [Express](https://expressjs.com/) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Jest](https://jestjs.io/) - Testing framework
- [neverthrow](https://github.com/supermacro/neverthrow) - Type-safe error handling

## Features

- ⚡️ Vite for blazing fast development and building
- 🔥 TypeScript for type safety
- 🏗️ Hexagonal Architecture for clean separation of concerns
- 📝 ESLint + Prettier for code formatting
- 🧪 Jest for testing
- 🚀 Express.js for REST API
- 📦 PNPM for fast, disk space efficient package management
- TypeScript support
- Express.js integration
- Jest testing setup
- Type-safe error handling with neverthrow
- REST API endpoints
- Dependency injection
- Repository pattern
- Service layer
- Controller layer

## Architecture

This project follows the Hexagonal Architecture pattern, which provides:

- 🎯 Clear separation between business logic and external concerns
- 🔌 Easy swapping of adapters (e.g., database, HTTP framework)
- 🧪 Highly testable code through dependency inversion
- 🛡️ Domain logic protection from external influence
- 🔄 Better adaptability to changing requirements

The codebase is organized into:

- `domain` - Core business logic and entities
- `application` - Use cases and ports (interfaces)
- `infrastructure` - Adapters and implementations

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- PNPM (`npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build

# Start production server
pnpm start
```

### Configuration

- `.editorconfig` - Editor configuration
- `.prettierrc` - Prettier configuration
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite configuration
- `jest.config.ts` - Jest configuration

## License

ISC

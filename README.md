# Pomodoro

A Tauri-based Pomodoro application built with React, TypeScript, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (v8.15.6 or higher)
- [Rust](https://www.rust-lang.org/tools/install) (required for Tauri)

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd pomodoro
```

2. Install dependencies using pnpm:
```bash
pnpm install
```

## Development

To start the development server:
```bash
pnpm dev
```

To start the Tauri development environment (with hot-reload):
```bash
pnpm tauri dev
```

## Building

To create a production build:
```bash
pnpm build
```

To build the Tauri application:
```bash
pnpm tauri build
```

## Project Structure

- `/src` - React application source code
- `/src-tauri` - Tauri backend code
- `/public` - Static assets
- `/src/components` - React components
- `/src/styles` - CSS and Tailwind styles

## Tech Stack

- Frontend:
  - React 18
  - TypeScript
  - Tailwind CSS
  - Vite
- Backend:
  - Tauri 2.0
  - Rust
# 🧮 EquationAI
 
A MathGPT-inspired math problem solver built with React, TypeScript, and Vite. Enter any math problem — from basic arithmetic to advanced equations — and get instant, step-by-step solutions powered by AI.
 
## Features
 
- AI-powered math problem solving
- Step-by-step solution breakdowns
- Supports a wide range of math topics (algebra, calculus, arithmetic, and more)
- Clean, chat-style interface for asking questions naturally
- Fast dev experience via Vite HMR
- Fully typed with TypeScript
 
## Roadmap
 
- [ ] Graph plotting for equations
- [ ] History of solved problems
- [ ] LaTeX rendering for formatted output
- [ ] Support for image/photo math input
 
## Tech Stack
 
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) with [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) (Oxc)
 
## Getting Started
 
```bash
git clone https://github.com/Aly26ssa/equation-ai.git
cd equation-ai
npm install
npm run dev
```
 
## ESLint Configuration
 
For production applications, enable type-aware lint rules:
 
```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // Or for stricter rules:
      // tseslint.configs.strictTypeChecked,
      // tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```
 
You can also add React-specific lint rules via [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom):
 
```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
 
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])

import { ExplanationFeatures } from "./explanation-components/explanation-features";

export function Main({ isDarkMode }) { 

  return (
    <main className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <ExplanationFeatures />
    </main>
  );
}

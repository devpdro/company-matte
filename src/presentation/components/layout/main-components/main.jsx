import { ExplanationFeatures } from "./explanation-components/explanation-features";
import { ExplanationFeaturesTwo } from "./explanation-components/explanation-features-two";

export function Main({ isDarkMode }) { 

  return (
    <main className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <ExplanationFeatures />
      <ExplanationFeaturesTwo />
    </main>
  );
}

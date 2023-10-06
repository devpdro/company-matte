import { ExplanationFeatures } from "./explanation-components/explanation-features";
import { ExplanationFeaturesTwo } from "./explanation-components/explanation-features-two";
import { WebsiteFeatures } from "./website-features/website-features";

export function Main({ isDarkMode }) { 

  return (
    <main className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <WebsiteFeatures />
      <ExplanationFeatures />
      <ExplanationFeaturesTwo />
    </main>
  );
}

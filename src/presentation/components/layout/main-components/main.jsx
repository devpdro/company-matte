import { ExplanationFeatures } from "./explanation-components/explanation-features";
import { ExplanationFeaturesTwo } from "./explanation-components/explanation-features-two";
import { Functionalities } from "./functionalities-components/functionalities";
import { FunctionalitiesTwo } from "./functionalities-components/functionalities-two";
import { WebsiteFeatures } from "./website-features-components/website-features";

export function Main({ isDarkMode }) { 

  return (
    <main className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <WebsiteFeatures />
      <Functionalities />
      <FunctionalitiesTwo />
      <ExplanationFeatures />
      <ExplanationFeaturesTwo />
    </main>
  );
}

import { ExplanationFeatures } from "presentation/components/layout/main-components/explanation-components/explanation-features";
import { OthersExplanationFeaturesTwo } from "presentation/components/layout/main-components/explanation-components/others-explanation-features";
import { Functionalities } from "presentation/components/layout/main-components/functionalities-components/functionalities";
import { WebsiteFeatures } from "presentation/components/layout/main-components/website-features-components/website-features";
import { Price } from "./price-component/price";

export function Main() { 

  return (
    <main>
      <WebsiteFeatures />
      <Functionalities />
      <Price />
      <ExplanationFeatures />
      <OthersExplanationFeaturesTwo />
    </main>
  );
}

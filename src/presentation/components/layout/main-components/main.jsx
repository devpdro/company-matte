import { Functionalities } from "presentation/components/layout/main-components/functionalities-components/functionalities";
import { WebsiteFeatures } from "presentation/components/layout/main-components/website-features-components/website-features";
import { Price } from "./price-component/price";
import { ConvinceHim } from "./convince-him-components/convince-him";

export function Main() { 

  return (
    <main>
      <WebsiteFeatures className="panel" data-color="white"/>
      <Functionalities className="panel" data-color="black"/>
      <ConvinceHim className="panel" data-color="purple"/>
      <Price className="panel" data-color="white"/>
    </main>
  );
}

import { Header } from "presentation/components/layout/header-components/header";
import { Main } from "presentation/components/layout/main-components/main";
import { Company } from "utils/fixed/company-components/company-text";
import { Email } from "utils/fixed/email-components/email-text";
import { WhatsAppButton } from "utils/fixed/whatsapp-components/whatsapp-button";

export function Home() {
	return (
    <main>
      <Header />
      <Main />

      <WhatsAppButton />
      <Email />
      <Company />
    </main>
  )
}
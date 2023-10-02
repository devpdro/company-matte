import { Header } from "presentation/components/layout/header-components/header";
import { Main } from "presentation/components/layout/main-components/main";
import { WhatsAppButton } from "utils/whatsapp-button-fixed";

export function Home() {
	return (
    <main>
      <Header />
      <Main />
      
      <WhatsAppButton />
    </main>
  )
}
import ClientFreeToolsPage from "./ClientFreeToolsPage";
import FreeToolsStructuredData from "./structure-data";

export const metadata = {
  title:
    "Free Affiliate Marketing Tools & Calculators | Super Affiliate System Pro",
  description:
    "Boost your affiliate marketing success with our suite of free tools and calculators. Estimate earnings, optimize campaigns, and make data-driven decisions at no cost.",
};

export default function FreeToolsPage() {
  return (
    <>
      <FreeToolsStructuredData />
      <ClientFreeToolsPage />
    </>
  );
}

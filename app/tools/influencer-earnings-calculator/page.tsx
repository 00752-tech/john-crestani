import ClientInfluencerEarningsCalculator from "@/app/influencer-marketing-tools/earnings-calculator/ClientInfluencerEarningsCalculator";
export const metadata = {
  title: "Influencer Earnings Calculator | Super Affiliate System Pro",
  description:
    "Estimate your potential earnings as an influencer based on your follower count, engagement rate, and sponsored post frequency. Free calculator by John Crestani.",
};

export default function InfluencerEarningsCalculatorPage() {
  return (
    <ClientInfluencerEarningsCalculator
      backUrl="/tools"
      pageUrlPath="/tools/influencer-earnings-calculator"
    />
  );
}

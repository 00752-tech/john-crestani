export const metadata = {
  title: "Influencer Earnings Calculator | Super Affiliate System Pro",
  description:
    "Estimate your potential earnings as an influencer based on follower count and engagement. Tool currently offline for upgrades.",
};

export default function InfluencerEarningsFallbackPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-16 bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Calculator Temporarily Offline</h1>
      <p className="text-gray-400 max-w-xl text-center">
        This tool is being rebuilt to offer better accuracy and features. Please check back soon.
      </p>
    </main>
  );
}

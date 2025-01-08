import ClientLinkCTROptimizer from "@/app/affiliate-marketing-tools/link-ctr-optimizer/ClientLinkCTROptimizer"
export const metadata = {
  title: 'Affiliate Link CTR Optimizer | Super Affiliate System Pro',
  description: 'Optimize your affiliate link click-through rates with our free calculator. Estimate CTR improvements based on link placement, anchor text, and content quality.',
}

export default function AffiliateLinkCTROptimizerPage() {
  return <ClientLinkCTROptimizer backUrl="/tools" pageUrlPath="/tools/affiliate-link-ctr-optimizer" />
}


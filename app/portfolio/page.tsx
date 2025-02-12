import AnimatedSectionCard from '@/components/shared/AnimatedSectionCard'

export default function PortfolioPage() {
  return (
    // pt-16 accounts for fixed navbar height
    <div className="min-h-screen pt-16">
      <AnimatedSectionCard id="portfolio" title="Portfolio">
        <p className="text-gray-300">
          Portfolio content coming soon...
        </p>
      </AnimatedSectionCard>
    </div>
  )
}
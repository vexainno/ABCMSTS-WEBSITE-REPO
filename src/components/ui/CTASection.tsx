import Button from "@/components/ui/Button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: { label: string; to: string };
  secondaryButton?: { label: string; to: string };
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-red-900 py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        <p className="mt-4 text-lg text-red-100 leading-relaxed">{description}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button to={primaryButton.to} variant="secondary" size="lg">
            {primaryButton.label}
          </Button>
          {secondaryButton && (
            <Button to={secondaryButton.to} variant="outline" size="lg">
              {secondaryButton.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

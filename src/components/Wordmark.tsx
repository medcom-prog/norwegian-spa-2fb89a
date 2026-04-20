type Variant = 'light' | 'dark';

export function Wordmark({
  variant = 'light',
  className = '',
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href="#top"
      className={`inline-flex items-end group ${className}`}
      aria-label="Norwegian Spa — tilbake til toppen"
    >
      <img
        src={variant === 'light' ? '/wordmark.svg' : '/wordmark-dark.svg'}
        alt="Norwegian Spa"
        className="h-8 md:h-9 w-auto"
        width={359}
        height={60}
      />
    </a>
  );
}

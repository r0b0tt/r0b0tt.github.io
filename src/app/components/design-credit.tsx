const DESIGN_CREDIT = {
  name: "Bartosz Jarocki",
  url: "https://github.com/BartoszJarocki/cv",
} as const;

export function DesignCredit() {
  return (
    <footer className="mx-auto mt-8 w-full max-w-2xl text-center">
      <p className="font-mono text-xs text-foreground/60 print:mt-4 print:text-[10px]">
        Inspired by{" "}
        <a
          className="underline underline-offset-2 hover:text-foreground"
          href={DESIGN_CREDIT.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {DESIGN_CREDIT.name}
        </a>
      </p>
    </footer>
  );
}

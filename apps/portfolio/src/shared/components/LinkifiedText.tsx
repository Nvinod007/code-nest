const URL_PATTERN = /(https?:\/\/[^\s,)]+)/g;

function isUrl(part: string) {
  return part.startsWith("http://") || part.startsWith("https://");
}

function formatUrlLabel(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

type LinkifiedTextProps = {
  text: string;
  className?: string;
};

/** Renders plain text with https URLs as styled links */
export default function LinkifiedText({ text, className = "" }: LinkifiedTextProps) {
  const parts = text.split(URL_PATTERN);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        isUrl(part) ? (
          <a
            key={`${part}-${index}`}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-400 underline decoration-blue-400/40 underline-offset-2 transition-colors hover:text-cyan-300 hover:decoration-cyan-300/60"
          >
            {formatUrlLabel(part)}
          </a>
        ) : (
          <span key={`${index}-text`}>{part}</span>
        )
      )}
    </span>
  );
}

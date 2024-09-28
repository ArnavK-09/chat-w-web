/**
 * Typewriter effect for text
 */
export default function TextContentForChat({ content }: { content: string }) {
  return (
    <span className="overflow-x-hidden break-words relative before:absolute before:inset-0 before:animate-typewriter before:bg-[#191a1a] after:absolute after:inset-0 after:w-[0.125em]">
      {content}
    </span>
  );
}

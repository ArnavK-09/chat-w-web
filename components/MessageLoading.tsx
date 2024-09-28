// Imports req
import { randomNumber } from "~/lib/utils";

/**
 * Placeholder for loading chat message values
 */
export default function MessageLoading() {
  return (
    <div role="loading" className="animate-pulse select-none">
      {new Array(5).fill(0).map(() => (
        <div
          key={`${randomNumber(0, 18)}-${randomNumber(0, 69)}-${randomNumber(0, 234)}`}
          style={{
            width: `${randomNumber(70, 95)}%`,
          }}
          className={`h-4 rounded-sm bg-[#202222] mb-4`}
        ></div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// Imports
import React from "react";
import MessageLoading from "~/components/MessageLoading";
import TextContentForChat from "~/components/TextContentForChat";

/**
 * Component to display result of particular prompt or query
 */
export default function QueryResult({
  title,
  content,
  children,
}: {
  content: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="py-7 px-4">
      <h2 className="text-3xl overflow-y-clip text-white/85 font-semibold mt-2 mb-6 break-all overflow-x-hidden">
        {title}
      </h2>

      <div>
        <div className="font-bold select-none tracking-tight gap-1 items-center align-middle text-white flex text-lg mb-3 mt-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke="white"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
          </span>
          Response
        </div>
        {content.length == 0 && children == undefined && <MessageLoading />}
        <div className="mt-1 px-2 tracking-wide font-medium text-white break-words overflow-x-hidden">
          {children == undefined && <TextContentForChat content={content} />}
          {children && children}
        </div>
      </div>
    </div>
  );
}

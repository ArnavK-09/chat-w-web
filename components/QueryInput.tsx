"use client";

// Imports
import { CopilotTextarea } from "@copilotkit/react-textarea";
import InputButton from "~/components/InputButton";
import { useState } from "react";

/**
 * Input to continue user journey from query page
 */
export default function LandingInput({
  onSubmit,
  setState,
  state,
}: {
  state: string;
  onSubmit: () => void;
  setState: (value: string) => unknown;
}) {
  // Animation for button
  const [animate, setAnimate] = useState<boolean>(false);
  return (
    <div className="flex align-middle items-center gap-4 w-[98vw] px-1">
      <CopilotTextarea
        value={state}
        onValueChange={(value: string) => setState(value.trim())}
        spellCheck={false}
        className="bg-[#191a1a]/95 [*>&]:!select-none !select-none hide-scrollbar max-h-[20vh] md:max-h-[24vh] overflow-y-scroll backdrop-blur-sm text-white/90 w-[100%] text-left px-2 py-2 md:px-5 md:py-4 text-xs md:text-lg border-[#343637] focus:outline-none focus:ring-0 font-semibold rounded-md border-2 overflow-x-hidden border-b-8 placeholder:!text-white placeholder:!font-semibold"
        placeholder="Query about page..."
        autosuggestionsConfig={{
          textareaPurpose: "TODO",
          chatApiConfigs: {},
        }}
        onKeyDown={(e) => {
          if (e.code == "Enter") {
            e.preventDefault();
            if (state.length == 0) return;
            setAnimate(true);
          }
        }}
      />
      <InputButton
        disabled={state.length == 0}
        animate={animate}
        setAnimate={setAnimate}
        onClick={onSubmit}
      />
    </div>
  );
}

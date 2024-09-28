"use client";

/**
 * Custom button to submit input
 */
export default function LandingInputButton({
  onClick,
  disabled,
  absolute = false,
  setAnimate,
  animate,
}: {
  absolute?: boolean;
  disabled: boolean;
  onClick: () => void;
  setAnimate: (value: boolean) => unknown;
  animate: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={() => {
        setAnimate(true);
      }}
      onAnimationEnd={() => {
        setAnimate(false);
        onClick();
      }}
      className={`${
        animate && "animate-shake"
      } ${absolute && "absolute right-0 top-1 md:top-1.5"} h-10 w-10 md:h-14 md:w-14 cursor-default select-none disabled:cursor-not-allowed grid justify-center items-center hover:border-b-[7px] delay-50 aspect-square ease-in-out transition  border-[3px] border-b-8 border-cyan-600 disabled:bg-gray-500 disabled:border-gray-600 bg-cyan-400 text-black font-extrabold`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="md:size-6 size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
        />
      </svg>
    </button>
  );
}

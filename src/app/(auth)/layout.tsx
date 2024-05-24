import { ReactNode } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <svg
        className="animate-beam pointer-events-none absolute left-[-250px] md:left-[-150px] lg:left-[-10px] xl:left-0 top-0 z-30 h-[150%] w-[150%] md:w-[100%] lg:w-[74%]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter0_f_1065_8)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill="white"
            fill-opacity="0.21"
          ></ellipse>
        </g>
        <defs>
          <filter
            id="filter0_f_1065_8"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="151"
              result="effect1_foregroundBlur_1065_8"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
      <main className="relative min-h-[90dvh] flex justify-center items-center bg-black p-4 overflow-x-hidden">
        <div className="absolute rounded-sm bottom-0 h-full w-full overflow-hidden ">
          <div className="w-full h-full relative">
            <div className="moving-grid-background absolute w-full h-[200%]" />
            <div className="shadow-background absolute h-full w-full rounded-sm shadow-[inset_0_0_5rem_3rem]" />
          </div>
        </div>
        <div className="p-6 rounded-xl border z-10 shadow-[2rem_2rem_2rem_-1rem_#0004,inset_1rem_1rem_4rem_-1rem_#fff1]  bg-zinc-900 drop-shadow-[0_0_15px_rgba(49,49,49,0.35)] border-zinc-600">
          {children}
        </div>
      </main>
    </>
  );
}

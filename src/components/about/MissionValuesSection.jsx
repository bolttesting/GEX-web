import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 256 256">
        <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,50,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C206,177.18,227.93,116.2,223.45,40.07Z" />
      </svg>
    ),
    title: "Environmental First",
    description: "Every decision we make is weighed against its long-term impact on the planet.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 256 256">
        <path d="M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128Z" />
      </svg>
    ),
    title: "Built to Last",
    description: "We craft systems with a 25-year horizon, not a 5-year patch cycle.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 256 256">
        <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176Z" />
      </svg>
    ),
    title: "People Powered",
    description: "Our technology is only meaningful when it makes real lives better, simpler, safer.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 256 256">
        <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13-2.73,19.64-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.67.1-13.54.21-19.64,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13-2.63-19.64-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.67-.21-13.54-2.73-19.64-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13,2.73-19.64.1-7,.21-14.33,3.32-17.43S70.51,57.08,77.55,57c6.67-.1,13.54-.21,19.64-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13,2.63,19.64,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.67.21,13.54,2.73,19.64,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,173.66,98.34ZM96,108a12,12,0,1,1,12,12A12,12,0,0,1,96,108Zm64,40a12,12,0,1,1-12-12A12,12,0,0,1,160,148Z" />
      </svg>
    ),
    title: "Honest Pricing",
    description: "No hidden fees, no fine print — just fair value for thoughtful work.",
  },
];

export default function MissionValuesSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal">
          <SectionHeading
            label="Our Values"
            title="The principles that power everything we do"
            description="Four values, one promise — to leave every project, home, and community better than we found it."
            variant="light"
            align="center"
            maxWidth="max-w-3xl"
          />
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="gs-reveal group relative p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-brand-primary/50 transition-all duration-500 bg-white/5 hover:bg-white/10"
            >
              <div className="absolute top-6 right-6 text-xs font-semibold text-gray-400">
                0{i + 1}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-brand-dark transition-colors">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import gsap from "gsap";

const variants = {
  primary: "bg-brand-primary text-white hover:bg-[#821954]",
  light: "bg-white text-brand-dark hover:bg-brand-primary hover:text-white",
  dark: "bg-brand-dark text-white hover:bg-black",
  outline: "border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white",
  outlineLight: "border border-white text-white hover:bg-white hover:text-brand-dark",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3.5 text-base",
  xl: "px-8 py-4 text-lg",
};

const radii = {
  rounded: "rounded-xl",
  pill: "rounded-full",
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "lg",
  radius = "rounded",
  className = "",
  fullWidth = false,
  ...rest
}) {
  const btnRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(btnRef.current, {
      scale: 1.05,
      y: -2,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseDown = () => {
    gsap.to(btnRef.current, {
      scale: 0.97,
      duration: 0.15,
      ease: "power2.out",
    });
  };

  const handleMouseUp = () => {
    gsap.to(btnRef.current, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const baseClasses = `inline-flex items-center justify-center font-semibold transition-colors duration-300 ${variants[variant]} ${sizes[size]} ${radii[radius]} ${fullWidth ? "w-full" : ""} ${className}`;

  const sharedProps = {
    ref: btnRef,
    className: baseClasses,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    ...rest,
  };

  if (href) {
    return (
      <a href={href} {...sharedProps}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} {...sharedProps}>
      {children}
    </button>
  );
}

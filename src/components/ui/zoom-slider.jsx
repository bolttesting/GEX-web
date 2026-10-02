"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_SLIDER_DATA = [
  {
    number: "01",
    src: "/images/projects/burj-khalifa.jpg",
    title: "Burj Khalifa",
    desc: "Aluminium extrusion for Dubai’s landmark tower",
    href: "/projects/burj-khalifa",
  },
  {
    number: "02",
    src: "/images/projects/doha-bank.jpg",
    title: "Doha Bank",
    desc: "Architectural systems for a commercial address in Qatar",
    href: "/projects/doha-bank",
  },
  {
    number: "03",
    src: "/images/projects/the-opus.jpg",
    title: "The Opus",
    desc: "Bespoke profiles for a complex Dubai form",
    href: "/projects/the-opus",
  },
  {
    number: "04",
    src: "/images/projects/atlantis.jpg",
    title: "Atlantis, The Palm",
    desc: "Resort aluminium on Palm Jumeirah",
    href: "/projects/atlantis-the-palm",
  },
  {
    number: "05",
    src: "/images/projects/qfis.jpg",
    title: "QFIS",
    desc: "Campus profiles for Qatar Faculty of Islamic Studies",
    href: "/projects/qfis",
  },
];

const SCROLL_PER_PX = 1.0;
const LERP_FACTOR = 0.08;
const CONTAINED_LERP_FACTOR = 0.42;
const EXIT_PORTION = 0.46;
const ENTER_PORTION = 0.55;

const DRAG_LERP_FACTOR = 0.22;
const MOMENTUM_FRICTION = 0.92;
const MIN_MOMENTUM = 0.1;
const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 1025;
const SLIDER_BOTTOM_OFFSET = 0;

const REDUCED_MOTION_LERP_FACTOR = 1;
const REDUCED_MOTION_FADE_DURATION = 0.18;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;

const lerp = (a, b, n) => a + (b - a) * n;

const smoothstep = (value) => {
  const t = Math.min(1, Math.max(0, value));
  return t * t * (3 - 2 * t);
};

export function ZoomSliderComp({
  sliderData,
  title,
  subheading,
  scaleOnHover = true,
  textOnHover = true,
  size = 1,
  easeScrollPercentage = 100,
  contained = false,
  titleOffset = 40,
}) {
  const images = sliderData;

  const rootRef = useRef(null);
  const spacerRef = useRef(null);
  const stripRef = useRef(null);
  const cardRefs = useRef([]);
  const imageWrapRefs = useRef([]);
  const textRefs = useRef([]);

  const [viewportWidth, setViewportWidth] = useState(1440);
  const [viewportHeight, setViewportHeight] = useState(900);
  const [reduceMotion, setReduceMotion] = useState(false);

  const isMobile = viewportWidth < MOBILE_BREAKPOINT;
  const isTablet =
    viewportWidth >= MOBILE_BREAKPOINT && viewportWidth < TABLET_BREAKPOINT;

  const resolvedSize = Math.max(0.5, Number(size) || 1);
  const resolvedEaseScrollPercentage = Math.max(
    20,
    Number(easeScrollPercentage) || 100
  );
  const cardWidthMin = (isMobile ? 75 : 190) * resolvedSize;
  const cardWidthMax = (isMobile ? 260 : isTablet ? 500 : 680) * resolvedSize;
  const cardHeightMax = isMobile
    ? Math.round(viewportHeight * 0.6 * resolvedSize)
    : Math.round(viewportHeight * 0.82 * resolvedSize);
  const cardHeightMin = (isMobile ? 80 : 50) * resolvedSize;
  const cardStep = cardWidthMax;

  const stateRef = useRef({
    current: 0,
    target: 0,
    raf: null,
    isDragging: false,
    lastX: 0,
    lastY: 0,
    velocity: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const announcedIndexRef = useRef(0);

  useEffect(() => {
    const onResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");

    const syncReducedMotion = (event) => {
      setReduceMotion("matches" in event ? event.matches : prefersReducedMotion());
    };

    if (!mediaQuery) return;

    syncReducedMotion(mediaQuery);
    mediaQuery.addEventListener("change", syncReducedMotion);
    return () => mediaQuery.removeEventListener("change", syncReducedMotion);
  }, []);

  const positionCards = useCallback(
    (offset) => {
      if (!stripRef.current) return;

      const cards = Array.from(stripRef.current.children);
      const count = images.length;

      if (!count) return;

      const loopWidth = count * cardStep;
      const viewportWidthValue = window.innerWidth;
      const viewportHeightValue = window.innerHeight;
      const bottom = viewportHeightValue - SLIDER_BOTTOM_OFFSET;
      const easingDistance =
        2 * viewportWidthValue * (resolvedEaseScrollPercentage / 100);

      const mapVtoX = (value) => {
        if (value <= 0) return 0;
        if (value >= easingDistance) return value - easingDistance / 2;
        return (value * value) / (2 * easingDistance);
      };

      const normalizedOffset = ((offset % loopWidth) + loopWidth) % loopWidth;
      const startIndex = Math.floor(normalizedOffset / cardStep);
      const fractionalOffset = (normalizedOffset % cardStep) / cardStep;

      for (let index = 0; index < count; index += 1) {
        const cardIndex = (startIndex + index) % count;
        const visualOffset = (index - fractionalOffset) * cardStep;
        const currentX = mapVtoX(visualOffset);
        const nextX = mapVtoX(visualOffset + cardStep);
        const visualWidth = nextX - currentX;
        const scale = visualWidth / cardWidthMax;
        const cardHeight =
          cardHeightMin + scale * (cardHeightMax - cardHeightMin);
        const y = bottom - cardHeight;

        if (!cards[cardIndex]) continue;

        let opacity = 1;
        let shiftX = 0;
        const exiting = visualOffset < 0;
        const entering = index === count - 1;

        if (exiting) {
          const exitT = smoothstep(
            Math.abs(visualOffset) / (cardStep * EXIT_PORTION)
          );
          opacity = reduceMotion ? (exitT > 0.5 ? 0 : 1) : 1 - exitT;
          shiftX = reduceMotion ? 0 : -exitT * 28;
        } else if (entering && count > 1) {
          const enterT = smoothstep(fractionalOffset / ENTER_PORTION);
          opacity = reduceMotion ? (enterT > 0.5 ? 1 : 0) : enterT;
          shiftX = reduceMotion ? 0 : (1 - enterT) * 64;
        }

        const card = cards[cardIndex];
        card.style.transform = `translate(${currentX + shiftX}px, ${y}px)`;
        card.style.opacity = `${opacity}`;
        card.style.pointerEvents = opacity < 0.15 ? "none" : "";

        const imageWrap = imageWrapRefs.current[cardIndex];

        if (!imageWrap) continue;

        imageWrap.style.width = `${visualWidth}px`;
        imageWrap.style.height = `${cardHeight}px`;
      }
    },
    [
      cardHeightMax,
      cardHeightMin,
      cardStep,
      cardWidthMax,
      images.length,
      reduceMotion,
      resolvedEaseScrollPercentage,
    ]
  );

  useLayoutEffect(() => {
    if (!contained || !rootRef.current || !spacerRef.current || !images.length) return;

    const root = rootRef.current;
    const travel = Math.max(images.length * cardStep, window.innerHeight);
    const trigger = ScrollTrigger.create({
      trigger: root,
      start: "top top",
      end: `+=${travel}`,
      pin: root,
      pinSpacer: spacerRef.current,
      pinSpacing: true,
      anticipatePin: 1,
      zIndex: 20,
      invalidateOnRefresh: true,
      scrub: reduceMotion ? true : 0.35,
      onUpdate: (self) => {
        stateRef.current.target = self.progress * images.length * cardStep;
      },
    });

    return () => trigger.kill(true);
  }, [cardStep, contained, images.length, reduceMotion]);

  useEffect(() => {
    if (!images.length) return;

    const state = stateRef.current;
    const loopWidth = images.length * cardStep;

    const tick = () => {
      if (
        !contained &&
        !reduceMotion &&
        !state.isDragging &&
        Math.abs(state.velocity) > MIN_MOMENTUM
      ) {
        state.target += state.velocity;
        state.velocity *= MOMENTUM_FRICTION;
      } else if (!state.isDragging) {
        state.velocity = 0;
      }

      const lerpFactor = reduceMotion
        ? REDUCED_MOTION_LERP_FACTOR
        : state.isDragging
          ? DRAG_LERP_FACTOR
          : contained
            ? CONTAINED_LERP_FACTOR
            : LERP_FACTOR;
      state.current = lerp(state.current, state.target, lerpFactor);

      if (!contained && Math.abs(state.current - state.target) < 0.01) {
        const shift = Math.round(state.current / loopWidth) * loopWidth;
        state.current -= shift;
        state.target -= shift;
      }

      positionCards(state.current);

      if (images.length) {
        const normalizedOffset =
          ((state.current % loopWidth) + loopWidth) % loopWidth;
        const nextIndex = Math.floor(normalizedOffset / cardStep) % images.length;

        if (nextIndex !== announcedIndexRef.current) {
          announcedIndexRef.current = nextIndex;
          setActiveIndex(nextIndex);
        }
      }

      state.raf = requestAnimationFrame(tick);
    };

    const cleanups = [];

    const beginDrag = (clientX, clientY) => {
      state.isDragging = true;
      state.lastX = clientX;
      state.lastY = clientY;
      state.velocity = 0;
    };

    const moveDrag = (clientX, clientY, direction = 1) => {
      if (!state.isDragging) return;

      const deltaX = clientX - state.lastX;
      const deltaY = clientY - state.lastY;
      const rawDelta = Math.abs(deltaX) >= Math.abs(deltaY) ? -deltaX : -deltaY;
      const delta = rawDelta * direction;

      state.target += delta;
      state.velocity = lerp(state.velocity, delta, 0.5);
      state.lastX = clientX;
      state.lastY = clientY;
    };

    const endDrag = () => {
      state.isDragging = false;
    };

    if (!contained) {
      const onWheel = (event) => {
        state.target -= event.deltaY * SCROLL_PER_PX;
      };

      const onMouseDown = (event) => beginDrag(event.clientX, event.clientY);
      const onMouseMove = (event) => moveDrag(event.clientX, event.clientY);
      const onMouseUp = endDrag;

      const onTouchStart = (event) =>
        beginDrag(event.touches[0].clientX, event.touches[0].clientY);
      const onTouchMove = (event) =>
        moveDrag(event.touches[0].clientX, event.touches[0].clientY, -1);
      const onTouchEnd = endDrag;

      window.addEventListener("wheel", onWheel, { passive: true });
      window.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd);
      window.addEventListener("touchcancel", onTouchEnd);

      cleanups.push(() => {
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", onTouchEnd);
        window.removeEventListener("touchcancel", onTouchEnd);
      });
    } else if (rootRef.current) {
      const root = rootRef.current;
      let dragged = false;

      const onPointerDown = (event) => {
        if (event.button !== undefined && event.button !== 0) return;
        dragged = false;
        beginDrag(event.clientX, event.clientY);
      };

      const onPointerMove = (event) => {
        if (!state.isDragging) return;
        if (
          Math.abs(event.clientX - state.lastX) > 6 ||
          Math.abs(event.clientY - state.lastY) > 6
        ) {
          dragged = true;
        }
        moveDrag(event.clientX, event.clientY);
      };

      const onPointerUp = () => endDrag();

      const onClickCapture = (event) => {
        if (!dragged) return;
        event.preventDefault();
        event.stopPropagation();
        dragged = false;
      };

      root.addEventListener("pointerdown", onPointerDown);
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
      root.addEventListener("click", onClickCapture, true);

      cleanups.push(() => {
        root.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        root.removeEventListener("click", onClickCapture, true);
      });
    }

    state.raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(state.raf);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [cardStep, contained, images, positionCards, reduceMotion]);

  useEffect(() => {
    if (!images.length) return;

    const cleanups = [];

    cardRefs.current.forEach((card, index) => {
      const textElement = textRefs.current[index];
      const imageWrap = imageWrapRefs.current[index];

      if (!card || !textElement || !imageWrap) return;

      gsap.set(textElement, { autoAlpha: textOnHover ? 0 : 1, y: textOnHover ? 12 : 0 });

      const imageElement = imageWrap.querySelector("img");

      if (imageElement) {
        gsap.set(imageElement, { opacity: 1 });
      }

      const onEnter = () => {
        if (textOnHover) {
          gsap.killTweensOf(textElement);
          gsap.to(textElement, {
            autoAlpha: 1,
            y: 0,
            duration: reduceMotion ? REDUCED_MOTION_FADE_DURATION : 0.45,
            ease: "power3.out",
          });
        }

        if (!imageElement || !scaleOnHover || reduceMotion) return;

        gsap.to(imageElement, {
          scale: 1.05,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        if (textOnHover && index !== announcedIndexRef.current) {
          gsap.killTweensOf(textElement);
          gsap.to(textElement, {
            autoAlpha: 0,
            y: 12,
            duration: reduceMotion ? REDUCED_MOTION_FADE_DURATION : 0.28,
            ease: "power2.in",
          });
        } else if (!textOnHover) {
          gsap.set(textElement, { autoAlpha: 1, y: 0 });
        }

        if (!imageElement || !scaleOnHover) return;

        gsap.to(imageElement, {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      imageWrap.addEventListener("mouseenter", onEnter);
      imageWrap.addEventListener("mouseleave", onLeave);

      cleanups.push(() => {
        imageWrap.removeEventListener("mouseenter", onEnter);
        imageWrap.removeEventListener("mouseleave", onLeave);
        gsap.killTweensOf(textElement);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [images, reduceMotion, scaleOnHover, textOnHover]);

  useEffect(() => {
    if (!textOnHover) return;

    const textElement = textRefs.current[activeIndex];
    if (!textElement) return;

    gsap.killTweensOf(textElement);
    gsap.set(textElement, { autoAlpha: 1, y: 0 });
  }, [activeIndex, textOnHover]);

  const activeItem = images[activeIndex];
  const slideAnnouncement = images.length
    ? activeItem?.title
      ? `${activeItem.title}, slide ${activeIndex + 1} of ${images.length}`
      : `Slide ${activeIndex + 1} of ${images.length}`
    : "";

  return (
    <div ref={spacerRef} className="w-full">
    <div
      ref={rootRef}
      id="landmark-projects"
      className="relative z-20 w-screen overflow-hidden bg-white"
      style={{ height: "100svh", touchAction: contained ? "pan-y" : "none" }}
    >
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {slideAnnouncement}
      </div>
      {title ? (
        <div
          className="pointer-events-none absolute inset-x-0 z-20"
          style={{ top: titleOffset }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {subheading ? (
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-gray">
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
                {subheading}
              </div>
            ) : null}
            <h2 className="text-3xl font-medium text-brand-dark sm:text-4xl md:text-5xl">
              {title}
            </h2>
          </div>
        </div>
      ) : null}

      <div ref={stripRef} className="absolute inset-0">
        {images.map((item, index) => {
          const media = (
            <div
              ref={(element) => {
                imageWrapRefs.current[index] = element;
              }}
              className="relative overflow-hidden"
              style={{
                width: cardWidthMin,
                height: cardHeightMax,
                willChange: "width, height",
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                draggable={false}
                className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-0"
                style={{
                  transform: "none",
                  objectPosition: "center bottom",
                  transition: "none",
                  willChange: "auto",
                }}
              />
            </div>
          );

          const label = (
            <div
              ref={(element) => {
                textRefs.current[index] = element;
              }}
              className="absolute z-10 flex w-full flex-col gap-1"
              style={{
                bottom: "calc(100% + 10px)",
                left: 0,
                padding: "0 0 4px",
                visibility: "hidden",
              }}
            >
              <p
                data-number
                className="select-none overflow-hidden text-[10px] font-bold uppercase leading-none tracking-[0.18em] text-brand-dark/50"
              >
                {item.number}
              </p>

              <p
                data-title
                className="select-none overflow-hidden text-[13px] font-extrabold uppercase leading-[1.15] tracking-[0.08em] text-brand-dark"
              >
                {item.title}
              </p>

              <p
                data-desc
                className="select-none overflow-hidden text-[10px] font-normal leading-normal tracking-[0.04em] text-brand-dark/60"
              >
                {item.desc}
              </p>
            </div>
          );

          const cardBody = item.href ? (
            <Link href={item.href} className="block cursor-pointer" aria-label={item.title}>
              {label}
              {media}
            </Link>
          ) : (
            <>
              {label}
              {media}
            </>
          );

          return (
            <div
              key={item.href || item.title || index}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="absolute left-0 top-0"
              style={{ willChange: "transform" }}
            >
              {cardBody}
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

const ZoomSlider = ({
  sliderData = DEFAULT_SLIDER_DATA,
  title = "Landmark projects",
  subheading = "Scroll to explore",
  scaleOnHover = true,
  textOnHover = true,
  size = 1,
  easeScrollPercentage = 100,
  contained = false,
  titleOffset = 40,
} = {}) => (
  <ZoomSliderComp
    title={title}
    subheading={subheading}
    sliderData={sliderData}
    scaleOnHover={scaleOnHover}
    textOnHover={textOnHover}
    size={size}
    easeScrollPercentage={easeScrollPercentage}
    contained={contained}
    titleOffset={titleOffset}
  />
);

export default ZoomSlider;

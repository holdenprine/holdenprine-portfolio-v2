"use client";

import React, { useLayoutEffect, useRef } from "react";

const MAX_TILT_DEG = 9;

export const Bio = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    let disposed = false;
    let ctx: gsap.Context | undefined;
    let removeTiltListeners: (() => void) | undefined;

    void (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (disposed) return;

      const root = rootRef.current;
      const heading = headingRef.current;
      const body = bodyRef.current;
      if (!root || !heading || !body) return;

      ctx = gsap.context(() => {
        gsap.from([heading, body], {
          opacity: 0,
          y: 32,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });

        gsap.set(root, {
          transformPerspective: 1000,
          transformOrigin: "center center",
        });

        const rotateXTo = gsap.quickTo(root, "rotationX", {
          duration: 0.65,
          ease: "power3.out",
        });
        const rotateYTo = gsap.quickTo(root, "rotationY", {
          duration: 0.65,
          ease: "power3.out",
        });

        const onMove = (e: PointerEvent) => {
          if (e.pointerType === "touch") return;

          const r = root.getBoundingClientRect();
          const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
          const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;

          rotateYTo(nx * MAX_TILT_DEG);
          rotateXTo(-ny * MAX_TILT_DEG);
        };

        const onLeave = () => {
          rotateXTo(0);
          rotateYTo(0);
        };

        root.addEventListener("pointermove", onMove);
        root.addEventListener("pointerleave", onLeave);

        removeTiltListeners = () => {
          root.removeEventListener("pointermove", onMove);
          root.removeEventListener("pointerleave", onLeave);
        };
      }, root);
    })();

    return () => {
      disposed = true;
      removeTiltListeners?.();
      ctx?.revert();
    };
  }, []);

  return (
    <>
      <div className="pt-[30px]" />
      <div
        ref={rootRef}
        className="bg-gray-200 max-w-4xl mx-auto text-center py-16 px-6 rounded-2xl shadow-lg pt-[50px] will-change-transform [transform-style:preserve-3d]"
      >
        <h2
          ref={headingRef}
          className="text-h1 text-neutral-600 font-bold mb-4 text-neutral-100"
        >
          Hello! I&apos;m Holden Prine
        </h2>
        <p
          ref={bodyRef}
          className="text-lg text-neutral-600 leading-relaxed"
        >
          I&apos;m a Full Stack Developer specializing in Frontend and testing. I have
          a passion for user-first products that contribute to their given
          communities. Throughout my career, it has been my mission to be an
          integral part of the communities I serve, ensuring excellence and
          quality in the tools and projects I build.
        </p>
      </div>
    </>
  );
};

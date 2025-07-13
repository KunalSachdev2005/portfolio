"use client";

import { useState, useEffect } from "react";

// Throttle helper function
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;
  return function(this: any, ...args: any[]) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, Math.max(limit - (Date.now() - lastRan), 0)); // Ensure delay is not negative
    }
  };
};


export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      setActiveSection(sectionId); // Set active section immediately on click
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      let foundActive = false;

      // Iterate in reverse to prioritize sections closer to the bottom
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          // Define what "in view" means for a section
          // A section is "in view" if its top is visible AND
          // its bottom is not too far up, or if the scroll position is within it.
          const buffer = windowHeight * 0.3; // Consider section active when 30% of it is in view from the top

          const isSectionVisible =
            (scrollPosition + windowHeight > sectionTop + buffer) &&
            (scrollPosition < sectionBottom - buffer);

          // Specific logic for the "contact" section when at the very bottom of the page
          const isAtPageBottom =
            Math.ceil(scrollPosition + windowHeight) >= documentHeight - 10; // Allow for a small buffer

          if (
            (isSectionVisible && sectionId !== "contact") || // General rule for other sections
            (sectionId === "contact" && (isSectionVisible || isAtPageBottom)) // For contact, if visible OR at page bottom
          ) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);
            }
            foundActive = true;
            break;
          }
        }
      }

      // If no specific section is found (e.g., at the very top), default to 'home'
      if (!foundActive && scrollPosition < 100 && activeSection !== "home") {
        setActiveSection("home");
      }
    };

    // Throttle the scroll event listener
    const throttledHandleScroll = throttle(handleScroll, 150); // Adjust delay (ms) as needed for responsiveness

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [activeSection]); // Dependency array ensures effect runs when activeSection changes

  const getNavItemClasses = (sectionId: string) => {
    const baseClasses =
      "nav-item px-4 py-2 rounded-full transition-colors duration-200";

    const activeClasses =
      "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900";

    // Non-active items will now have text-gray-300 for better visibility
    const inactiveClasses = "text-gray-300 hover:bg-white/20";

    return `${baseClasses} ${
      activeSection === sectionId ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className={getNavItemClasses("home")}
          onClick={(e) => handleScrollToSection(e, "home")}
        >
          Home
        </a>
        <a
          href="#projects"
          className={getNavItemClasses("projects")}
          onClick={(e) => handleScrollToSection(e, "projects")}
        >
          Projects
        </a>
        <a
          href="#about"
          className={getNavItemClasses("about")}
          onClick={(e) => handleScrollToSection(e, "about")}
        >
          About
        </a>
        <a
          href="#contact"
          className={getNavItemClasses("contact")}
          onClick={(e) => handleScrollToSection(e, "contact")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
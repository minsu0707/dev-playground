import { useState, useEffect, useRef } from "react";
import { NAV_CONTENT } from "@constants/navContents";

export const Header = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transform-gpu transition-transform duration-300 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      } h-15 border-b bg-gray-800 p-4 text-white`}
    >
      <nav className="container mx-auto">
        <ul className="flex justify-center gap-6">
          {NAV_CONTENT.map((item) => (
            <li key={item.path}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

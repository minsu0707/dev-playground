import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-gray-900 p-4 text-gray-300">
      <div className="container mx-auto flex flex-col items-center gap-2 text-sm">
        <div className="flex gap-5 text-lg">
          <a
            href="https://www.instagram.com/m.in_su08"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/minsiuuu"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/minsu0707"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-xs">Email: mando4137@gmail.com</p>
        <p className="mt-2 text-xs text-gray-500">
          © {new Date().getFullYear()} Minsu Choi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

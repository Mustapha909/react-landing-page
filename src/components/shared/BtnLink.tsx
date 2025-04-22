interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}
const BtnLink = ({ href, text, className = '' }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 cursor-pointer ${className}`}
      //   transform transition duration-300 hover:scale-101
    >
      <span className="relative z-10 text-white">{text}</span>
    </a>
  );
};

export default BtnLink;

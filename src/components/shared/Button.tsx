interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent bg-violet-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

interface NavItemProps {
  href: string;
  text: string;
}
const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <div className="duration-300 font-medium ease-linear hover:text-primary py-3">
      <li>
        <a href={href} className="hover:text-indigo-600">
          {text}
        </a>
      </li>
    </div>
  );
};

export default NavItem;

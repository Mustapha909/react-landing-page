import Container from '../shared/Container';

const Footer = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <svg
              width="250"
              height="60"
              viewBox="0 0 250 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(0, 10)" fill="#7c3aed">
                <circle cx="5" cy="5" r="2" />
                <circle cx="15" cy="5" r="2" />
                <circle cx="25" cy="5" r="2" />
                <circle cx="5" cy="15" r="2" />
                <circle cx="15" cy="15" r="2" />
                <circle cx="25" cy="15" r="2" />
              </g>
              <text
                x="40"
                y="40"
                fontFamily="Segoe UI, sans-serif"
                fontSize="32"
                fontWeight="600"
                fill="#7c3aed"
              >
                Edge AI
              </text>
            </svg>
          </div>

          <div className="flex gap-6 text-heading-1">
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
            <a href="#services" className="hover:text-indigo-600">
              Services
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

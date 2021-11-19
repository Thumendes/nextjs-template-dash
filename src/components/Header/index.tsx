interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <div className="p-6 text-2xl">{title}</div>;
};

export default Header;

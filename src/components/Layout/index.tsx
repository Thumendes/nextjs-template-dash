import Header from "../Header";
import Sidebar from "../Sidebar";

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="grid grid-cols-5 grid-rows-8 h-screen">
      <div className="row-span-6 overflow-auto">
        <Sidebar />
      </div>
      <div className="col-span-4">
        <Header title={title} />
      </div>
      <div className="bg-gray-50 col-span-4 row-span-5 overflow-y-scroll">
        <div className="min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

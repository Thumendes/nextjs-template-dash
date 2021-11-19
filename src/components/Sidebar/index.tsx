import { HTMLAttributes, useState } from "react";
import { SidebarItemType, SideBarMenuType } from "../../@types/sidebar";
import SideBarMenu, { Actions } from "../../data/sidebar";
import Link from "next/link";
import useUser from "../../hooks/useUser";

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

interface SidebarItemProps {
  item: SideBarMenuType;
}

const SidebarItemText = ({ children, icon, ...rest }) => {
  return (
    <span
      className="flex gap-4 items-center text-gray-600 py-1 hover:bg-gray-100 px-6"
      {...rest}
    >
      {icon ? icon : ""}
      {children}
    </span>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(true);

  switch (item.type) {
    /**
     * Title
     */
    case SidebarItemType.TITLE:
      return <h1 className="text-2xl my-2 text-gray-700 px-6">{item.title}</h1>;

    /**
     * Link
     */
    case SidebarItemType.LINK:
      const path = item.admin ? `/admin/${item.path}` : item.path;

      return (
        <Link href={path} passHref>
          <SidebarItemText icon={item.icon}>{item.title}</SidebarItemText>
        </Link>
      );

    /**
     * Action
     */
    case SidebarItemType.ACTION:
      return (
        <div onClick={Actions[item.action]}>
          <SidebarItemText icon={item.icon}>{item.title}</SidebarItemText>
        </div>
      );

    /**
     * External
     */
    case SidebarItemType.EXTERNAL:
      return (
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <SidebarItemText icon={item.icon}>{item.title}</SidebarItemText>
        </a>
      );

    /**
     * Parent
     */
    case SidebarItemType.PARENT:
      return (
        <div>
          <SidebarItemText icon={item.icon} onClick={() => setIsOpen(!isOpen)}>
            {item.title}
          </SidebarItemText>
          {isOpen && (
            <div>
              {item.children.map((item, index) => (
                <SidebarItem key={index} item={item} />
              ))}
            </div>
          )}
        </div>
      );
  }
};

const Sidebar: React.FC<SidebarProps> = ({ ...rest }) => {
  const { user } = useUser();

  if (!user) return <></>;

  return (
    <div {...rest} className="py-12">
      <div className="flex flex-col mb-12 px-6">
        <span className="text-xl">{user.name}</span>
        <span>{user.email}</span>
      </div>

      {SideBarMenu.filter((item) => {
        if (user.admin) return true;

        if (item.admin) return false;

        if (item.prod && !user.prods.includes(item.prod)) return false;

        return true;
      }).map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;

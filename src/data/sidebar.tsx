import {
  SideBarMenuActionType,
  SideBarMenuExternalType,
  SideBarMenuLinkType,
  SideBarMenuParentType,
  SideBarMenuTitleType,
  SideBarMenuType,
} from "../@types/sidebar";

enum SidebarItemType {
  ACTION = "action",
  LINK = "link",
  EXTERNAL = "external",
  PARENT = "parent",
  TITLE = "title",
}

import {
  FaBitcoin,
  FaBrain,
  FaCogs,
  FaCommentAlt,
  FaHome,
  FaInfoCircle,
  FaJoint,
  FaSignOutAlt,
  FaSkull,
  FaTicketAlt,
  FaUser,
} from "react-icons/fa";

export const Actions = {
  signout: () => {
    alert("Sair");
  },
  alert: null,
};

const createTitle = (
  title: string,
  opts?: Omit<SideBarMenuTitleType, "title" | "type">
): SideBarMenuTitleType => {
  return {
    type: SidebarItemType.TITLE,
    title,
    ...opts,
  };
};

const createLink = (
  title: string,
  opts?: Omit<SideBarMenuLinkType, "title" | "type">
): SideBarMenuLinkType => {
  return {
    type: SidebarItemType.LINK,
    title,
    ...opts,
  };
};

const createExternal = (
  title: string,
  opts: Omit<SideBarMenuExternalType, "title" | "type">
): SideBarMenuExternalType => {
  return {
    type: SidebarItemType.EXTERNAL,
    title,
    ...opts,
  };
};

const createAction = <T extends keyof typeof Actions>(
  title: string,
  action: T,
  opts?: Omit<SideBarMenuActionType<T>, "title" | "type" | "action">
): SideBarMenuActionType<T> => {
  return {
    type: SidebarItemType.ACTION,
    title,
    action,
    ...opts,
  };
};

const createParent = (
  title: string,
  opts?: Omit<SideBarMenuParentType, "title" | "type" | "children">,
  ...children: SideBarMenuType[]
): SideBarMenuParentType => {
  return {
    type: SidebarItemType.PARENT,
    title,
    children: children.map((item) => {
      const admin = opts.admin || item.admin;
      const prod = opts.prod || item.prod;

      return { ...item, admin, prod };
    }),
    ...opts,
  };
};

const productsCodes = {
  intelligence: "1891248",
  sstPlus: "1891249",
  bmax: "1891250",
  p3: "1891251",
  etm: "1891252",
};

const SideBarMenu: SideBarMenuType[] = [
  createAction("Sair", "signout", {
    icon: <FaSignOutAlt />,
  }),

  // Seção de início
  createTitle("Início"),
  createLink("Home", {
    path: "/",
    icon: <FaHome />,
  }),
  createLink("Chat", {
    path: "/chat",
    icon: <FaCommentAlt />,
  }),
  createLink("SST One", {
    path: "/sst-one",
    icon: <FaSkull />,
  }),
  createLink("Intelligence", {
    path: "/intelligence",
    prod: productsCodes.intelligence,
    icon: <FaBrain />,
  }),

  // Seção de conhecimento
  createTitle("Conhecimento"),
  createLink("SST United", {
    path: "/sst-united",
    prod: productsCodes.intelligence,
    icon: <FaSkull />,
  }),
  createLink("SST Plus", {
    path: "/sst-plus",
    prod: productsCodes.sstPlus,
    icon: <FaSkull />,
  }),

  // Seção premium
  createTitle("Premium"),
  createLink("BMAX", {
    path: "/bmax",
    prod: productsCodes.bmax,
    icon: <FaJoint />,
  }),
  createLink("P3", {
    path: "/p3",
    prod: productsCodes.p3,
    icon: <FaBitcoin />,
  }),
  createLink("ETM", {
    path: "/etm",
    prod: productsCodes.etm,
    icon: <FaSkull />,
  }),

  // Seção Geral
  createTitle("Geral"),
  createLink("Convites", {
    path: "/invites",
    icon: <FaTicketAlt />,
  }),
  createLink("Usuários", {
    path: "/users",
    icon: <FaUser />,
    admin: true,
  }),
  createParent(
    "Configurações",
    {
      admin: true,
      icon: <FaCogs />,
    },
    createLink("Templates", {
      path: "/templates",
    }),
    createLink("Agenda", {
      path: "/calendar",
    }),
    createLink("Chat", {
      path: "/chat",
    }),
    createLink("Funções", {
      path: "/roles",
    }),
    createLink("Módulos", {
      path: "/modules",
    }),
    createLink("Manutenção", {
      path: "/maintenance",
    }),
    createLink("Acesso Global", {
      path: "/global-key",
    })
  ),
  createExternal("Ajuda", {
    url: "https://google.com/search?q=SST Help",
    icon: <FaInfoCircle />,
  }),
];

export default SideBarMenu;

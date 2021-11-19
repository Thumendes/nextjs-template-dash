import { Actions } from "../data/sidebar";

export enum SidebarItemType {
  ACTION = "action",
  LINK = "link",
  EXTERNAL = "external",
  PARENT = "parent",
  TITLE = "title",
}

export type SideBarMenuBaseType = {
  icon?: JSX.Element | string;
  title: string;
  prod?: string;
  admin?: boolean;
};

export type SideBarMenuActionType<Actions> = SideBarMenuBaseType & {
  type: SidebarItemType.ACTION;
  action: Actions;
};

export type SideBarMenuLinkType = SideBarMenuBaseType & {
  type: SidebarItemType.LINK;
  path: string;
};

export type SideBarMenuExternalType = SideBarMenuBaseType & {
  type: SidebarItemType.EXTERNAL;
  url: string;
};

export type SideBarMenuParentType = SideBarMenuBaseType & {
  type: SidebarItemType.PARENT;
  title: string;
  children: SideBarMenuType[];
};

export type SideBarMenuTitleType = Omit<SideBarMenuBaseType, "icon"> & {
  type: SidebarItemType.TITLE;
  title: string;
};

export type SideBarMenuType =
  | SideBarMenuActionType<keyof typeof Actions>
  | SideBarMenuLinkType
  | SideBarMenuExternalType
  | SideBarMenuParentType
  | SideBarMenuTitleType;

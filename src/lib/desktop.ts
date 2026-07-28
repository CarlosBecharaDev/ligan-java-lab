export type WindowState = {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
};

export type DesktopIcon = {
  id: string;
  label: string;
  icon: string;
  route?: string;
  moduleSlug?: string;
  action?: string;
};

export type DesktopState = {
  windows: WindowState[];
  maxZIndex: number;
};

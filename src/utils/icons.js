import { WalletIcon } from "@heroicons/react/20/solid";
import {
  ArchiveBoxIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  CakeIcon,
  ChartBarIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  FaceSmileIcon,
  GiftIcon,
  HandThumbUpIcon,
  HeartIcon,
  MapIcon,
  MusicalNoteIcon,
  NewspaperIcon,
  PaintBrushIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

import * as Icons from "@heroicons/react/24/solid";

export const icons = [
  BookOpenIcon,
  PaintBrushIcon,
  UserIcon,
  UsersIcon,
  ShoppingCartIcon,
  CakeIcon,
  FaceSmileIcon,
  HeartIcon,
  MusicalNoteIcon,
  WalletIcon,
  ShoppingBagIcon,
  NewspaperIcon,
  MapIcon,
  HandThumbUpIcon,
  GiftIcon,
  CurrencyDollarIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
  ArchiveBoxIcon,
  CodeBracketIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
];

export const returnIcons = (name) => {
  const Icon = Icons[name];
  return <Icon className="w-6 h-6" />;
};

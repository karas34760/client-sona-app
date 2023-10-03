/* eslint-disable no-unused-vars */
import { As } from '@chakra-ui/react';

// Link Content Interface
export interface LinkContent {
  label: string;
  link: string;
  icon?: As;
}
// Tab nav item instead using tab chakra
export type TabItem = {
  title: string;
  key: string;
  component: (title: string, isActive: boolean) => JSX.Element;
};
export interface TabContent {
  label: string;
  key: string;
}

// Wallet interface List link item
export interface WalletProps {
  label: string;
  value: string;
  icon: As;
  url: string;
}

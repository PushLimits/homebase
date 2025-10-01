export type NavigationItem = {
  label: string;
  href: string;
  matchPrefix?: boolean;
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog", matchPrefix: true },
  { label: "About", href: "/about" }
];

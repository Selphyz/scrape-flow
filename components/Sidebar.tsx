'use client';
import { CoinsIcon, HomeIcon, Layers2Icon, ShieldCheckIcon } from 'lucide-react';
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { usePathname } from 'next/navigation';

const routes = [
  {
    href: "",
    label: "Home",
    icon: HomeIcon
  },
  {
    href: "workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "billing",
    label: "Billing",
    icon: CoinsIcon,
  }
];
const DesktopSidebar = () => {
  const pathName = usePathname();
  const activeRoute = routes.find((route) => route.href.length > 0 && pathName.includes(route.href)) || routes[0];
  return <div className='hidden relative md:block min-w-[280px] max-w-[280px] h-screen 
    overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 
    dark:text-foreground border-r-2 border-separate m-2'>
      <div className='flex items-center justify-center gap-2 border-b-[1px] border-separate p-4'>
        <Logo />
      </div>
      <div className='p-2'>TODO CREDITS</div>
      <div className='flex flex-col gap-2'>
        {routes.map((route) => (
          <Link className={buttonVariants({ variant: activeRoute.href === route.href ? 
            "siderbarActiveItem" : "siderbarItem" })}
            key={route.label} href={route.href}>
            <route.icon size={20} />{route.label}
          </Link>
        ))}
      </div>
  </div>;
};

export default DesktopSidebar;

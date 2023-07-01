'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from 'next/navigation'
import { ArrowRight } from "@phosphor-icons/react";

export const HeroButton = () => {

  const pathname = usePathname();

  return (
    <Link href={pathname.includes("/test") ? "/" : "/test"} className="group">
      {pathname.includes('/test') ?
        <Button variant="outline">
          Go back Home <ArrowRight size={18} className="group-hover:ml-2 transition-all duration-300 ease-in-out" />
        </Button>
        :
        <Button variant="outline">
          Try my data <ArrowRight size={18} className="group-hover:ml-2 transition-all duration-300 ease-in-out" />
        </Button>
      }
    </Link>
  )
};

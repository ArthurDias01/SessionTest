'use client'

import { usePathname } from "next/navigation";

export const HeroTitle = () => {
  const pathname = usePathname();

  return (
    <>
      {
        pathname.includes('/test') ?
          <h2 >
            Test it out!
          </h2>
          :
          <h2>
            Wanna try your own data?
          </h2>
      }
    </>
  )
}

import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export const MainSection = ({ children }: Props) => {
  return (
    <section className="flex flex-col md:flex-row w-full h-fit gap-8 justify-between rounded-lg">
      {children}
    </section>
  )
}

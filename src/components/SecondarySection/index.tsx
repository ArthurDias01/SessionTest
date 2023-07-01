import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SecondarySection = ({ children }: Props) => {

  return (
    <div className="w-full bg-slate-100 dark:bg-slate-500 p-4 rounded-lg border-1 dark:border-slate-800 border-slate-200 h-full">
      {children}
    </div>
  )
};

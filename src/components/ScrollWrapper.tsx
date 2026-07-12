import {ReactNode} from "react";


interface Props {
  children: ReactNode;
}

export default function ScrollWrapper({children}: Props) {

  return <section
      className="relative flex min-h-[100svh] snap-start items-center overflow-hidden px-6 py-24 md:px-12 lg:px-20">
    {children}
  </section>;
}
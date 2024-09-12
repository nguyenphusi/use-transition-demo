import { PropsWithChildren } from "react";

export default function TabButton({
  children,
  isActive,
  onClick,
}: PropsWithChildren<{
  isActive: boolean;
  onClick: () => void;
}>) {
  if (isActive) {
    return <b>{children}</b>;
  }

  function handleClick() {
    onClick();
  }
  return <button onClick={handleClick}>{children}</button>;
}

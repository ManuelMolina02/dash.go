import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";
import { useTheme } from "../../contexts/DefineTheme";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
  const { themeDefined } = useTheme();
  const { asPath } = useRouter();
  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? themeDefined.colorActive : themeDefined.color,
      })}
    </Link>
  )
}
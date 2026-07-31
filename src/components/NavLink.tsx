/**
 * Envoltorio (wrapper) sobre `NavLink` de react-router-dom que permite
 * pasar `className` como un string simple en lugar de una función, además
 * de aplicar clases adicionales cuando el enlace está activo o pendiente
 * de navegación.
 */
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  /** Clases base aplicadas siempre al enlace. */
  className?: string;
  /** Clases adicionales aplicadas cuando la ruta del enlace está activa. */
  activeClassName?: string;
  /** Clases adicionales aplicadas mientras la navegación está en curso. */
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };

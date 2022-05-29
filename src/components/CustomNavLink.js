import { NavLink } from 'react-router-dom';

export function CustomNavLink({ children, ...rest }) {
  return (
    <NavLink
     
      {...rest}
    >
      {children}
    </NavLink>
  );
}

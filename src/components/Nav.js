import { useAuthContext } from '../features/Auth/Auth.context';
import { CustomNavLink } from './CustomNavLink';

export function Nav() {
  const { user, logout } = useAuthContext();
  return (
    <nav className="nav">
      <ul className="navlinks">
        <li>
          <CustomNavLink to="/">
            Home
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/about">About Us</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/sports">Sports</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/FAQ">FAQ</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/contact">Contact</CustomNavLink>
        </li>

        {user && (
          <li >
            
<CustomNavLink className="myProfile" to={`/profile/${user.id}`}>My profile</CustomNavLink>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
             
            >
              Logout
            </a>
          </li>
        )}
        {!user && (
          <>
            <li >
              <CustomNavLink to="/login">Login</CustomNavLink>
            </li>
            <li>
              <CustomNavLink  to="/register">
                Register
              </CustomNavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import styles from './modules/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navContainer}>
    <div className={styles.navContent}>
      <h1 className={styles.navTitle}>Bookstore CMS</h1>
      <ul className={styles.navItems}>
        <li>
          <Link className={styles.navItem1} to="/">BOOKS</Link>
        </li>
        <li>
          <Link className={styles.navItem2} to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <div className={styles.profile}><FaRegUserCircle className="fa-icon" /></div>
  </nav>
);

export default Navbar;

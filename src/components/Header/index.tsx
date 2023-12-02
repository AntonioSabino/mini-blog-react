import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header>
			<nav className={styles.navbar}>
				<NavLink
					to='/'
					className={styles.brand}
				>
					Mini <span>Blog</span>
				</NavLink>
				<ul className={styles.links_list}>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) => (isActive ? styles.active : '')}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/about'
							className={({ isActive }) => (isActive ? styles.active : '')}
						>
							Sobre
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header

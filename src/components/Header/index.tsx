import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { useAuthValue } from '../../hooks/useAuthValue'
import { useAuthentication } from '../../hooks/useAuthentication'

const Header = () => {
	const user = useAuthValue()
	const { logout } = useAuthentication()

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
					{!user.uid && (
						<>
							<li>
								<NavLink
									to='/login'
									className={({ isActive }) => (isActive ? styles.active : '')}
								>
									Login
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/register'
									className={({ isActive }) => (isActive ? styles.active : '')}
								>
									Cadastrar
								</NavLink>
							</li>
						</>
					)}
					{user.uid && (
						<>
							<li>
								<NavLink
									to='/posts/create'
									className={({ isActive }) => (isActive ? styles.active : '')}
								>
									Criar Post
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/dashboard'
									className={({ isActive }) => (isActive ? styles.active : '')}
								>
									Dashboard
								</NavLink>
							</li>
						</>
					)}
					<li>
						<NavLink
							to='/about'
							className={({ isActive }) => (isActive ? styles.active : '')}
						>
							Sobre
						</NavLink>
					</li>
					{user.uid && (
						<li>
							<button onClick={logout}>Sair</button>
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default Header

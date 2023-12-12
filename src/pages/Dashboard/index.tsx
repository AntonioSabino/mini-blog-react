import styles from './Dashboard.module.css'

import { useAuthValue } from '../../hooks/useAuthValue'
import { Link } from 'react-router-dom'

const Dashboard = () => {
	const user = useAuthValue()
	const uid = user.uid

	const posts = []

	return (
		<div>
			<h2>Dashboard</h2>
			<p>Gerencie os seus posts</p>
			{posts && posts.length === 0 ? (
				<div className={styles.noposts}>
					<p>Não foram encontrados posts</p>
					<Link
						to='/posts/create'
						className='btn'
					>
						Criar primeiro post
					</Link>
				</div>
			) : (
				<p>Posts</p>
			)}
		</div>
	)
}

export default Dashboard

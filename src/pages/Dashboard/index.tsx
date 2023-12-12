import styles from './Dashboard.module.css'

import { useAuthValue } from '../../hooks/useAuthValue'
import { Link } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Dashboard = () => {
	const user = useAuthValue()
	const uid = user.uid

	const { documents: posts } = useFetchDocuments('posts', undefined, uid)

	return (
		<div>
			<h2>Dashboard</h2>
			<p>Gerencie os seus posts</p>
			{posts && posts.length === 0 && (
				<div className={styles.noposts}>
					<p>Não foram encontrados posts</p>
					<Link
						to='/posts/create'
						className='btn'
					>
						Criar primeiro post
					</Link>
				</div>
			)}

			{posts &&
				posts.map((post) => (
					<div
						key={post.id}
						className={styles.post}
					>
						<h3>{post.title}</h3>
						<Link
							to={`/posts/${post.id}`}
							className='btn btn-dark'
						>
							Ver detalhes
						</Link>
					</div>
				))}
		</div>
	)
}

export default Dashboard

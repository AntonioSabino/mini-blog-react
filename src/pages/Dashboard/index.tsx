import styles from './Dashboard.module.css'

import { useAuthValue } from '../../hooks/useAuthValue'
import { Link } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Dashboard = () => {
	const user = useAuthValue()
	const uid = user.uid

	const { documents: posts, loading } = useFetchDocuments(
		'posts',
		undefined,
		uid
	)

	const deleteDocument = (id: string) => {
		console.log(id)
	}

	if (loading) {
		return <p>Carregando...</p>
	}

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
				<>
					<table>
						<thead>
							<tr>
								<th>Título</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody>
							{posts.map((post) => (
								<tr key={post.id}>
									<td>{post.title}</td>
									<td>
										<Link
											to={`/posts/${post.id}`}
											className='btn btn-outline'
										>
											Ver
										</Link>
										<Link
											to={`/posts/edit/${post.id}`}
											className='btn btn-outline'
										>
											Editar
										</Link>
										<button
											onClick={() => deleteDocument(post.id)}
											className='btn btn-outline btn-danger'
										>
											Excluir
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			)}
		</div>
	)
}

export default Dashboard

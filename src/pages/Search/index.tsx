import styles from './Search.module.css'

import { Link } from 'react-router-dom'
import PostDetail from '../../components/PostDetail'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

const Search = () => {
	const query = useQuery()
	const search: string = query.get('q') || ''

	const { documents: posts } = useFetchDocuments('posts', search)

	return (
		<div className={styles.search_container}>
			<h2>Search</h2>
			<div>
				{posts && posts.length === 0 && (
					<>
						<p>Não foram encontrados posts</p>
						<Link
							to='/'
							className='btn btn-dark'
						>
							Voltar
						</Link>
					</>
				)}
				{posts &&
					posts.map((post) => (
						<PostDetail
							key={post.id}
							id={post.id}
							title={post.title}
							image={post.image}
							createdBy={post.createdBy}
							tags={post.tags}
						/>
					))}
			</div>
		</div>
	)
}

export default Search

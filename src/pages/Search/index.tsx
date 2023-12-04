import styles from './Search.module.css'

import { Link, useSearchParams } from 'react-router-dom'
import PostDetail from '../../components/PostDetail'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Search = () => {
	const [searchParams] = useSearchParams()
	const search = searchParams.get('q') || ''

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

import { Link } from 'react-router-dom'
import styles from './Home.module.css'

import { useState } from 'react'

const Home = () => {
	const [query, setQuery] = useState('')
	const [posts, setPosts] = useState([])

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}
	return (
		<div className={styles.home}>
			<h1>Veja os nossos posts mais recentes</h1>
			<form
				onSubmit={handleSearch}
				className={styles.search_form}
			>
				<input
					type='text'
					placeholder='Ou busque por tags...'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button
					type='submit'
					className='btn btn-dark'
				>
					Pesquisar
				</button>
			</form>
			<div className={styles.posts}>
				<h1>Posts...</h1>
				{posts.length === 0 && (
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
			</div>
		</div>
	)
}

export default Home

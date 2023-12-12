import styles from './Post.module.css'

// hooks
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {
	const { id } = useParams()
	const { document: post } = useFetchDocument('posts', id!)

	return (
		<div className={styles.post_container}>
			{post && (
				<>
					<h1>{post.title}</h1>
					<img
						src={post.image}
						alt={post.title}
					/>
					<p>{post.content}</p>
					<h3>Este post trata sobre:</h3>
					{post.tags && (
						<div className={styles.tags}>
							{post.tags.map((tag: string) => (
								<p key={tag}>
									<span>#</span>
									{tag}
								</p>
							))}
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default Post

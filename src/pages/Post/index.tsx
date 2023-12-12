import styles from './Post.module.css'

// hooks
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {
	const { id } = useParams()
	const { document: post } = useFetchDocument('posts', id!)

	return (
		<div>
			{post && (
				<div className={styles.post}>
					<h1>{post.title}</h1>
					<p>{post.content}</p>
				</div>
			)}
		</div>
	)
}

export default Post

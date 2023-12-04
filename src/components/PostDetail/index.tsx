import { Link } from 'react-router-dom'
import styles from './PostDetail.module.css'

interface PostProps {
	id: string
	title: string
	image: string
	createdBy: string
	tags: string[]
}

const PostDetail = ({ id, createdBy, image, tags, title }: PostProps) => {
	return (
		<div className={styles.post_detail}>
			<img
				src={image}
				alt={title}
			/>
			<h2>{title}</h2>
			<p className={styles.created_by}>{createdBy}</p>
			<div className={styles.tags}>
				{tags.map((tag) => (
					<p key={tag}>
						<span>#</span>
						{tag}
					</p>
				))}
			</div>
			<Link
				to={`/posts/${id}`}
				className='btn btn-outline'
			>
				Ler
			</Link>
		</div>
	)
}

export default PostDetail

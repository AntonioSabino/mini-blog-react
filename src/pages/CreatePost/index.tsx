import { useAuthValue } from '../../hooks/useAuthValue'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import styles from './CreatePost.module.css'
import { useState } from 'react'

const CreatePost = () => {
	const [title, setTitle] = useState('')
	const [image, setImage] = useState('')
	const [content, setContent] = useState('')
	const [tags, setTags] = useState('')
	const [formError, setFormError] = useState('')

	const user = useAuthValue()

	const { insertDocument, response } = useInsertDocument('posts')

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setFormError('')

		try {
			new URL(image)
		} catch (error) {
			setFormError('A imagem deve ser uma URL válida')
			return
		}

		const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase())

		if (!title || !image || !content || !tags) {
			setFormError('Preencha todos os campos')
			return
		}

		if (formError) return

		await insertDocument({
			title,
			image,
			content,
			tags: tagsArray,
			uid: user?.uid,
			createdBy: user?.displayName,
		})

		setTitle('')
		setImage('')
		setContent('')
		setTags('')
	}

	return (
		<div className={styles.create_post}>
			<h2>Criar post</h2>
			<p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Título:</span>
					<input
						type='text'
						name='title'
						required
						placeholder='Pense em um bom título...'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
				<label>
					<span>Imagem:</span>
					<input
						type='text'
						name='image'
						required
						placeholder='Cole o link da imagem aqui...'
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>
				</label>
				<label>
					<span>Conteúdo:</span>
					<textarea
						name='content'
						required
						placeholder='Insira o conteúdo do post aqui...'
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</label>
				<label>
					<span>Tags:</span>
					<input
						type='text'
						name='tags'
						required
						placeholder='Insira as tags separadas por vírgula...'
						value={tags}
						onChange={(e) => setTags(e.target.value)}
					/>
				</label>
				{!response.loading && (
					<button
						type='submit'
						className='btn'
					>
						Cadastrar
					</button>
				)}
				{response.loading && (
					<button
						type='submit'
						className='btn'
						disabled
					>
						Aguarde
					</button>
				)}
				{response.error && <p className='error'>{response.error}</p>}
				{formError && <p className='error'>{formError}</p>}
			</form>
		</div>
	)
}

export default CreatePost

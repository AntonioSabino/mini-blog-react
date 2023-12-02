import { useState } from 'react'
import styles from './Register.module.css'

const Register = () => {
	const [displayName, setDisplayName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setError('')

		const user = {
			displayName,
			email,
			password,
		}

		if (password !== confirmPassword) {
			setError('As senhas senhas precisam ser iguais')
			return
		}

		console.log(user)
	}

	return (
		<div className={styles.register}>
			<h1>Cadastre-se para postar</h1>
			<p>Crie seu usuário e compartilhe as suas histórias</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Nome:</span>
					<input
						type='text'
						name='displayName'
						required
						placeholder='Nome do usuário'
						value={displayName}
						onChange={(e) => setDisplayName(e.target.value)}
					/>
				</label>
				<label>
					<span>Email:</span>
					<input
						type='email'
						name='email'
						required
						placeholder='Email do usuário'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					<span>Senha:</span>
					<input
						type='password'
						name='password'
						required
						placeholder='Senha do usuário'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<label>
					<span>Confirmar senha:</span>
					<input
						type='password'
						name='confirmPassword'
						required
						placeholder='Confirme a senha do usuário'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</label>
				<button
					type='submit'
					className='btn'
				>
					Cadastrar
				</button>
				{error && <p className='error'>{error}</p>}
			</form>
		</div>
	)
}

export default Register

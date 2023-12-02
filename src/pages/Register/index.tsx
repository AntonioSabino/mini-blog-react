import styles from './Register.module.css'

const Register = () => {
	return (
		<div className={styles.register}>
			<h1>Cadastre-se para postar</h1>
			<p>Crie seu usuário e compartilhe as suas histórias</p>
			<form>
				<label>
					<span>Nome:</span>
					<input
						type='text'
						name='displayName'
						required
						placeholder='Nome do usuário'
					/>
				</label>
				<label>
					<span>Email:</span>
					<input
						type='email'
						name='email'
						required
						placeholder='Email do usuário'
					/>
				</label>
				<label>
					<span>Senha:</span>
					<input
						type='password'
						name='password'
						required
						placeholder='Senha do usuário'
					/>
				</label>
				<label>
					<span>Confirmar senha:</span>
					<input
						type='password'
						name='confirmPassword'
						required
						placeholder='Confirme a senha do usuário'
					/>
				</label>
				<button
					type='button'
					className='btn'
				>
					Cadastrar
				</button>
			</form>
		</div>
	)
}

export default Register

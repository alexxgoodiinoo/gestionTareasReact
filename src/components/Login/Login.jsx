import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

function Login() {
  const { login } = useContext(AuthContext); {/* Recogemos las funciones del AuthContext */}
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    {/* Estas son las credenciales que vamos a usar para el inicio de sesión */}
    if (username === 'alex' && password === 'alex123') {
      login();
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      {/* Y de esta manera mostramos el formulario del Login */}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
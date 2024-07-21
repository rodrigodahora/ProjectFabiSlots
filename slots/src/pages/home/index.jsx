import './styles.css';
import avatar from '../../assets/avatar.png';
import logo from '../../assets/logo.svg';

function Home() {
  return (
    <div className='container_home'>
      <img src={logo} alt="img_logo" className='logo' />
      <div className='card'>
        <img src={avatar} alt="avatar" className='avatar' />
        <h1>Olá Jogadores</h1>
        <h2>Sejam muito bem vindos</h2>
        <h3>Ao nosso site</h3>

        <button>Acessar</button>
      </div>
    </div>
  );
}

export default Home;

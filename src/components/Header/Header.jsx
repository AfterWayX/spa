import './Header.scss';
import logo from '../../assets/images/logo.png'
import search from '../../assets/images/search.png'


function Header() {
  return (
    <header className='header'>
      <div className="headerContainer">
        <div className='Logo'>
          <img src={logo} alt="logoHeader" />
        </div>
        <div className='Navbar'>
          <ul className="Menu">
              <li><a to="/" >Каталог</a></li>
              <li><a to="/" >Ресурсы</a></li>
              <li><a to="/" >О нас</a></li>
              <li><a to="/" >Контакты</a></li>
              <li><a to="/" >Бизнес Сегменты</a></li>
          </ul>
          <div className="Search">
              <input type="search" placeholder='Поиск...' name="searchInSite" id="searchInSite" />
              <button><img src={search} alt="search" /></button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

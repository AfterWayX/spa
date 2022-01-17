import './Footer.scss';
import social1 from '../../assets/images/Vector.png'
import social2 from '../../assets/images/Vector-1.png'
import social3 from '../../assets/images/Vector-2.png'
import social4 from '../../assets/images/Vector-3.png'
import develop from '../../assets/images/studio.png'

function Footer() {
  const socialsarray = [
    {src: social1, link: '/'},
    {src: social2, link: '/'},
    {src: social3, link: '/'},
    {src: social4, link: '/'}
  ]
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="contacts">
          <a href='/'><p>б. Маршала Рокоссовского 93/4, Москва</p></a>
          <a href='/'><p>ideckow@gmail.com</p></a>
          <p>+7 (922) 664-4446</p>
          <p>+7 (922) 710-1785</p>
        </div>
        <a href='/'><p>Политика конфиденциальности</p></a>
        <a href='/'><p>Условия пользования</p></a>
        <div className="socials">
          <div className="socialsRow">
            {socialsarray.map((el) => (
              <a href={el.link}><img src={el.src} alt={el.src} /></a>
            ))}
          </div>
          <div className="developed">
            <p>develop by</p>
            <a href="/"><img src={develop} alt={develop} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

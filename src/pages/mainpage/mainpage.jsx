import './mainpage.scss';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import concentrate from '../../assets/images/concentrate.png'
import fordelete from '../../assets/images/fordelete.png'
import forwash from '../../assets/images/forwash.png'
import mineral from '../../assets/images/mineral.png'
import biopreparate from '../../assets/images/biopreparate.png'
import biopreparatetwo from '../../assets/images/biopreparetetwo.png'
import Button from '../../components/button/button'
import bocki from '../../assets/images/bocki.png'
import clock from '../../assets/images/clock.png'
import solvingImage from '../../assets/images/solvingone.png'
import arrow from '../../assets/images/arrow.png'
import arrows from '../../assets/images/arrows.png'
import cleaning from '../../assets/images/cleaning.png'
import imageone from '../../assets/images/Image-0.png'
import imagetwo from '../../assets/images/Image-1.png'
import imagethree from '../../assets/images/Image-2.png'
import imagefour from '../../assets/images/Image-3.png'
import imagefive from '../../assets/images/Image-4.png'
import imagesix from '../../assets/images/Image-5.png'


function Mainpage() {
  const companiesarray = [
    {src: imageone},
    {src: imagetwo},
    {src: imagethree},
    {src: imagefour},
    {src: imagefive},
    {src: imagesix}

  ]
  const productsarray = [
    {image: concentrate, code: 'A60113573', title: 'LIQUAZYME концентрированный жидкий биопрепарат для профилактических и аварийных', price: '580 mdl', link: '/'},
    {image: fordelete, code: 'A60113573', title: 'ERASE Средство для удаления граффити и краски , аэрозоль', price: '580 mdl', link: '/'},
    {image: forwash, code: 'A60113573', title: 'LO-TEMP HD POWDER Порошок для стирки текстиля при низкой температуре', price: '580 mdl', link: '/'},
    {image: mineral, code: 'A60113573', title: 'METALUB ENDURANCE EP  Эмульсионная универсальная СОЖ на минеральной основе ', price: '580 mdl', link: '/'},
    {image: biopreparate, code: 'A60113573', title: 'LIQUAZYME концентрированный жидкий биопрепарат для профилактических и аварийных ', price: '580 mdl', link: '/'},
    {image: biopreparatetwo, code: 'A60113573', title: 'LIQUAZYME концентрированный жидкий биопрепарат для профилактических и аварийных ', price: '580 mdl', link: '/'}
  ]
  const bannersarray = [
    {image: bocki, title: 'Баннер', textcont: 'Сложно сказать, почему элементы политического процесса, инициированные исключительно.', link: '/'},
    {image: bocki, title: 'Баннер', textcont: 'Сложно сказать, почему элементы политического процесса, инициированные исключительно.', link: '/'}
  ]
  const newsarray = [
    {image: cleaning, title: 'А ещё представители современных социальных резервов призывают нас к новым.', textcont: 'Но перспективное планирование, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для инновационных методов управления процессами. Но реплицированные с.', date: 'пятница, 04 февраля 2022', link: '/'},
    {image: cleaning, title: 'А ещё представители современных социальных резервов призывают нас к новым.', textcont: 'Но перспективное планирование, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для инновационных методов управления процессами. Но реплицированные с.', date: 'пятница, 04 февраля 2022', link: '/'},
    {image: cleaning, title: 'А ещё представители современных социальных резервов призывают нас к новым.', textcont: 'Но перспективное планирование, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для инновационных методов управления процессами. Но реплицированные с.', date: 'пятница, 04 февраля 2022', link: '/'},
  ]
  const solvingsarray = [
    {image: solvingImage, title: 'А ещё представители современных социальных резервов призывают ', link: '/'},
    {image: solvingImage, title: 'А ещё представители современных социальных резервов призывают нас к новым.', link: '/'},
    {image: solvingImage, title: 'А ещё представители современных социальныхс к новым.', link: '/'},
  ]
  const itemsarray = [
    {image: clock, title: 'А также акционеры', textcont: 'Учитывая ключевые сценарии поведения, начало повседневной работы по формированию позиции создаёт финансовых.'},
    {image: clock, title: 'А также акционеры', textcont: 'Учитывая ключевые сценарии поведения, начало повседневной работы по формированию позиции создаёт финансовых.'},
    {image: clock, title: 'А также акционеры', textcont: 'Учитывая ключевые сценарии поведения, начало повседневной работы по формированию позиции создаёт финансовых.'},
    {image: clock, title: 'А также акционеры', textcont: 'Учитывая ключевые сценарии поведения, начало повседневной работы по формированию позиции создаёт финансовых.'},
    {image: clock, title: 'А также акционеры', textcont: 'Учитывая ключевые сценарии поведения, начало повседневной работы по формированию позиции создаёт финансовых.'},
    {image: clock, title: 'А также акционеры', textcont: 'Учитывая ключевые сценарии поведения, начало повседневной работы по формированию позиции создаёт финансовых.'},
  ]
  return (
    <div className="MainPage">
      <Header />
      <div className="NavigationContainer">
        <div className="contentBanner">
          <div className="contentContainer">
            <div className="filtered"></div>
            <div className="subContainer">
            <h2>Внезапно, представители.</h2>
            <p className="mb-60">А ещё стремящиеся вытеснить традиционное производство, нанотехнологии, вне зависимости от их уровня, должны быть заблокированы в рамках своих собственных рациональных ограничений.</p>
            <Button content={'Посмотреть детали'} customClass={'h-50 text-13'}  link='/' />
            </div>
          </div>
        </div>
        <div className="newProducts">
          <div className="newproductsContainer">
            <h2>Новинки</h2>
            <div className="productsContainer">
              {productsarray.map((el) => (
                <div className="product">
                  <img src={el.image} alt={el.image} />
                  <div className="textBlock">
                    <p className='codeproduct'>{el.code}</p>
                    <p className='title'>{el.title}</p>
                  </div>
                  <div className='priceBlock'>
                    <p>{el.price}</p>
                    <Button content={'Детали'} customClass={'h-33 text-xs'} link={el.link} />
                  </div>
                </div>
              ))}
            </div>
            <div className="bannersContainer">
              {bannersarray.map((el) => (
                  <div className="banner">
                    <div className="textBlock">
                      <h3 className='title'>{el.title}</h3>
                      <p className='textcont'>{el.textcont}</p>
                    </div>
                    <img src={el.image} alt={el.image} />
                    <Button content={'Посмотреть детали'} customClass={'h-33 text-xs'} link={el.link} />
                  </div>
                ))}
            </div>
          </div>
        
        </div>
        <div className="benefits">
          <h2>Наши преимущества</h2>
            <div className="items">
              {itemsarray.map((el) => (
                <div className="item">
                  <img src={el.image} alt={el.image} />
                  <div className="image">
                    <h3 className='title'>{el.title}</h3>
                    <p className='textcont'>{el.textcont}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div className="solving">
          <div className="solvingContainer">
            <h2>Решение и способы</h2>
            <p className='text'>Учитывая ключевые сценарии поведения, укрепление и развитие внутренней труктуры требует анализа инновационных методов управления процессами.</p>
            <div className="contentBlock">
              {solvingsarray.map((el) => (
                <div className="solvingItem">
                  <img src={el.image} alt={el.image} />
                  <p>{el.title}</p>
                  <a href={el.link}>Детали <img src={arrow} alt={arrow} /></a>
                </div>
              ))}
            </div>
            <a link='/' className='arrows'>
              <p>Посмотреть другие видео</p>
              <img src={arrows} alt={arrows} />
            </a>
          </div>
        </div>
        <div className="news">
          <div className="newsContainer">
            <h2>Новости</h2>
            <div className="newsList">
                {newsarray.map((el) => (
                  <div className="newsItem">
                    <img src={el.image} alt={el.image} />
                    <p className='font-medium'>{el.title}</p>
                    <p>{el.textcont}</p>
                    <div className="row">
                      <p>{el.date}</p>
                      <a href={el.link}>Детали <img src={arrow} alt={arrow} /></a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="companies">
          {
            companiesarray.map((el) => (
              <img src={el.src} alt={el.src} />
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mainpage;

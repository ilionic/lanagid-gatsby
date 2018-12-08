import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Прогулка по старому городу', description: 'Приглашаю Вас познакомиться с несравненной, загадочной и вечно прекрасной Ригой. Во время экскурсии вы узнаете как строился и развивался город - крепость. Куда подевалась река Рига, именем которой назван город. Послушаете рассказ об улочках города, как и почему они названы, какие функции выполняли. Увидете самое старое каменное здание города - церковь святого Георгия, единственное что осталось от первого замка рыцарей – крестоносцев. Вы узнаете о том как жили рыцари. Мы посмотрим в каких домах жили рижане. Как эти дома строились и в каких архитектурных стилях. Какими ремёслами занимались горожане. Мы увидим достопримечательности и удивительные места Старого города. Я расскажу вам легенды и сказки о Риге. Будет интересно и познавательно! Конечно, будут приятные сюрпризы!'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Югенд стиль', description: 'Настоящим сокровищем города являются здания, построенные в стиле модерн. Мы пройдем по улицам Риги и полюбуемся роскошными фасадами домов.Вы увидите самые красивые здания именитых архитекторов. Продолжительность экскурсии 2 часа.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Рундальский дворец', description: 'Рундальский дворец (буквально — «Долина спокойствия») — загородная резиденция герцогов Курляндии. Выстроен в стиле барокко по проекту Растрелли. За дополнительной информацией, пожалуйста, обращайтесь.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Сигулда', description: 'Сигулда - один из самых красивых городов Латвии. Богатая событиями история оставила вокруг Сигулды замки и крепости. За дополнительной информацией, пожалуйста, обращайтесь.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Юрмала', description: 'Юрмала - крупнейший город-курорт Латвии и стран Балтии, находится в 25 км от Риги. Это длинная полоса между Рижским заливом и рекой Лиелупе. За дополнительной информацией, пожалуйста, обращайтесь.'},
  
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Добро пожаловать в Латвию!<br /></h2>
                        </header>
                        <p>ОБО МНЕ: Я живу в Риге более 30 лет и очень люблю свой город. Все это время с большим удовольствием показывала и рассказывала о Риге своим друзьям и знакомым из России, пока не появилось желание делать это профессионально. Я закончила школу гидов и получила сертификат Рижской думы на проведение экскурсий по Риге. Моя основная профессия стилист - дизайнер одежды и украшений. Увлекаюсь путешествиями - люблю бывать во Франции, Италии, Голландии, России и Прибалтике. Занимаюсь йогой и изучаю французский язык. Коммуникабельна.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>ЭКСКУРСИИ</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p> Продолжительность экскурсии 2 часа, в удобное для Вас время. Проводятся с небольшими группами.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"></h3>
                                        Светлана Дворникова
                                
                                       
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        + 371 26851465
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">svetagid@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
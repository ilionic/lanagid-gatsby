import React from 'react'
import Helmet from 'react-helmet'
import InstagramEmbed from 'react-instagram-embed'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/1.jpg'
import thumb02 from '../assets/images/thumbs/2.jpg'
import thumb03 from '../assets/images/thumbs/3.jpg'
import thumb04 from '../assets/images/thumbs/4.jpg'
import thumb05 from '../assets/images/thumbs/5.jpg'
import thumb06 from '../assets/images/thumbs/6.jpg'
import thumb07 from '../assets/images/thumbs/7.jpg'


import full01 from '../assets/images/fulls/1.jpg'
import full02 from '../assets/images/fulls/2.jpg'
import full03 from '../assets/images/fulls/3.jpg'
import full04 from '../assets/images/fulls/4.jpg'
import full05 from '../assets/images/fulls/5.jpg'
import full06 from '../assets/images/fulls/6.jpg'
import full07 from '../assets/images/fulls/7.jpg'



const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Прогулка по старому городу', description: 'Приглашаю Вас познакомиться с несравненной, загадочной и вечно прекрасной Ригой. Во время экскурсии вы узнаете как строился и развивался город - крепость. Куда подевалась река Рига, именем которой назван город.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Югенд стиль', description: 'Настоящим сокровищем города являются здания, построенные в стиле модерн. Мы пройдем по улицам Риги и полюбуемся роскошными фасадами домов.Вы увидите самые красивые здания именитых архитекторов. Продолжительность экскурсии 2 часа.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Рассказы фонарей о Старой Риге', description: 'Вечерняя экскурсия «Рассказы фонарей о Старой Риге». Сказки, легенды и истории, рассказанные рижскими фонарями.'},
    { id: '7', src: full07, thumbnail: thumb07, caption: 'Экскурсия- квест', description: 'Флора и фауна на домах и улицах Старого города. Увидим и узнаем- какие животные, птицы, рыбы и растения живут на зданиях и о чем они говорят.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Юрмала', description: 'Юрмала - крупнейший город-курорт Латвии и стран Балтии, находится в 25 км от Риги. Это длинная полоса между Рижским заливом и рекой Лиелупе. За дополнительной информацией, пожалуйста, обращайтесь.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Рундальский дворец', description: 'Рундальский дворец (буквально — «Долина спокойствия») — загородная резиденция герцогов Курляндии. Выстроен в стиле барокко по проекту Растрелли. За дополнительной информацией, пожалуйста, обращайтесь.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Сигулда', description: 'Сигулда - один из самых красивых городов Латвии. Богатая событиями история оставила вокруг Сигулды замки и крепости. За дополнительной информацией, пожалуйста, обращайтесь.'},

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
        const siteTitle = "Svetlana Riga guide - гид по Риге"
        const siteDescription = "Сертифицированный частный гид Светлана рада встретить Вас в Риге"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                        <meta name="google-site-verification" content="SZgtHDmPzzwthD-Jf3qLmkTJMEsACcRT4I9zXedGBWU" />
                        <meta name="google-site-verification" content="SZgtHDmPzzwthD-Jf3qLmkTJMEsACcRT4I9zXedGBWU" />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Добро пожаловать в Латвию!<br /></h2>
                        </header>
                        <p>Меня зовут Светлана. Я живу в Риге более 35 лет и влюблена в свой город. Все это время с большим удовольствием показывала и рассказывала о городе своим друзьям и знакомым, которые приезжали в Ригу, затем появилось желание делать это профессионально. Я закончила лицензированную школу гидов и получила сертификат Рижской думы на проведение экскурсий. Я знаю историю, сказки и легенды о Риге и провожу прогулки по нестандартным маршрутам и интересным местам. Умею общаться с детьми, подростками и взрослыми. Увлекаюсь путешествиями, занимаюсь йогой и изучаю английский язык.</p>
                        
                    </section>

                    <section id="two">
                        <h2>ЭКСКУРСИИ</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                    </section>

                    <section id="three">
                        <p> Продолжительность экскурсии 2 часа, в удобное для Вас время. Проводятся с небольшими группами.</p>
                        <h2>КОНТАКТ</h2>
                        <div className="row">
                            <div className="12u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"></h3>
                                        Светлана Дворникова
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        <a href="tel:+37126851465">+371 26851465</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:svetagid@gmail.com" target="_blank" >svetagid@gmail.com</a>
                                    </li>
                                </ul>
                                <InstagramEmbed
                                    url='https://instagr.am/p/BqvAxytAx1B/'
                                    maxWidth={320}
                                    hideCaption={false}
                                    containerTagName='div'
                                    protocol=''
                                    injectScript
                                    onLoading={() => {}}
                                    onSuccess={() => {}}
                                    onAfterRender={() => {}}
                                    onFailure={() => {}}
                                    />
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
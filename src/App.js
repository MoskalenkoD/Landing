import logo from './logo.svg';
import './styles/bootstrap.min.css';
import './styles/App.css';

function App() {

    function showProfession(e) {
        e.preventDefault();
        let clone = e.currentTarget.cloneNode(true);
        clone.classList.add('modal');
        clone.classList.add('col');
        clone.classList.remove('col-lg-3');
        clone.classList.remove('col-md-6');
        clone.classList.remove('col-sm-12');
        clone.classList.remove('mt-5');
        let shadow = document.createElement('div');
        shadow.classList.add('shadow');
        document.querySelector('.App').append(clone);
        document.querySelector('.App').append(shadow);

        document.querySelector('.shadow').addEventListener('click', () => {
            let appBlock = document.querySelector('.App');
            appBlock.querySelector('.modal').remove();
            appBlock.querySelector('.shadow').remove();
        });
    }

    function showAllText(e) {
        e.preventDefault();
        let clone = e.currentTarget.cloneNode(true);
        let text = clone.querySelector('.module-text .hide')
        text.classList.add('modal');
        text.classList.add('col');
        text.classList.remove('hide');
        let shadow = document.createElement('div');
        shadow.classList.add('shadow');
        document.querySelector('.App').append(text);
        document.querySelector('.App').append(shadow);

        document.querySelector('.shadow').addEventListener('click', () => {
            let appBlock = document.querySelector('.App');
            appBlock.querySelector('.modal').remove();
            appBlock.querySelector('.shadow').remove();
        });
    }

    return (
        <div className="App">
            <div className="header video-background">
                <img src='./source/background.jpg'/>
                <video autoPlay muted loop>
                    <source src="../source/background.MP4" type="video/mp4"></source>
                </video>
                <h2>Онлайн-курс</h2>
                <h1>Профессия <b>3D artist</b></h1>
                <h4>Получи дистанционную работу в кино и видеоиграх</h4>
            </div>
            <div className="block1 container">
                <div className="row">
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> 6 месяцев и новая дистанционная профессия.</p>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> 7 профильных программ от maya до Unreal Engine.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> Нескучные курсы для тех кто хочет освоить 3D. </p>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <p><label>&#9632;</label> Индивидуальное курирование от старта до поиска работы.</p>
                    </div>
                </div>

                <div className="row mt-5 ">
                    <div className="col col-12">
                        <h4>Добро пожаловать в 3D вселенную!) От 3D визуализации в играх, кино и архитектуре, до
                            создания блокчейн itemов и воплощения виртуальных миров в мета вселенных.</h4>
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-6 m-auto">
                        <h2 className='quest'>Кем ты станешь после курса:</h2>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block" style={{backgroundImage: "url(./source/professions1.jpg)"}}>
                            <img src='./source/professions1.jpg' title='Image professions1.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D Environment Artist</h2>
                        <p className='descriptions'>Создание локаций для игр и фильмов. Ты будешь моделировать миры
                            начиная
                            с детализированных предметов и заканчивая разнообразными масштабными локациями окружающей
                            среды
                            с освещением в них. Это профессия особенно крутая, потому что сейчас многие идут в
                            персонажку,
                            а у 3D environment artist меньше конкуренции и выше оплата.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block" style={{backgroundImage: "url(./source/professions2.jpg)"}}>
                            <img src='./source/professions2.jpg' title='Image professions2.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D Modeler</h2>
                        <p className='descriptions'>Востребованная профессия идеальна для начала карьеры. Ты будешь
                            моделить
                            многое от персонажей до небольших объектов, тебе не всегда надо будет прорабатывать модели
                            детально,
                            часто профессия совмещается с другими 3D профессиями.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block" style={{backgroundImage: "url(./source/professions3.jpg)"}}>
                            <img src='./source/professions3.png' title='Image professions3.png'/>
                        </div>
                        <h2 className='title mt-2'>3D Interior Artist</h2>
                        <p className='descriptions'>Создание интерьеров домов, квартир, окружения и ассетов,
                            представляющих
                            различные части интерьеров зданий. Будешь создавать полный интерьер от конструкций (стен,
                            окон,
                            комнат) до предметов интерьера (мебель, аксессуары, декор) и других элементов декора.
                            Архитектурные
                            бюро ждут тебя, а может ты мечтал сделать свой идеальный дом?</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block" style={{backgroundImage: "url(./source/professions4.jpg)"}}>
                            <img src='./source/professions4.jpg' title='Image professions4.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D Vehicle Artist</h2>
                        <p className='descriptions'>Создание техники, автомобилей, танков и прочей техники. Все
                            детализировано
                            и красиво. Просто крутая и необходимая профессия в сфере кино и игр.</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block" style={{backgroundImage: "url(./source/professions5.jpg)"}}>
                            <img src='./source/professions5.jpg' title='Image professions5.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D Printing Specialist</h2>
                        <p className='descriptions'>Создание 3D моделей для 3D печати. Такие специалисты нужны во всех
                            сферах
                            от архитектуры до медицины и сферы развлечений. Сейчас 3D печать все больше входит в
                            производства
                            почти всех отраслей и такие специалисты очень нужны.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block" style={{backgroundImage: "url(./source/professions6.jpg)"}}>
                            <img src='./source/professions6.jpg' title='Image professions6.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D Props Artist</h2>
                        <p className='descriptions'>Создание маленьких или средних объектов. Изготовление реквизита от
                            украшений
                            до оружия и даже движущихся моделей. Ты будешь работать с различными материалами и
                            текстурами,
                            включая металл, латекс, стекловолокно, дерево и текстиль.
                            Круто если ты любишь работать с деталями. Такой специалист необходим в играх, кино и на
                            разработках
                            моделей на различных производствах.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block" style={{backgroundImage: "url(./source/professions7.jpg)"}}>
                            <img src='./source/professions7.jpg' title='Image professions7.jpg'/>
                        </div>
                        <h2 className='title mt-2'>3D Generalist</h2>
                        <p className='descriptions'>Профессия, подходящая для специалистов с небольшим опытом. Роль 3D
                            Generalist варьируется от студии к студии. Однако на большинстве должностей универсалы
                            отвечают
                            за моделирование, оснастку, анимацию, захват движения, рисование и скульптуру. От 3D
                            Generalist
                            не ожидается, что он будет экспертом во всех областях, но ожидается, что он обладает
                            базовыми
                            знаниями в различных нишах.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 professions mt-5" onClick={showProfession}>
                        <div className="image-block" style={{backgroundImage: "url(./source/professions8.jpg)"}}>
                            <img src='./source/professions8.png' title='Image professions8.png'/>
                        </div>
                        <h2 className='title mt-2'>3D Conсept Artist</h2>
                        <p className='descriptions'>Ты будешь использовать моделирование для визуализации идей и
                            создания
                            изображений для цифровой среды, персонажей, существ и многих других ресурсов. Часто ты
                            будешь
                            собирать сцены из готовых моделей. В этой профессии важна скорость и творчество умение
                            придумывать
                            идеи и воплощать в жизнь.</p>
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-12 m-auto paywork">
                        <h2 className='pay'>Средняя заработная плата: <p>125 000р в России</p> <p>7 000$ по Миру</p>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="block2 mb-5">
                <div className="spider-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="text col-lg-6 col-md-6 col-sm-12">
                            <p>Ваш педагог:</p>
                            <p>Павел Иваненко.</p>
                            <p>Со стажем в 3D - 12 лет. </p>
                            <p>Опыт преподавания 3D - 5 лет</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="image-block">
                                <img src='./source/ava.JPG' title='Павел Иваненко фото'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block3 container">
                <div className="row justify-content-md-center mt-5">
                    <div className="col col-12 m-auto">
                        <h2 className="example">Работал с такими проектами как :</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col col-4 col-lg-4 col-md-4 col-sm-4 slider">
                        <div className="image-block">
                            <img src='./source/sl1.JPG' title='Игра престолов'/>
                        </div>
                    </div>
                    <div className="col col-4 col-lg-4 col-md-4 col-sm-4 slider">
                        <div className="image-block">
                            <img src='./source/sl2.JPG' title='Дракула'/>
                        </div>
                    </div>
                    <div className="col col-4 col-lg-4 col-md-4 col-sm-4 slider">
                        <div className="image-block">
                            <img src='./source/sl3.JPG' title='Villain'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block4 mt-5">
                <div className="spider-bg"></div>
                <div className="container">
                    <div className="row justify-content-md-center mt-5">
                        <div className="col col-12 m-auto">
                            <h2 className="module">Модули обучения :</h2>
                        </div>
                    </div>
                    <div className="row module-item mt-5 mb-3" onClick={showAllText}>
                        <div className="col-lg-3 col-md-3 col-sm-3 module-num">
                            <h2>Модуль <b>1</b></h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 module-text">
                            <p>Работа в Maya. В конце этого модуля ты будешь уметь делать базовые фигуры и
                                высокополигональные модели.</p>
                            <p className="hide">
                                МОДУЛЬ 1
                                в этом модуле мы познакомимся с базовым 3Д пакетом (программой) для моделирования,
                                научимся
                                создавать и редактировать примитивы и создавать различные сложные объекты с учетом всех
                                мельчайших особенностей. Так же в этом модуле мы научимся работать с базовой анимацией а
                                так
                                же познакомимся с рендерингом (получением финального изображения или видео)</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3" >
                            <div className="image-block">
                                <img src='./source/module/module1.jpg' title='Модуль 1'/>
                            </div>
                        </div>
                    </div>
                    <div className="row module-item mb-3" onClick={showAllText}>
                        <div className="col-lg-3 col-md-3 col-sm-3 module-num">
                            <h2>Модуль <b>2</b></h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 module-text">
                            <p>Полный цикл создания моделей для высокобюджетных игр в мультяшном стиле.</p>
                            <p className="hide">МОДУЛЬ 2
                                в этом модуле мы познакомимся со способами по созданию очень высокодетализированных
                                моделей
                                в мультяшном стиле. Познакомимся с с элементами скульптинга в 3д при помощи планшета или
                                мышки (лучше конечно планшета). Так же научимся покрашивать модель и рендерить ее уже в
                                другой программе по другому пайплайну, и так же познакомимся немного с фотошопом.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="image-block">
                                <img src='./source/module/module2.jpg' title='Модуль 2'/>
                            </div>
                        </div>
                    </div>
                    <div className="row module-item mb-3" onClick={showAllText}>
                        <div className="col-lg-3 col-md-3 col-sm-3 module-num">
                            <h2>Модуль <b>3</b></h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 module-text">
                            <p>Полный цикл создания моделей высокобюджетных игр в реалистичном стиле.</p>
                            <p className="hide">МОДУЛЬ 3
                                Здесь мы познакомимся с особенностями быстрого моделирования реалистичного предмета и
                                дальнейшую его обработку для более высокодетализированной обработки, так же добавим
                                мелкую
                                детализацию (сколы, царапины, средние повреждения и шероховатости) для более
                                реалистичной и
                                качественной картинки. И так же сделаем Рендеры нашей Высокополигональной
                                (детализированной)
                                модели.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="image-block">
                                <img src='./source/module/module3.jpg' title='Модуль 3'/>
                            </div>
                        </div>
                    </div>
                    <div className="row module-item mb-3" onClick={showAllText}>
                        <div className="col-lg-3 col-md-3 col-sm-3 module-num">
                            <h2>Модуль <b>4</b></h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 module-text">
                            <p>Оптимизация моделей для дальнейшего текстурирования.</p>
                            <p className="hide">МОДУЛЬ 4
                                В этом модуле мы займемся оптимизации модели и ее подготовкой для дальнейшего
                                текстурировани
                                (нанесения цвета и прочих нюансов типо потертостей, грязи и прочего).
                                Здесь мы будем очень плотно работать с сеткой, заниматься тестированием модели, будет
                                проходить полный QA.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="image-block">
                                <img src='./source/module/module4.jpg' title='Модуль 4'/>
                            </div>
                        </div>
                    </div>
                    <div className="row module-item mb-3" onClick={showAllText}>
                        <div className="col-lg-3 col-md-3 col-sm-3 module-num">
                            <h2>Модуль <b>5</b></h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 module-text">
                            <p>Полное текстурирование и высокодеталезированная покраска</p>
                            <p className="hide">МОДУЛЬ 5
                                Здесь мы будем заниматься покраской нашей модели, познакомимся с различными пайплайнами
                                от
                                стилизованного то реализма. Научимся работать в фотошопе а так же делать свои текстуры
                                для
                                текстурирования реалистичной модели. Помимо этого мы сделаем рендеры модели в
                                пейнтере.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="image-block">
                                <img src='./source/module/module5.jpg' title='Модуль 5'/>
                            </div>
                        </div>
                    </div>
                    <div className="row module-item mb-3" onClick={showAllText}>
                        <div className="col-lg-3 col-md-3 col-sm-3 module-num">
                            <h2>Модуль <b>6</b></h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 module-text">
                            <p>Создание одежды и для персонажей. Выкройки</p>
                            <p className="hide">МОДУЛЬ 6
                                В этом модуле мы познакомимся с мощной программой для создания и симуляции ткани, она
                                используется в современной игровой и кино индустрии. Познакомимся с выкройками а так же
                                поближе познакомимся с рендером в данной программе и использованием сторонних анимаций
                                для
                                создания модельного подиума.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="image-block">
                                <img src='./source/module/module1.jpg' title='Модуль 6'/>
                            </div>
                        </div>
                    </div>
                    <div className="row module-item mb-3" onClick={showAllText}>
                        <div className="col-lg-3 col-md-3 col-sm-3 module-num">
                            <h2>Модуль <b>7</b></h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 module-text">
                            <p>Растительность в играх.</p>
                            <p className="hide">МОДУЛЬ 7
                                В этом модуле мы научимся делать различные виды растителостей в различной стилях (как
                                реализм так и стилизация). Познакомимся с различными пайплайнами которые сейчас
                                используются
                                в играх и фильмах а так же сделаем соптимизированныю модель растительности</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="image-block">
                                <img src='./source/module/module2.jpg' title='Модуль 7'/>
                            </div>
                        </div>
                    </div>
                    <div className="row module-item mb-3" onClick={showAllText}>
                        <div className="col-lg-3 col-md-3 col-sm-3 module-num">
                            <h2>Модуль <b>8</b></h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 module-text">
                            <p>Создание локаций.</p>
                            <p className="hide">МОДУЛЬ 8
                                В этом модуле мы познакомимся с одним из самых новейших и используемых игровых движков
                                для
                                ПК и консолей. Мы научимся создавать игровые уровне, работать с материалами и создавать
                                простые блюпринты для нашего окружения (это больше из программирования, по сути
                                небольшой
                                кусочек кода сделанный с помощью визуального программирования).</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="image-block">
                                <img src='./source/module/module3.jpg' title='Модуль 8'/>
                            </div>
                        </div>
                    </div>
                    <div className="row module-item mb-3" onClick={showAllText}>
                        <div className="col-lg-3 col-md-3 col-sm-3 module-num">
                            <h2>Модуль <b>9</b></h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 module-text">
                            <p>Полный рендер всего.</p>
                            <p className="hide">МОДУЛЬ 9
                                В этом модуле мы будем заниматься рендером (получением финального изображения или видео)
                                а
                                так же их дальнейшей обработкой в фотошопе или программой для обработки видео. Так же
                                научимся выставлять свет внутри виртуальной сцены и редактировать его.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="image-block">
                                <img src='./source/module/module4.jpg' title='Модуль 9'/>
                            </div>
                        </div>
                    </div>
                    <div className="row module-item mb-3" onClick={showAllText}>
                        <div className="col-lg-3 col-md-3 col-sm-3 module-num">
                            <h2>Модуль <b>10</b></h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 module-text">
                            <p>Карьерная работа. Как составить резюме подать себя и найти работу.</p>
                            <p className="hide"></p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="image-block">
                                <img src='./source/module/module5.jpg' title='Модуль 10'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block7 uk-container">
                <div className="col-12 mt-3">
                    <h2 className="mb-5">Работы учеников: </h2>
                    <div className="uk-child-width-1-2" uk-grid="" uk-lightbox="animation: slide">
                        <div className="uk-first-column">
                            <div className="uk-child-width-1-3" uk-grid="">
                                <div className="uk-first-column">
                                    <div className="uk-child-width-1-1" uk-grid>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/11.jpg"
                                               data-caption="Caption 1">
                                                <img src="./source/slider/11.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/12.jpg"
                                               data-caption="Caption 2">
                                                <img src="./source/slider/12.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/13.jpg"
                                               data-caption="Caption 3">
                                                <img src="./source/slider/13.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/14.jpg"
                                               data-caption="Caption 4">
                                                <img src="./source/slider/14.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-child-width-1-1" uk-grid>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/11.jpg"
                                               data-caption="Caption 1">
                                                <img src="./source/slider/11.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/12.jpg"
                                               data-caption="Caption 2">
                                                <img src="./source/slider/12.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/13.jpg"
                                               data-caption="Caption 3">
                                                <img src="./source/slider/13.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/14.jpg"
                                               data-caption="Caption 4">
                                                <img src="./source/slider/14.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-child-width-1-1" uk-grid>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/11.jpg"
                                               data-caption="Caption 1">
                                                <img src="./source/slider/11.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/12.jpg"
                                               data-caption="Caption 2">
                                                <img src="./source/slider/12.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/13.jpg"
                                               data-caption="Caption 3">
                                                <img src="./source/slider/13.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                        <div>
                                            <a className="uk-inline" href="./source/slider/14.jpg"
                                               data-caption="Caption 4">
                                                <img src="./source/slider/14.jpg" width="1800" height="1200" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                            <div className="uk-child-width-1-1" uk-grid="">
                                <div className="uk-width-1-1 uk-height-small">
                                    <a className="uk-inline" href="./source/slider/22.jpg"
                                       data-caption="Caption 1">
                                        <img src="./source/slider/22.jpg" width="1800" height="1200" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="uk-child-width-1-1" uk-grid="">
                                <div className="uk-width-1-1 uk-height-small">
                                    <a className="uk-inline" href="./source/slider/23.jpg"
                                       data-caption="Caption 1">
                                        <img src="./source/slider/23.jpg" width="1800" height="1200" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="uk-child-width-1-2" uk-grid="">
                                <div className="uk-first-column">
                                    <div className="uk-width-1-1 uk-height-small">
                                        <a className="uk-inline" href="./source/slider/31.jpg"
                                           data-caption="Caption 1">
                                            <img src="./source/slider/31.jpg" width="1800" height="1200" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-width-1-1 uk-height-small">
                                        <a className="uk-inline" href="./source/slider/32.jpg"
                                           data-caption="Caption 1">
                                            <img src="./source/slider/32.jpg" width="1800" height="1200" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

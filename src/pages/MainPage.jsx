import React from "react";
import { Slider } from "./components/Slider";
import { SwiperSlide } from "swiper/react";
import "./MainPage.scss";

//! images import !//

import zam1 from "../images/zam1.jpeg"
import zam2 from "../images/zam2.jpg"
import zam3 from "../images/zam3.jpeg"
import zam4 from "../images/zam4.jpeg"

//* ------------ * //

import slider1 from "../images/slider/1.jpeg"
import slider2 from "../images/slider/2.jpeg"
import slider3 from "../images/slider/3.jpeg"
import slider4 from "../images/slider/4.jpeg"
import slider5 from "../images/slider/5.jpeg"
import slider6 from "../images/slider/6.jpeg"
import slider7 from "../images/slider/7.jpg"
import slider8 from "../images/slider/8.jpeg"
import slider9 from "../images/slider/9.jpeg"

//* ------------ * //

import rector from "../images/rektor_1.jpeg"

//! <-----------> !//

const zams = [
  {
    img: zam1,
    pos: "Проректор по учебной и методической работе",
    name: "Демидова Елена Евгеньевна",
    tel: "8(499)237-55-40",
  },
  {
    img: zam2,
    pos: "Первый проректор - кандидат педагогических наук",
    name: "Казакова Светлана Николаевна",
    tel: "8(499)237-55-40",
  },
  {
    img: zam3,
    pos: "Проректор по научной работе - доктор биологических наук",
    name: "Микулец Юрий Иванович",
    tel: "8(499)237-57-01",
  },
  {
    img: zam4,
    pos: "Проректор по воспитательной работе",
    name: "Мочалова Марина Валентиновна",
    tel: "8(499)237-55-40",
  },
];

export const MainPage = () => {
  return (
    <main className="container">
      <Slider w={900} h={400}>
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider9} alt="" />
        </SwiperSlide>
      </Slider>
      <div className="mainpage_info">
        <h2 className="top_title">
          МОСКОВСКИЙ ГУМАНИТАРНО-ЭКОНОМИЧЕСКИЙ УНИВЕРСИТЕТ
        </h2>
        <p className="mainpage_info_p">
          С 1994 года Московский гуманитарно-экономический университет
          принимает желающих получить образование – среднее
          профессиональное, высшее, второе высшее либо дополнительное. Мы
          находимся в Москве, а также у нас есть 14 филиалов в различных
          городах РФ. Жители дальних регионов могут обучатся дистанционно.
        </p>
      </div>
      <div className="rector">
        <h2 className="top_title">РЕКТОР</h2>
        <div className="rector_img">
          <img src={rector} alt="" />
          <h2 className="rector_name">
            Демидова Любовь Анисимовна ректор Московского
            гуманитарно-экономического университета доктор педагогических
            наук, профессор
          </h2>
        </div>
        <p className="rector_p">
          Л. А. Демидова родилась 22 апреля 1945 года в Харьковской
          области. В 1968 году окончила Харьковский государственный
          педагогический институт им. Г. С. Сковороды. За годы многолетней
          трудовой деятельности прошла путь от учителя средней школы до
          специалиста первой категории Главного управления высшего
          образования Государственного Комитета СССР по народному
          образованию. За время трудового стажа неоднократно награждалась
          грамотами, благодарностями, знаком «Отличник образования» и
          медалью К.Д. Ушинского «За достижения в области педагогики».
        </p>
        <p className="rector_p">
          С 15 марта 1994 года и по настоящее время является ректором МГЭУ.
        </p>
        <p className="rector_p">
          В 2003 году Л. А. Демидовой защищена кандидатская диссертация на
          соискание ученой степени кандидата педагогических наук по теме:
          «Совершенствование образовательного процесса в негосударственной
          высшей школе». В 2005 году решением Министерства образования
          Российской Федерации присвоено ученое звание доцента по кафедре
          педагогики.
        </p>
        <p className="rector_p">
          В 2009 году Л.А. Демидова защитила диссертацию на соискание
          ученой степени доктора педагогических наук по теме: «Развитие
          высшего профессионального образования студентов в
          негосударственных вузах РФ». Является автором более 50 научных и
          учебно-методических работ, в том числе трех монографий и трех
          учебников. Является научным руководителем аспирантов и
          соискателей.
        </p>
        <p className="rector_p">
          Имеет двух дочерей и четырех внуков. Любит путешествовать.
        </p>
        <h3 style={{ margin: "2rem 0" }}>Контактная информация</h3>
        <div className="rector_contact">
          <div>
            <p>Адрес:</p>
            <p>График работы:</p>
            <p>Прием посетителей:</p>
            <p>Тел.:</p>
            <p>E-mail:</p>
          </div>
          <div>
            <p>119049, Москва, Ленинский проспект, д.8, стр.16, каб.211</p>
            <p>
              Понедельник-Пятница с 10.00-18.00,{" "}
              <span>перерыв с 13.00 до 14.00</span>
            </p>
            <p>Вторник-Четверг с 14.00 до 17.00</p>
            <p>8 (499) 237-55-40</p>
            <a href="mailto:demidovaee@mail.ru">demidovaee@mail.ru</a>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="zam">
        {zams.map((zam) => (
          <div>
            <img src={zam.img} alt="" />
            <p>{zam.pos}</p>
            <p>{zam.name}</p>
            <p>{zam.tel}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

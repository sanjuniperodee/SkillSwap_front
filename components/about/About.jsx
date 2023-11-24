import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
        <div className="inner-column " data-aos="fade-left">
          <div className="sec-title">
            <h2>Огромное количество курсов. Найдите тот, который подходит именно вам.</h2>
            <div className="text">
              Поиск всех доступных онлайн и оффлайн обучении. Получите персональную оценку способностей.
            </div>
          </div>
          <ul className="list-style-one">
            <li>Развивайте свой потенциал с курсами.</li>
            <li>Научитесь на этом зарабатывать</li>
            <li>Откройте свою карьеру в мире гиг-экономики.</li>
          </ul>
          <Link href="/register" className="theme-btn btn-style-one bg-blue">
            <span className="btn-title">Начать поиск</span>
          </Link>
        </div>
      </div>
      {/* End .col about left content */}

      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <figure className="image" data-aos="fade-right">
          <Image
            width={600}
            height={600}
            src="/images/resource/image-2.jpg"
            alt="about"
          />
        </figure>

        {/* <!-- Count Employers --> */}
        <div className="count-employers " data-aos="flip-right">
          <div className="check-box">
            <span className="flaticon-tick"></span>
          </div>
          <span className="title">100+ работодателей</span>
          <figure className="image">
            <Image
              width={234}
              height={61}
              layout="responsive"
              src="/images/resource/multi-logo.png"
              alt="resource"
            />
          </figure>
        </div>
      </div>
      {/* <!-- Image Column --> */}
    </>
  );
};

export default About;

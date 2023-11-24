const JobOverView = (param) => {
  return (
    <div className="widget-content">
      <ul className="job-overview">
        <li>
          <i className="icon icon-calendar"></i>
          <h5>Выложено:</h5>
          <span>{param.posted.substring(0, 10)}</span>
        </li>
        <li>
          <i className="icon icon-expiry"></i>
          <h5>Актуальна до:</h5>
          <span>{param.expires.substring(0, 10)}</span>
        </li>
        <li>
          <i className="icon icon-location"></i>
          <h5>Расположение:</h5>
          <span>{param.location}</span>
        </li>
        <li>
          <i className="icon icon-user-2"></i>
          <h5>Категория:</h5>
          <span>{param.category}</span>
        </li>
        {/*<li>*/}
        {/*  <i className="icon icon-clock"></i>*/}
        {/*  <h5>Hours:</h5>*/}
        {/*  <span>50h / week</span>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <i className="icon icon-rate"></i>*/}
        {/*  <h5>Rate:</h5>*/}
        {/*  <span>$15 - $25 / hour</span>*/}
        {/*</li>*/}
        <li>
          <i className="icon icon-salary"></i>
          <h5>Оплата:</h5>
          <span>{param.salary}$</span>
        </li>
      </ul>
    </div>
  );
};

export default JobOverView;

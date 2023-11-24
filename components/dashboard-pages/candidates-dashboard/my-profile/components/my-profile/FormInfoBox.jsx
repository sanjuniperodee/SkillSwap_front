
'use client'

import Select from "react-select";

const FormInfoBox = (props) => {
  const catOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  return (
    <form action="#" className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Имя</label>
          <input type="text" name="name" placeholder={props.user.first_name} value={props.user.first_name} required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Фамилия</label>
          <input type="text" name="name" placeholder={props.user.last_name} value={props.user.last_name}  required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Номер телефона</label>
          <input
            type="text"
            name="name"
            placeholder="+7-(708)-242-04-82"
            value={props.user.phone_number}
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Электронная почта</label>
          <input
            type="text"
            name="name"
            placeholder="admin@gmail.com"
            value={props.user.email}
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Education Levels</label>
          <input type="text" name="name" placeholder="Certificate" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Languages</label>
          <input
            type="text"
            name="name"
            placeholder="English, Turkish"
            required
          />
        </div>

        {/* <!-- Search Select --> */}
        {/*<div className="form-group col-lg-6 col-md-12">*/}
        {/*  <label>Categories </label>*/}
        {/*  <Select*/}
        {/*    defaultValue={[catOptions[1]]}*/}
        {/*    isMulti*/}
        {/*    name="colors"*/}
        {/*    options={catOptions}*/}
        {/*    className="basic-multi-select"*/}
        {/*    classNamePrefix="select"*/}
        {/*    required*/}
        {/*  />*/}
        {/*</div>*/}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Allow In Search & Listing</label>
          <select className="chosen-single form-select" required>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea placeholder={props.user.description}></textarea>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;

import FormInfoBox from "./FormInfoBox";
import LogoUpload from "./LogoUpload";

const index = (props) => {
  return (
    <div className="widget-content">
      <LogoUpload />
      {/* End logo and cover photo components */}

      <FormInfoBox user={props.user} />
      {/* compnay info box */}
    </div>
  );
};

export default index;

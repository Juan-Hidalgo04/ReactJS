import "./button.css";

function ButtonComponent(props) {
    const {children, colorBack} = props;

    const styleButton = {
        backgroundColor: colorBack,
    };

    return (
      <div>
        <button style={styleButton} className="btn">{children} </button>
      </div>
    );
  }

export default ButtonComponent;
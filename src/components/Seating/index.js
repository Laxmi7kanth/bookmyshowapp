import "./index.css";

const Seating = (props) => {
  const { eachItem, onCheckBoxClick } = props;

  const onCheckBClick = () => {
    onCheckBoxClick(eachItem.id);
  };

  return (
    <li onClick={onCheckBClick} className="li">
      {eachItem.listItem}
    </li>
  );
};

export default Seating;

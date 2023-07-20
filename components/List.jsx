const List = (props) => {
  return (
      <li onClick={() => props.deleteItem(props.id)}>{props.text}</li>
  );
};

export default List;

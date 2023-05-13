import "../Chat/message.css"
const Message = (props) => {
  return (
    <textarea
      className="textArea"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default Message;






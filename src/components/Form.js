const Form = () => {
  return (
    <div className={"form"} id={"contact"}>
      <div className={"form-skewed"}></div>
      <form action="https://formspree.io/f/meqpvbay" method="POST">
        <input type="text" name="name" id="input-name" placeholder="name" />
        <input
          type="email"
          name="_replyto"
          id="input-email"
          placeholder="email"
        />
        <textarea
          name="message"
          id="input-message"
          placeholder="your message"
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="abfahrt" id="send-btn" />
      </form>
    </div>
  );
};

export default Form;

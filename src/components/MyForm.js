// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.
import "./styles/contact.css";
import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className={"form-container"} id={"contact"}>
        <div className={"form-skewed"}></div>
        <form
          className="form"
          onSubmit={this.submitForm}
          action="https://formspree.io/f/meqpvbay"
          method="POST"
        >
          <input type="text" name="name" placeholder="name" />
          <input type="email" name="email" placeholder="email" />

          <textarea
            type="text"
            name="message"
            id="input-message"
            placeholder="your message"
            cols="30"
            rows="10"
          ></textarea>
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <input type="submit" value="abfahrt" id="send-btn" />
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

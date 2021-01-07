import React from "react";
import Navbar from "./components/Nav";
import Jumbo from "./components/Jumbo";
import About from "./components/About";
import Form from "./components/Form";
import ModalSkillz from "./components/ModalSkillz";
import "./App.css";
import ModalStuff from "./components/ModalStuff";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    console.log("open modal");
    this.setState({ show: true });
  }
  closeModal() {
    console.log("close modal");
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbo />
        <About openModal={this.openModal} />
        <ModalSkillz show={this.state.show} closeModal={this.closeModal} />
        <ModalStuff show={this.state.show} closeModal={this.closeModal} />
        <Form />
      </div>
    );
  }
}

export default App;

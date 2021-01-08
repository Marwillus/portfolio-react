import React from "react";
import Navbar from "./components/Nav";
import Jumbo from "./components/Jumbo";
import About from "./components/About";
import Form from "./components/Form";
import ModalSkillz from "./components/ModalSkillz";
import "./App.css";
import ModalStuff from "./components/ModalStuff";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      jobs: [
        {
          job: "Fullstack Developer",
          employer: "Digital Career Institute",
          jobDescription: "blalalalala",
          start: "2020",
          image: "#",
          education: true,
        },
        {
          job: "Techniker für alles",
          employer: "Final Escape GmbH",
          jobDescription: "blalalalala",
          start: "2020",
          image: "#",
          education: false,
        },
        {
          job: "Möbeltischler",
          employer: "VANPEY Möbeldesign",
          jobDescription: "blalalalala",
          start: "2020",
          image: "#",
          education: false,
        },
        {
          job: "Industriemechaniker",
          employer: "Zementwerke Berlin",
          jobDescription: "blalalalala",
          start: "2020",
          image: "#",
          education: false,
        },
        {
          job: "Analyst",
          employer: "Daimler Benz",
          jobDescription: "blalalalala",
          start: "2020",
          image: "#",
          education: false,
        },
        {
          job: "Maschinenbau",
          employer: "HTW",
          jobDescription: "blalalalala",
          start: "2020",
          image: "#",
          education: true,
        },
        {
          job: "Veranstaltungstechnik",
          employer: "Steinstatt Kiste e.V.",
          jobDescription: "blalalalala",
          start: "2020",
          image: "#",
          education: false,
        },
        {
          job: "Industriemechaniker",
          employer: "Fiberweb GmbH",
          jobDescription: "blalalalala",
          start: "2020",
          image: "#",
          education: true,
        },
      ],
      skills: [
        {
          skill: "html",
          percent: 80,
          type: "digital",
        },
        {
          skill: "css",
          percent: 80,
          type: "digital",
        },
        {
          skill: "javascript",
          percent: 50,
          type: "digital",
        },
        {
          skill: "react",
          percent: 40,
          type: "digital",
        },
        {
          skill: "photoshop",
          percent: 20,
          type: "digital",
        },
        {
          skill: "C/C++",
          percent: 30,
          type: "digital",
        },
        {
          skill: "Woodworking",
          percent: 90,
          type: "analog",
        },
        {
          skill: "Metalmachining",
          percent: 70,
          type: "analog",
        },
        {
          skill: "Elektrotechnik",
          percent: 90,
          type: "analog",
        },
      ],
      projects: [
        {
          name: "Chilldome",
          type: "furniture",
          mainImage: "#",
          images: [1, 2, 3],
          description: "blalalala",
        },
        {
          name: "Cyber Daftpunk Helmet",
          type: "gadget",
          mainImage: "#",
          images: [1, 2, 3],
          description: "blalalala",
        },
      ],
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
        <ModalSkillz
          show={this.state.show}
          closeModal={this.closeModal}
          jobs={this.state.jobs}
          skills={this.state.skills}
        />
        {/* <ModalStuff show={this.state.show} closeModal={this.closeModal} /> */}
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;

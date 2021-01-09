import React from "react";
import Navbar from "./components/Nav";
import Jumbo from "./components/Jumbo";
import About from "./components/About";
import Form from "./components/Form";
import SkillsModal from "./components/SkillsModal";
import "./App.css";
import ProjectSwiper from "./components/ProjectSwiper";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showSwiper: false,
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
          mainImage: "https://picsum.photos/200/300",
          images: [1, 2, 3],
          description: "blalalala",
        },
        {
          name: "Cyber Daftpunk Helmet",
          type: "gadget",
          mainImage: "https://picsum.photos/200/300",
          images: [1, 2, 3],
          description: "blalalala",
        },
      ],
    };

    this.openModal = this.openModal.bind(this);
    this.openSwiper = this.openSwiper.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    console.log("open modal");
    this.setState({ showModal: true });
  }
  openSwiper() {
    console.log("open swiper");
    this.setState({ showSwiper: true });
  }
  closeModal() {
    console.log("close modal");
    this.setState({ showModal: false });
    this.setState({ showSwiper: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbo />
        <About openModal={this.openModal} openSwiper={this.openSwiper} />
        <SkillsModal
          show={this.state.showModal}
          closeModal={this.closeModal}
          jobs={this.state.jobs}
          skills={this.state.skills}
        />
        <ProjectSwiper
          show={this.state.showSwiper}
          closeModal={this.closeModal}
          projects={this.state.projects}
        />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;

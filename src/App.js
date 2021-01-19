import React from "react";
import "./App.css";

import Navbar from "./components/Nav";
import Jumbo from "./components/Jumbo";
import About from "./components/About";
// import Form from "./components/Form";
import MyForm from "./components/MyForm";
import SkillsModal from "./components/SkillsModal";
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
          qualification: "blalalalala",
          start: "2020",
          image:
            "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
          education: true,
        },
        {
          job: "Techniker",
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
          job: "Analyst",
          employer: "Daimler Benz",
          jobDescription: "blalalalala",
          start: "2020",
          image: "#",
          education: false,
        },
        {
          job: "Maschinenbau",
          employer: "HTW - Berlin",
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
          name: "Living Room",
          type: "furniture",
          mainImage: "",
          thumbs: [
            "https://picsum.photos/100",
            "https://picsum.photos/100",
            "https://picsum.photos/100",
          ],
          description: "blalalala",
        },
        {
          name: "Cyber Daftpunk Helmet",
          type: "gadget",
          mainImage: "",
          thumbs: [
            "https://picsum.photos/100",
            "https://picsum.photos/100",
            "https://picsum.photos/100",
          ],
          description: "blalalala",
        },
        {
          name: "Sound WallE",
          type: "gadget",
          mainImage: "",
          thumbs: [
            "https://picsum.photos/100",
            "https://picsum.photos/100",
            "https://picsum.photos/100",
          ],
          description: "blalalala",
        },
        {
          name: "AmbiLight",
          type: "gadget",
          mainImage: "",
          thumbs: [
            "https://picsum.photos/100",
            "https://picsum.photos/100",
            "https://picsum.photos/100",
          ],
          description: "blalalala",
        },
        {
          name: "Skateboard",
          type: "gadget",
          mainImage: "",
          thumbs: [
            "https://picsum.photos/100",
            "https://picsum.photos/100",
            "https://picsum.photos/100",
          ],
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
        <ProjectSwiper
          show={this.state.showSwiper}
          closeModal={this.closeModal}
          projects={this.state.projects}
        />
        <SkillsModal
          show={this.state.showModal}
          closeModal={this.closeModal}
          jobs={this.state.jobs}
          skills={this.state.skills}
        />

        <MyForm />
        <Footer />
      </div>
    );
  }
}

export default App;

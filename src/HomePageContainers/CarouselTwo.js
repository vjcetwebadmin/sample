import React, { Component } from "react";
import "./CarouselTwo.css";
import CustomOne from "../Components/Texts/CustomOne";

class CarouselTwo extends Component {
  state = { selected: 0 };
  data = [
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: "Merit & Farewell Day is on 20th June 2019"
    },
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/placement" target="_blank" rel="noopener noreferrer"><font color="FFFFF">402 Students Placed in 2018-19 AY</font></a>
    },
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="http://admission.vjcet.ac.in/" target="_blank" rel="noopener noreferrer"><font color="FFFFF">B.Tech Admissions 2019</font></a>
    },
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/admission/mtech" target="_blank" rel="noopener noreferrer"><font color="FFFFF">M.Tech Admissions 2019</font></a>
    },
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/keralablockchain" target="_blank" rel="noopener noreferrer"><font color="FFFFF">We are Institutional Member of Kerala Block Chain Academy</font></a>
           
    },
        
    
  ];
  rotateRight = () => {
    this.setState({
      selected:
        this.state.selected + 1 >= this.data.length
          ? 0
          : this.state.selected + 1
    });
  };
  rotateLeft = () => {
    console.log(this.state.selected);
    this.setState({
      selected:
        this.state.selected - 1 < 0
          ? this.data.length - 1
          : this.state.selected - 1
    });
  };
  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="CarouselTwo" id={instanceID}>
        <div className="CarouselTwoSlider">
          <div className="CarouselTwoSlide" id={instanceID}>
            <CustomOne
              data={this.data[this.state.selected]}
              className="CarouselTwoText"
            />
          </div>
        </div>
        <div className="CarouselTwoPagination">
          {this.data.map((item, index, arr) => {
            return (
              <a
                href
                onFocus={e => {
                  console.log("testfunction");
                  this.setState({ selected: index });
                }}
                onClick={e => {
                  this.setState({ selected: index });
                }}
              >
                <div
                  style={{
                    height: "6px",
                    width: "6px",
                    borderRadius: "100%",
                    backgroundColor:
                      this.state.selected === index ? "#fff" : "#ffffff77",
                    margin: "0px 2px"
                  }}
                />
              </a>
            );
          })}
        </div>
        <div
          className="CarouselTwoRightArrow"
          onClick={e => {
            this.rotateRight();
          }}
        >
          <img
            src={require("../Assets/right-arrow.svg")}
            style={{ height: "25px", width: "25px" }}
            alt="img"
          />
        </div>

        <div
          className="CarouselTwoLeftArrow"
          onClick={e => {
            this.rotateLeft();
          }}
        >
          {" "}
          <img
            src={require("../Assets/right-arrow.svg")}
            style={{
              height: "25px",
              width: "25px",
              transform: "rotate(180deg)"
            }}
            alt="img"
          />
        </div>
      </div>
    );
  }
}

export default CarouselTwo;

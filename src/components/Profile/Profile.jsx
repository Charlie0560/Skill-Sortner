import React from "react";
import "./profile.css";
import img1 from "./images.png";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ratings from "../Ratings/Ratings";



function Profile() {
 

  return (
    <div>
      <section className="py-4" style={{color:"white"}}>
        <div className="container">
          {/* <h2 style={{ textAlign: "center" }}>Profile</h2> */}
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="shadow rounded-lg d-block d-sm-flex" style={{backgroundColor:"black"}}>
              <Col sm={3} className=" border-right">
                <div className="p-4">
                  <div className="img-circle text-center mb-3">
                    <img src={img1} alt="Image1" className="shadow" />
                  </div>
                  <h4 className="text-center" style={{color:"cyan"}}>Kiran Acharya</h4>
                </div>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first" style={{color:"cyan"}}>Profile</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" style={{color:"cyan"}}>Social Links</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" style={{color:"cyan"}}>Tech side</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first" className="p-4 p-md-5">
                    {/* <Sonnet /> */}
                    <h3 className="mb-4" style={{color:"cyan"}}>Settings</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            style={{backgroundColor:"rgba(39, 38, 38, 0.6)",color:"white"}}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Surname"
                            style={{backgroundColor:"rgba(39, 38, 38, 0.6)",color:"white"}}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="abc@gmail.com"
                            style={{backgroundColor:"rgba(39, 38, 38, 0.6)",color:"white"}}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="+91 9876543215"
                            style={{backgroundColor:"rgba(39, 38, 38, 0.6)",color:"white"}}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Dept</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="IT/CS/EnTc"
                            style={{backgroundColor:"rgba(39, 38, 38, 0.6)",color:"white"}}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Year</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="FE/SE/TE/BE"
                            style={{backgroundColor:"rgba(39, 38, 38, 0.6)",color:"white"}}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>DIV</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="eg. SE 09"
                            style={{backgroundColor:"rgba(39, 38, 38, 0.6)",color:"white"}}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Roll no.</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="eg. 231xx"
                            style={{backgroundColor:"rgba(39, 38, 38, 0.6)",color:"white"}}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-primary bt2" style={{marginTop:"20px"}}>Update</button>
                      <button className="btn btn-danger bt1" style={{marginTop:"20px"}}>Cancel</button>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" className="p-4 p-md-5">
                    {/* <Sonnet /> */}
                    <h3 className="mb-4" style={{color:"cyan"}}>Social Links</h3>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Github</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            style={{backgroundColor:"rgba(39, 38, 38, 0.6)",color:"white"}}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Linked In</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            style={{backgroundColor:"rgba(39, 38, 38, 0.6)",color:"white"}}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Instagram</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            style={{backgroundColor:"rgba(39, 38, 38, 0.6)",color:"white"}}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-primary bt2" style={{marginTop:"20px"}}>Update</button>
                      <button className="btn btn-danger bt1" style={{marginTop:"20px"}}>Cancel</button>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third" className="p-4 p-md-5">
                    {/* <Sonnet /> */}
                    <h3 className="mb-4" style={{color:"cyan"}}>Rating</h3>
                    <Ratings/>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>
    </div>
  );
}



export default Profile;

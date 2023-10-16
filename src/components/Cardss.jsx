import { Stack } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";

function Cardss() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide container-fluid mt-5"
      >
        <h1>Learners are viewing</h1>
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Stack direction="row" spacing={1} height={380}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.pankajkumarseo.com/wp-content/uploads/2022/06/Python-Course-Delhi.png"
                />
                <Card.Body>
                  <Card.Title>python</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Learn the latest technologies, including Javascript, React,
                    Node and even Web3 development.
                  </Card.Text>
                  <p>$120</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://learning.oilab.in/public/img/Flutter-course-in-jodhpur.png"
                />
                <Card.Body>
                  <Card.Title>flutter</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Full Practice Exam included + explanations | Learn Cloud
                    Computing | Pass the AWS Cloud Practitioner CLF-C02 exam!
                  </Card.Text>
                  <p>$130</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.clariwell.in/resources/best-java-certification-course-top-training-institute-in-pune.webp"
                />
                <Card.Body>
                  <Card.Title>java</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Become a Full-Stack Web Developer with just ONE course.
                    HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps
                  </Card.Text>
                  <p>$160</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.clariwell.in/resources/best-java-certification-course-top-training-institute-in-pune.webp"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Learn the latest technologies, including Javascript, React,
                    Node and even Web3 development.
                  </Card.Text>
                  <p>$260</p>{" "}
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://mindqsystems.com/wp-content/uploads/2020/02/software-testing-course.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Full Practice Exam included + explanations | Learn Cloud
                    Computing | Pass the AWS Cloud Practitioner CLF-C02 exam!
                  </Card.Text>
                  <p>$180</p>{" "}
                </Card.Body>
              </Card>
            </Stack>
          </div>
          <div class="carousel-item">
            <Stack direction="row" spacing={1} height={380}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.pankajkumarseo.com/wp-content/uploads/2022/06/Python-Course-Delhi.png"
                />
                <Card.Body>
                  <Card.Title>python</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Learn the latest technologies, including Javascript, React,
                    Node and even Web3 development.
                  </Card.Text>
                  <p>$120</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://learning.oilab.in/public/img/Flutter-course-in-jodhpur.png"
                />
                <Card.Body>
                  <Card.Title>flutter</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Full Practice Exam included + explanations | Learn Cloud
                    Computing | Pass the AWS Cloud Practitioner CLF-C02 exam!
                  </Card.Text>
                  <p>$130</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.clariwell.in/resources/best-java-certification-course-top-training-institute-in-pune.webp"
                />
                <Card.Body>
                  <Card.Title>java</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Become a Full-Stack Web Developer with just ONE course.
                    HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps
                  </Card.Text>
                  <p>$160</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.clariwell.in/resources/best-java-certification-course-top-training-institute-in-pune.webp"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Learn the latest technologies, including Javascript, React,
                    Node and even Web3 development.
                  </Card.Text>
                  <p>$260</p>{" "}
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://mindqsystems.com/wp-content/uploads/2020/02/software-testing-course.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Full Practice Exam included + explanations | Learn Cloud
                    Computing | Pass the AWS Cloud Practitioner CLF-C02 exam!
                  </Card.Text>
                  <p>$180</p>{" "}
                </Card.Body>
              </Card>
            </Stack>
          </div>
          <div class="carousel-item">
            <Stack direction="row" spacing={1} height={380}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.pankajkumarseo.com/wp-content/uploads/2022/06/Python-Course-Delhi.png"
                />
                <Card.Body>
                  <Card.Title>python</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Learn the latest technologies, including Javascript, React,
                    Node and even Web3 development.
                  </Card.Text>
                  <p>$120</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://learning.oilab.in/public/img/Flutter-course-in-jodhpur.png"
                />
                <Card.Body>
                  <Card.Title>flutter</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Full Practice Exam included + explanations | Learn Cloud
                    Computing | Pass the AWS Cloud Practitioner CLF-C02 exam!
                  </Card.Text>
                  <p>$130</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.clariwell.in/resources/best-java-certification-course-top-training-institute-in-pune.webp"
                />
                <Card.Body>
                  <Card.Title>java</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Become a Full-Stack Web Developer with just ONE course.
                    HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps
                  </Card.Text>
                  <p>$160</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.clariwell.in/resources/best-java-certification-course-top-training-institute-in-pune.webp"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Learn the latest technologies, including Javascript, React,
                    Node and even Web3 development.
                  </Card.Text>
                  <p>$260</p>{" "}
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://mindqsystems.com/wp-content/uploads/2020/02/software-testing-course.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Full Practice Exam included + explanations | Learn Cloud
                    Computing | Pass the AWS Cloud Practitioner CLF-C02 exam!
                  </Card.Text>
                  <p>$180</p>{" "}
                </Card.Body>
              </Card>
            </Stack>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark rounded"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark rounded"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      <div className="mt-5  container-fluid ">
        <div className=" partners-banner-module--content--bYVF_">
          <h2 className="ms-5 partners-banner-module--heading--21OVA">
            Trusted by over 14,400 companies and millions of learners around the
            world
          </h2>
          <br />
          <ul
            style={{ justifyContent: "space-around", listStyle: "none" }}
            className=" d-flex p-1"
          >
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"
                alt="Volkswagen logo"
                width={48}
                height={48}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg"
                alt="Samsung logo"
                width={101}
                height={34}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"
                alt="Cisco logo"
                width={87}
                height={40}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
                alt="ATT&T logo"
                width={97}
                height={40}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg"
                alt="Procter & Gamble logo"
                width={48}
                height={48}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg"
                alt="Hewlett Packard Enterprise logo"
                width={94}
                height={40}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg"
                alt="Citi logo"
                width={62}
                height={40}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg"
                alt="Ericsson logo"
                width={55}
                height={48}
                loading="lazy"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cardss;

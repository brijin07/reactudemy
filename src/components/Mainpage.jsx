import { Button } from "@mui/material";
import React from "react";
// import Stack from '@mui/material/Stack';



function Mainpage() {
  return (
    <>
      <div id="carouselExample" class="carousel slide container-fluid">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              width="1340"
              height="460"
              alt=""
              src="https://img-c.udemycdn.com/notices/web_carousel_slide/image_responsive/3eb24d8e-10d6-4cf7-953a-602f342f32f5.jpg"
              loading="lazy"
            />{" "}
          </div>
          <div class="carousel-item">
            <img
              width="1340"
              height="460"
              alt=""
              src="https://img-c.udemycdn.com/notices/web_carousel_slide/image_responsive/5497a25c-b6b2-497d-ae7a-0ce15ce1301b.jpg"
              loading="eager"
            />
          </div>
          
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* text */}
      <div className="text m-3">
        <h1>A broad selection of courses</h1>
        <p>
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>

        <Button variant="outlined" className="text-dark " style={{borderRadius:'1px', textTransform:'initial',border:'1px black solid', fontWeight:'bold', width:'200px'}}>Explore more</Button>

    

      </div>

    





    
    </>
  );
}

export default Mainpage;

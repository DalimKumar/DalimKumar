import { Chrono } from "react-chrono";
import { Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
position:relative;
.shark{
  position:absolute;
  top:30px;
  right:-25%;
  mix-blend-mode: color-dodge;
}
.small-shark{
  position:absolute;
  bottom:90px;
  z-index:50;
  left:50%;
  width:120px;
  transform:translate(-50%) rotate(-90deg);
}
.title {
    font-size: 3.75rem;
    
}
  .timeline-title {
    font-family: "Geom Graphic";
    font-weight: 700;
    color: #fff;
    font-size: 1.875rem;
    text-align:center
  }
  .timeline-subtitle {
    font-family: "Helvetica Now Display";
    font-weight: 500;
    color: #fff;
    font-size: 1.1rem;
    line-height: 100%;
    text-align:center;
    padding-top:10px;
  }
  .timeline-card-content {
    background: none;
  }
  .css-euihtl-TriangleIconWrapper {

    width:30%;
    height: 2px;
    position: absolute;
    top: 50%;
    background: #fff;
    -webkit-transform: translateY(-50%));
    -moz-transform: translateY(-50%) ;
    -ms-transform: translateY(-50%) ;
    transform:translateY(-50%) ;
    
    right: -10.5%;
    background:var(--blue);
  }
  .css-kbhk7b-TriangleIconWrapper {
    width:30%;
    height: 2px;
	  position: absolute;
	  top: 50%;
	  background: #fff;
    -webkit-transform: translateY(-50%));
    -moz-transform: translateY(-50%) ;
    -ms-transform: translateY(-50%) ;
    transform:translateY(-50%) ;
	  left: -10.5%;
    background:var(--blue);
}

  .card-description{
      position:relative;
  }
  .css-kbhk7b-TriangleIconWrapper::before{
      content:"";
      position:absolute;
      height:10px;
      width:10px;
      top:50%;
      transform:translateY(-50%);
      right:0%;
      background:var(--blue);
      border-radius:50%;

  }
  .css-euihtl-TriangleIconWrapper::before{
      content:"";
      position:absolute;
      height:10px;
      width:10px;
      top:50%;
      transform:translateY(-50%);
      left:0%;
      background:var(--blue);
      border-radius:50%;
      
  }
  .css-xa4des-VerticalCircleWrapper::after{
      background:var(--blue);
      border-radius:0px;
      width:5px;
  }
  .css-1wybm3g-Circle:not(.using-icon) {
	          background:none;
}
.css-1wybm3g-Circle:not(.using-icon).active::after {
	        background: none;
}
  .active{
      background:none;
  }
  .css-1lbpa0g-TimelineControlContainer {
          display:none;
}
@media only screen and (max-width: 991px) {
    .title {
        font-size: 2.75rem;
      }
    .timeline-title {
        font-size: 1.5rem;
      }
    .timeline-subtitle {
        font-size: 1rem;
    }
    .css-euihtl-TriangleIconWrapper {
          width:20%;
          height: 2px;
          position: absolute;
          top: 50%;
          background: #fff;
          -webkit-transform: translateY(-50%));
          -moz-transform: translateY(-50%) ;
          -ms-transform: translateY(-50%) ;
          transform:translateY(-50%) ;

          right: -10.5%;
          background:var(--blue);
}
    .css-kbhk7b-TriangleIconWrapper {
        width:20%;
        height: 2px;
        position: absolute;
        top: 50%;
        background: #fff;
        -webkit-transform: translateY(-50%));
        -moz-transform: translateY(-50%) ;
        -ms-transform: translateY(-50%) ;
        transform:translateY(-50%) ;
        left: -10.5%;
        background:var(--blue);
}
  }
  @media only screen and (max-width: 767px) {
    .shark{
      display:none;
    }
  }
  @media only screen and (max-width: 576px) {
   
    .timeline-title {
        font-size: 1rem;
      }
    .timeline-subtitle {
        font-size: .7rem;
        padding-top:4px;
    }
    .css-1kp3mbv-TimelineMainWrapper{
        padding:0;
    }
    .css-1iv48dl-TimelineVerticalWrapper{
      padding:0;
      }
  }
  
  @media only screen and (max-width: 420px) {
    .title {
        font-size: 2.25rem;
      }

  }
  
`;
const LaunchGivewayAndRoadMap = ({ id, title, data, img, img2, padding }) => {
  return (
    <Wrapper id={id} className={padding ? "py-5" : "pb-0"}>
      <img src={img} alt="" className="shark" />
      <Col xs={11} xxl={8} className={`mx-auto  ${padding && "pb-5"}`}>
        <h2 className="title pb-5">
          {title}
          <span className="exlamation">!</span>
        </h2>
        <Chrono mode="VERTICAL_ALTERNATING">
          {data.map((el, i) => (
            <div
              key={i}
              className={`d-flex flex-column mt-0  ${
                i % 2 === 0 ? "main-container" : "main-container2"
              }`}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <span className="timeline-title">{el.title}</span>
              <p className="timeline-subtitle mt-1 mt-sm-2">{el.text1}</p>
              {el.text3 && (
                <span className="timeline-subtitle ">{el.text3}</span>
              )}
              <span className="timeline-subtitle ">{el.text2}</span>
            </div>
          ))}
        </Chrono>
      </Col>
      <img src={img2} alt="" className="small-shark" />
    </Wrapper>
  );
};
export default LaunchGivewayAndRoadMap;

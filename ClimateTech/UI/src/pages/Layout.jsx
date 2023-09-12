import ImageMapper from "react-img-mapper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Displaycontent from "../components/DIsplaycontent";
import Highlightblurb from "../components/Highlightblurb";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loadscreen from "../components/Loadscreen";

const Layout = ({ pagedetails }) => {
  
  const navigate = useNavigate()
  const [showBlurb, setShowBlurb] = useState(false)
  const [centerPosition, setCenterPosition] = useState([])
  const [showDetails, setShowDetails] = useState(false)
  const [infoType, setInfoId] = useState(null)
  const [areaName, setAreaName] = useState(null)
  const[highlight,setHightlight] = useState(true)


  const MAP = {
    name: "my-map",
    areas: pagedetails.coordinates,
  };


  const closeModal = () => {
    setShowDetails(false);
    setHightlight(false)
  };

  const loadeImg = () => {
    setShowDetails(false)
    setShowBlurb(false)
  }

  const moveTo = (area) => {
    if (area.goto != null) {
      navigate(`/${area.goto}`)
    }
    else {
      setShowDetails(true)
      setInfoId(area.infoType)
    }
  }


  const handleMouseEnter = (area) => {
    setShowBlurb(true)
    setHightlight(true)
    setAreaName(area.name)
    setCenterPosition(area.center)
  };


  const handleMouseLeave = () => {
      setShowBlurb(false)
  };


  return (

    <Row>
      <Col >
        <div>
          <ImageMapper 
            src={pagedetails.photo}
            map={MAP}
            onLoad={loadeImg}
            onClick={moveTo}
            onMouseMove={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            stayHighlighted={highlight}
          />
        </div>
      </Col>
      
    <Col >
      <div >
        {showBlurb && (<Highlightblurb name={areaName} x={centerPosition[0]} y={centerPosition[1]}/>)}
        {showDetails === false ? <Loadscreen /> : <Displaycontent close={closeModal} infoType={infoType} />}
        </div>
        </Col>
    </Row>
  )

};

export default Layout;

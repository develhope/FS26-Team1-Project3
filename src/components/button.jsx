import "../css/button.css"
import {useNavigate } from "react-router-dom";
function button () {
  const navigate = useNavigate();
  const handleNavigateAnnunci= () => navigate("/annunci")

    return (
     <div className="containerbtn">
      <button onClick={handleNavigateAnnunci} type="button" className="btnaltriannunci">Vedi altri annunci</button>
  </div>
    )
  }
  export default button
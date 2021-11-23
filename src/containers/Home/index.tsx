import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import {IMAGESRC} from "../../constants"
import { requestLivres } from "../ListLivres/actions";
import { makeSelectLivres } from "../ListLivres/selectors";
import "./index.css";


const Home = () => {
    const dispatch = useDispatch();
  dispatch(requestLivres());

    return (
<>

        <img className="imgposition" src={IMAGESRC}></img>

</>
    );
};
export default Home;

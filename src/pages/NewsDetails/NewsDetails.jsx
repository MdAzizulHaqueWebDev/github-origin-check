import { useLocation, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
    const {id} = useParams();
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Header/>
<section className="grid grid-cols-4" >
<div className="col-span-3 ">
detaasdfasdfsa
</div>
<div>
    <RightSideNav/>
</div>
</section>
        </div>
    );
};

export default NewsDetails;
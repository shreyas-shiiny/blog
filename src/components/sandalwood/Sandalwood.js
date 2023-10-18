import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";
import { CategoryContext } from "../context/Context";

const Sandalwood = () => {
    const [category] = useContext(CategoryContext);


    return (
        <div>
            <h1 className="tollyh">Movies</h1><hr className="thhr" />
            {category.filter((render) => render.id < 5).map((wood) => (
                <div key={category.id} className="tolly">
                    <Link to={`/sandalwood/${wood.id}`} className="tolly">
                        <div className="tollyi"><img src={wood.img} alt="" /></div>
                        <h3 className="tollyt">{wood.det}</h3>
                    </Link>
                    <h5 className="tollyd">{wood.date}</h5>
                    <hr />
                </div>
            ))}
            <button className="loadmore">LoadMore <span>&#8595;</span></button>
            <Bottom />
        </div> 
    );
};

export default Sandalwood;
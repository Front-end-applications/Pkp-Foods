import axios from "axios";
import AuthHeader from "../../../helpers/AuthHeader"

/* Collections management services */
export const fetchCategories = (setCategories) => {
    axios.get("http://localhost:8080/getFamilies", { headers: AuthHeader() })
        .then((res) => {
            setCategories(res.data);
        });
};

/* Event management services */
export const handleMouseEnter = (event, setHoverLink) => {
    const value = event.target.innerHTML;
    setHoverLink(value);
};

export const handleMouseLeave = (event, setHoverLink) => {
    setHoverLink("");
};
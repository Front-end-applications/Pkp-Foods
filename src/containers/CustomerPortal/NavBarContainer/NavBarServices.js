import axios from "axios";

/* Collections management services */
export const fetchCategories = (setCategories) => {
    axios.get("http://localhost:8080/getFamilies").then((res) => {
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
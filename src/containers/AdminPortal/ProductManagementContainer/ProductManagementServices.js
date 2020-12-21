import axios from "axios";

export const fetchFamilies = (setFamilies) => {
    axios
        .get("http://localhost:8080//getFamilies")
        .then((res) => {
            setFamilies(res.data);
        });
};

export const fetchClasses = (setClasses) => {
    axios
        .get("http://localhost:8080//getClasses")
        .then((res) => {
            setClasses(res.data);
        });
};

export const fetchBricks = (setBricks) => {
    axios
        .get("http://localhost:8080//getBricks")
        .then((res) => {
            setBricks(res.data);
        });
};

export const fetchBrands = (setBrands) => {
    axios
        .get("http://localhost:8080//getBrands")
        .then((res) => {
            setBrands(res.data);
        });
};
import axios from "axios";

/* Product management services */
export const fetchFamilies = (setFamilies, setState) => {
    axios
        .get("http://localhost:8080//getFamilies")
        .then((res) => {
            setFamilies(res.data);
            setState(prevState => ({
                ...prevState,
                "parentArticleIdentifier": {
                    ...prevState.parentArticleIdentifier,
                    "family": {
                        "familyId": res.data[0].familyId
                    }
                }
            }));
        });
};

export const fetchClassesByFamilyId = (familyId, setClasses, setState) => {
    axios
        .get("http://localhost:8080//getClasses?familyId=" + familyId)
        .then((res) => {
            setClasses(res.data);
            setState(prevState => ({
                ...prevState,
                classId: res.data.length > 0 ? res.data[0].classIdentifier.classId : ""
            }));
        });
};

export const fetchBricksByClassId = (classId, setBricks, setState) => {
    axios
        .get("http://localhost:8080//getBricks?classId=" + classId)
        .then((res) => {
            setBricks(res.data);
            setState(prevState => ({
                ...prevState,
                brickId: res.data.length > 0 ? res.data[0].brickIdentifier.brickId : ""
            }));
        });
};

export const fetchBrands = (setBrands) => {
    axios
        .get("http://localhost:8080//getBrands")
        .then((res) => {
            setBrands(res.data);
        });
};

export const fetchParentArticles = (setParentArticles) => {
    axios
        .get("http://localhost:8080//getParentArticles")
        .then((res) => {
            setParentArticles(res.data);
        });
};

export const insertParentArticles = (event, state, setState, refParentArticle) => {
    event.preventDefault()
    const parentArticles = [];
    parentArticles.push(state);
    axios
        .post("http://localhost:8080//insertParentArticles", parentArticles)
        .then((res) => {

        });

    setState(refParentArticle);
    window.location.reload();
}

export const editParentArticle = (event, parentArticle, setState) => {
    event.preventDefault();
    setState(parentArticle);
};

export const deleteParentArticle = (event, parentArticle) => {
    event.preventDefault();
    const parentArticles = [];
    parentArticles.push(parentArticle);

    axios
        .post("http://localhost:8080//deleteParentArticles", parentArticles)
        .then((res) => {

        });

    window.location.reload();
};

/* Event management services */

export const handleFamily = (event, setState) => {

    const value = event.target.value;

    setState(prevState => ({
        ...prevState,
        parentArticleIdentifier: {
            ...prevState.parentArticleIdentifier,
            family: {
                familyId: value
            }
        }
    }));
};

export const handleClass = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, classId: value }));
};

export const handleBrick = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, brickId: value }));
}

export const handleBrand = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, brandId: value }));
};

export const handleArticleCode = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({
        ...prevState,
        parentArticleIdentifier: {
            ...prevState.parentArticleIdentifier,
            productId: value
        }
    }));
};

export const handleProductName = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, productName: value }));
};

export const handleExpiry = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, expiry: value }));
};

export const handleDescription = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, description: value }));
};
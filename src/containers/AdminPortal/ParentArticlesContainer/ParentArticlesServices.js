import axios from "axios";
import AuthHeader from "../../../helpers/AuthHeader"

/* Product management services */
export const fetchFamilies = (setFamilies, setState) => {
    axios
        .get("http://localhost:8080/getFamilies", { headers: AuthHeader()})
        .then((res) => {
            setFamilies(res.data);
            setState(prevState => ({
                ...prevState,
                parentArticleIdentifier: {
                    ...prevState.parentArticleIdentifier,
                    brick: {
                        brickIdentifier: {
                            ...prevState.parentArticleIdentifier.brick.brickIdentifier,
                            classEntity: {
                                classIdentifier: {
                                    ...prevState.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier,
                                    family: {
                                        familyId: res.data.length > 0 ? res.data[0].familyId : ""
                                    }
                                }
                            }
                        }
                    }
                }
            }));
        });
};

export const fetchClassesByFamilyId = (familyId, setClasses, setState) => {
    axios
        .get("http://localhost:8080/getClasses?familyId=" + familyId, { headers: AuthHeader()})
        .then((res) => {
            setClasses(res.data);
            setState(prevState => ({
                ...prevState,
                parentArticleIdentifier: {
                    ...prevState.parentArticleIdentifier,
                    brick: {
                        brickIdentifier: {
                            ...prevState.parentArticleIdentifier.brick.brickIdentifier,
                            classEntity: {
                                classIdentifier: {
                                    ...prevState.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier,
                                    classId: res.data.length > 0 ? res.data[0].classIdentifier.classId : ""
                                }
                            }
                        }
                    }
                }
            }));
        });
};

export const fetchBricksByClassId = (classId, setBricks, setState) => {
    axios
        .get("http://localhost:8080/getBricks?classId=" + classId, { headers: AuthHeader()})
        .then((res) => {
            setBricks(res.data);
            setState(prevState => ({
                ...prevState,
                parentArticleIdentifier: {
                    ...prevState.parentArticleIdentifier,
                    brick: {
                        brickIdentifier: {
                            ...prevState.parentArticleIdentifier.brick.brickIdentifier,
                            brickId: res.data.length > 0 ? res.data[0].brickIdentifier.brickId : ""
                        }
                    }
                }
            }));
        });
};

export const fetchBrands = (setBrands, setState) => {
    axios
        .get("http://localhost:8080/getBrands", { headers: AuthHeader()})
        .then((res) => {
            setBrands(res.data);
            setState(prevState => ({
                ...prevState,
                brandId: res.data.length > 0 ? res.data[0].brandId : ""
            }));
        });
}

export const fetchParentArticles = (setParentArticles) => {
    axios
        .get("http://localhost:8080/getParentArticles", { headers: AuthHeader()})
        .then((res) => {
            setParentArticles(res.data);
        });
};

export const insertParentArticles = (event, state, setState, refParentArticle) => {
    event.preventDefault()
    const parentArticles = [];
    parentArticles.push(state);
    axios
        .post("http://localhost:8080/insertParentArticles", parentArticles, { headers: AuthHeader()})
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
        .post("http://localhost:8080/deleteParentArticles", parentArticles, { headers: AuthHeader()})
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
            brick: {
                brickIdentifier: {
                    ...prevState.parentArticleIdentifier.brick.brickIdentifier,
                    classEntity: {
                        classIdentifier: {
                            ...prevState.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier,
                            family: {
                                familyId: value
                            }
                        }
                    }
                }
            }
        }
    }));
};

export const handleClass = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({
        ...prevState,
        parentArticleIdentifier: {
            ...prevState.parentArticleIdentifier,
            brick: {
                brickIdentifier: {
                    ...prevState.parentArticleIdentifier.brick.brickIdentifier,
                    classEntity: {
                        classIdentifier: {
                            ...prevState.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier,
                            classId: value
                        }
                    }
                }
            }
        }
    }));
};

export const handleBrick = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({
        ...prevState,
        parentArticleIdentifier: {
            ...prevState.parentArticleIdentifier,
            brick: {
                brickIdentifier: {
                    ...prevState.parentArticleIdentifier.brick.brickIdentifier,
                    brickId: value
                }
            }
        }
    }));
}

export const handleBrand = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, brandId: value }));
};

export const handleParentArticleName = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, parentArticleName: value }));
};

export const handleExpiry = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, expiry: value }));
};

export const handleDescription = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, description: value }));
};
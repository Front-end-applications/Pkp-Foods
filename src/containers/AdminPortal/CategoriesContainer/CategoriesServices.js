import axios from "axios";

/* Categories services */
export const fetchFamilies = (setFamilies, setClassState, setBrickState) => {
    axios
        .get("http://localhost:8080//getFamilies")
        .then((res) => {
            setFamilies(res.data);
            setClassState(prevState => (
                {
                    ...prevState,
                    classIdentifier: {
                        ...prevState.classIdentifier,
                        family: {
                            familyId: res.data.length > 0 ? res.data[0].familyId : ""
                        }
                    }
                }
            ));

            setBrickState(prevState => (
                {
                    ...prevState,
                    brickIdentifier: {
                        ...prevState.brickIdentifier,
                        classEntity: {
                            classIdentifier: {
                                ...prevState.brickIdentifier.classEntity.classIdentifier,
                                family: {
                                    familyId: res.data.length > 0 ? res.data[0].familyId : ""
                                }
                            }
                        }
                    }
                }
            ));
        });
};

export const insertFamilies = (event, familyState, setFamilyState, refFamily) => {
    event.preventDefault()
    const families = [];
    families.push(familyState);
    axios
        .post("http://localhost:8080//insertFamilies", families)
        .then((res) => {

        });

    setFamilyState(refFamily);
    window.location.reload();
}

export const deleteFamilies = (event, family) => {
    event.preventDefault();
    const families = [];
    families.push(family);

    axios
        .post("http://localhost:8080//deleteFamilies", families)
        .then((res) => {

        });

    window.location.reload();
};

export const fetchClasses = (setClasses) => {
    axios
        .get("http://localhost:8080//getClasses")
        .then((res) => {
            setClasses(res.data);
        });
};

export const insertClasses = (event, classState, setClassState, refClass) => {
    event.preventDefault()
    const classes = [];
    classes.push(classState);
    axios
        .post("http://localhost:8080//insertClasses", classes)
        .then((res) => {

        });

    setClassState(refClass);
    window.location.reload();
}

export const deleteClasses = (event, _class) => {
    event.preventDefault();
    const classes = [];
    classes.push(_class);

    axios
        .post("http://localhost:8080//deleteClasses", classes)
        .then((res) => {

        });

    window.location.reload();
};

export const fetchBricks = (setBricks) => {
    axios
        .get("http://localhost:8080//getBricks")
        .then((res) => {
            setBricks(res.data);
        });
};

export const fetchClassesByFamilyId = (familyId, setClassesByFamilyId, setBrickState) => {
    axios
        .get("http://localhost:8080//getClasses?familyId=" + familyId)
        .then((res) => {
            setClassesByFamilyId(res.data);

            setBrickState(prevState => (
                {
                    ...prevState,
                    brickIdentifier: {
                        ...prevState.brickIdentifier,
                        classEntity: {
                            classIdentifier: {
                                ...prevState.brickIdentifier.classEntity.classIdentifier,
                                classId: res.data.length > 0 ? res.data[0].classIdentifier.classId : "",
                            }
                        }
                    }
                }
            ));
        });
};

export const insertBricks = (event, brickState, setBrickState, refBrick) => {
    event.preventDefault()
    const bricks = [];
    bricks.push(brickState);
    axios
        .post("http://localhost:8080//insertBricks", bricks)
        .then((res) => {

        });

    setBrickState(refBrick);
    window.location.reload();
}

export const deleteBricks = (event, brick) => {
    event.preventDefault();
    const bricks = [];
    bricks.push(brick);

    axios
        .post("http://localhost:8080//deleteBricks", bricks)
        .then((res) => {

        });

    window.location.reload();
};

export const fetchBrands = (setBrands) => {
    axios
        .get("http://localhost:8080//getBrands")
        .then((res) => {
            setBrands(res.data);
        });
}

export const insertBrands = (event, brandState, setBrandState, refBrand) => {
    event.preventDefault()
    const brands = [];
    brands.push(brandState);
    axios
        .post("http://localhost:8080//insertBrands", brands)
        .then((res) => {

        });

    setBrandState(refBrand);
    window.location.reload();
}

export const deleteBrands = (event, brand) => {
    event.preventDefault();
    const brands = [];
    brands.push(brand);

    axios
        .post("http://localhost:8080//deleteBrands", brands)
        .then((res) => {

        });

    window.location.reload();
};

/* Event management services */

/* Family events */
export const handleFamilyName = (event, setFamilyState) => {
    const value = event.target.value;
    setFamilyState(prevState => ({ ...prevState, familyName: value }));
}

export const handleFamilyImage = (event, setFamilyState) => {
    const value = event.target.value;
    setFamilyState(prevState => ({ ...prevState, familyImage: value }));
}

export const handleFamilyDescription = (event, setFamilyState) => {
    const value = event.target.value;
    setFamilyState(prevState => ({ ...prevState, description: value }));
}

/* Class events */
export const handleClassFamily = (event, setClassState) => {
    const value = event.target.value;
    setClassState(prevState => (
        {
            ...prevState,
            classIdentifier: {
                ...prevState.classIdentifier,
                family: {
                    familyId: value
                }
            }
        }
    ));
}

export const handleClassName = (event, setClassState) => {
    const value = event.target.value;
    setClassState(prevState => ({ ...prevState, className: value }));
}

/* Brick events */
export const handleBrickFamily = (event, setBrickState) => {
    const value = event.target.value;
    setBrickState(prevState => (
        {
            ...prevState,
            brickIdentifier: {
                ...prevState.brickIdentifier,
                classEntity: {
                    classIdentifier: {
                        ...prevState.brickIdentifier.classEntity.classIdentifier,
                        family: {
                            familyId: value
                        }
                    }
                }
            }
        }
    ));
}

export const handleBrickClass = (event, setBrickState) => {
    const value = event.target.value;
    setBrickState(prevState => (
        {
            ...prevState,
            brickIdentifier: {
                ...prevState.brickIdentifier,
                classEntity: {
                    classIdentifier: {
                        ...prevState.brickIdentifier.classEntity.classIdentifier,
                        classId: value,
                    }
                }
            }
        }
    ));
}

export const handleBrickName = (event, setBrickState) => {
    const value = event.target.value;
    setBrickState(prevState => ({ ...prevState, brickName: value }));
}

/* Brand events */
export const handleBrandCode = (event, setFamilyState) => {
    const value = event.target.value;
    setFamilyState(prevState => ({ ...prevState, brandId: value }));
}

export const handleBrandName = (event, setFamilyState) => {
    const value = event.target.value;
    setFamilyState(prevState => ({ ...prevState, brandName: value }));
}
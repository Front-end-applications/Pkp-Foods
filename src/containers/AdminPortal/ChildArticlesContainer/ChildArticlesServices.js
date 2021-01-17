import axios from "axios";

/* Product management services */
export const fetchFamilies = (setFamilies, setState) => {
    axios
        .get("http://localhost:8080//getFamilies")
        .then((res) => {
            setFamilies(res.data);
            setState(prevState => ({
                ...prevState,
                childArticleIdentifier: {
                    ...prevState.childArticleIdentifier,
                    parentArticles: {
                        parentArticleIdentifier: {
                            ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier,
                            brick: {
                                brickIdentifier: {
                                    ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier,
                                    classEntity: {
                                        classIdentifier: {
                                            ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier,
                                            family: {
                                                familyId: res.data[0].familyId
                                            }
                                        }
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
        .get("http://localhost:8080//getClasses?familyId=" + familyId)
        .then((res) => {
            setClasses(res.data);
            setState(prevState => ({
                ...prevState,
                childArticleIdentifier: {
                    ...prevState.childArticleIdentifier,
                    parentArticles: {
                        parentArticleIdentifier: {
                            ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier,
                            brick: {
                                brickIdentifier: {
                                    ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier,
                                    classEntity: {
                                        classIdentifier: {
                                            ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier,
                                            classId: res.data.length > 0 ? res.data[0].classIdentifier.classId : ""
                                        }
                                    }
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
        .get("http://localhost:8080//getBricks?classId=" + classId)
        .then((res) => {
            setBricks(res.data);
            setState(prevState => ({
                ...prevState,
                childArticleIdentifier: {
                    ...prevState.childArticleIdentifier,
                    parentArticles: {
                        parentArticleIdentifier: {
                            ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier,
                            brick: {
                                brickIdentifier: {
                                    ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier,
                                    brickId: res.data.length > 0 ? res.data[0].brickIdentifier.brickId : ""
                                }
                            }
                        }
                    }
                }
            }));
        });
};

export const fetchTaxes = (setTaxes) => {
    axios
        .get("http://localhost:8080//getTaxes")
        .then((res) => {
            setTaxes(res.data);
        });
};

export const fetchParentArticles = (setParentArticles) => {
    axios
        .get("http://localhost:8080//getParentArticles")
        .then((res) => {
            setParentArticles(res.data);
        });
};

export const fetchParentArticlesByBrickId = (brickId, setParentArticles, setState) => {
    axios
        .get("http://localhost:8080//getParentArticles?brickId=" + brickId)
        .then((res) => {
            setParentArticles(res.data);
            (res.data.length > 0) && setState(prevState => ({
                ...prevState,
                childArticleIdentifier: {
                    ...prevState.childArticleIdentifier,
                    parentArticles: {
                        parentArticleIdentifier: {
                            ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier,
                            parentArticleId: res.data[0].parentArticleIdentifier.parentArticleId
                        }
                    }
                }
            }))
        });
};

export const fetchChildArticles = (setChildArticles) => {
    axios
        .get("http://localhost:8080//getChildArticles")
        .then((res) => {
            setChildArticles(res.data);
        });
};

export const insertChildArticles = (event, state, setState, refProduct) => {
    event.preventDefault()
    const products = [];
    products.push(state);
    console.log(state)
    axios
        .post("http://localhost:8080//insertChildArticles", products)
        .then((res) => {

        });

    setState(refProduct);
    window.location.reload();
}

export const deleteChildArticle = (event, product) => {
    event.preventDefault();
    const products = [];
    products.push(product);

    axios
        .post("http://localhost:8080//deleteChildArticles", products)
        .then((res) => {

        });

    window.location.reload();
};

/* Event management services */

export const handleFamily = (event, setState) => {

    const value = event.target.value;

    setState(prevState => ({
        ...prevState,
        childArticleIdentifier: {
            ...prevState.childArticleIdentifier,
            parentArticles: {
                parentArticleIdentifier: {
                    ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier,
                    brick: {
                        brickIdentifier: {
                            ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier,
                            classEntity: {
                                classIdentifier: {
                                    ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier,
                                    family: {
                                        familyId: value
                                    }
                                }
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
        childArticleIdentifier: {
            ...prevState.childArticleIdentifier,
            parentArticles: {
                parentArticleIdentifier: {
                    ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier,
                    brick: {
                        brickIdentifier: {
                            ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier,
                            classEntity: {
                                classIdentifier: {
                                    ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier,
                                    classId: value
                                }
                            }
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
        childArticleIdentifier: {
            ...prevState.childArticleIdentifier,
            parentArticles: {
                parentArticleIdentifier: {
                    ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier,
                    brick: {
                        brickIdentifier: {
                            ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier,
                            brickId: value
                        }
                    }
                }
            }
        }
    }));
}

export const handleParentArticle = (event, setState) => {

    const value = event.target.value;

    setState(prevState => ({
        ...prevState,
        childArticleIdentifier: {
            ...prevState.childArticleIdentifier,
            parentArticles: {
                parentArticleIdentifier: {
                    ...prevState.childArticleIdentifier.parentArticles.parentArticleIdentifier,
                    productId: value
                }
            }
        }
    }));
}

export const handleWeight = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, weight: value }));
}

export const handleUnitOfMeasurement = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, unitOfMeasurement: value }));
}

export const handleInventory = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, inventory: value }));
}

export const handleLength = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, length: value }));
}

export const handleWidth = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, width: value }));
}

export const handleHeight = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, height: value }));
}

export const handleEANCode = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, eanCode: value }));
}

export const handleTax = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, taxCode: value }));
}

export const handleCostPrice = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, costPrice: value }));
}

export const handleMargin = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, margin: value }));
}

export const handleDiscount = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, discount: value }));
}

export const handleDiscountType = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, discountType: value }));
}

export const handleValidFrom = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({
        ...prevState,
        validFrom: value,
        validTo: (value > prevState.validTo ? value : prevState.validTo)
    }));
}

export const handleValidTo = (event, setState) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, validTo: value }));
}

export const editChildArticle = (event, childArticle) => {
    event.preventDefault()

    window.location.reload();
};
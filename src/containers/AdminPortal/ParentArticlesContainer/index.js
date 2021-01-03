import React, { useState, useEffect } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

import { ParentArticles } from "../../../components/adminPortal";
import * as SERVICES from "./ParentArticlesServices";

export default function ParentArticlesContainer() {

    const parentArticle = {
        "parentArticleIdentifier": {
            "productId": "",
            "family": {
                "familyId": ""
            }
        },
        "productName": "",
        "productImage": "",
        "classId": "",
        "brickId": "",
        "brandId": "PKP",
        "expiry": 0
    };

    const [state, setState] = useState(parentArticle);
    const [families, setFamilies] = useState([]);
    const [classes, setClasses] = useState([]);
    const [bricks, setBricks] = useState([]);
    const [brands, setBrands] = useState([]);
    const [parentArticles, setParentArticles] = useState([]);

    useEffect(() => {
        SERVICES.fetchFamilies(setFamilies, setState);
        SERVICES.fetchClassesByFamilyId(state.parentArticleIdentifier.family.familyId, setClasses, setState);
        SERVICES.fetchBricksByClassId(state.classId, setBricks, setState);
        SERVICES.fetchBrands(setBrands);
        SERVICES.fetchParentArticles(setParentArticles);
    }, []);

    useEffect(() => {
        const familyId = state.parentArticleIdentifier.family.familyId;
        SERVICES.fetchClassesByFamilyId(familyId, setClasses, setState);
    }, [state.parentArticleIdentifier.family.familyId]);

    useEffect(() => {
        const classId = state.classId;
        SERVICES.fetchBricksByClassId(classId, setBricks, setState);
    }, [state.classId]);

    console.log(state);

    return (
        <ParentArticles>
            <ParentArticles.Section>
                <ParentArticles.SectionTitle>Classification</ParentArticles.SectionTitle>
                <ParentArticles.Row>
                    <ParentArticles.Column>
                        <ParentArticles.Select
                            label="family"
                            value={state.parentArticleIdentifier.family.familyId}
                            onChange={(event) => SERVICES.handleFamily(event, setState)}
                        >
                            {families.map((family, index) => (
                                <ParentArticles.Option key={index} value={family.familyId}>
                                    {family.familyName}
                                </ParentArticles.Option>
                            ))}
                        </ParentArticles.Select>
                    </ParentArticles.Column>
                    <ParentArticles.Column>
                        <ParentArticles.Select
                            label="Class"
                            value={state.classId}
                            onChange={(event) => SERVICES.handleClass(event, setState)}
                        >
                            {classes.map((cls, index) => (
                                <ParentArticles.Option key={index} value={cls.classId}>
                                    {cls.className}
                                </ParentArticles.Option>
                            ))}
                        </ParentArticles.Select>
                    </ParentArticles.Column>
                    <ParentArticles.Column>
                        <ParentArticles.Select
                            label="Brick"
                            value={state.brickId}
                            onChange={(event) => SERVICES.handleBrick(event, setState)}
                        >
                            {bricks.map((brick, index) => (
                                <ParentArticles.Option key={index} value={brick.brickId}>
                                    {brick.brickName}
                                </ParentArticles.Option>
                            ))}
                        </ParentArticles.Select>
                    </ParentArticles.Column>
                    <ParentArticles.Column>
                        <ParentArticles.Select
                            label="Brand"
                            value={state.brandId}
                            onChange={(event) => SERVICES.handleBrand(event, setState)}
                        >
                            {brands.map((brand, index) => (
                                <ParentArticles.Option key={index} value={brand.brandId}>
                                    {brand.brandName}
                                </ParentArticles.Option>
                            ))}
                        </ParentArticles.Select>
                    </ParentArticles.Column>
                </ParentArticles.Row>
            </ParentArticles.Section>

            <ParentArticles.Section>
                <ParentArticles.SectionTitle>Article Details</ParentArticles.SectionTitle>
                <ParentArticles.Row>
                    <ParentArticles.Column>
                        <ParentArticles.Text
                            label="Article code"
                            value={state.productId}
                            onChange={(event) => SERVICES.handleArticleCode(event, setState)}
                        />
                    </ParentArticles.Column>
                    <ParentArticles.Column>
                        <ParentArticles.Text
                            label="Product Name"
                            value={state.inventory}
                            onChange={(event) => SERVICES.handleProductName(event, setState)}
                        />
                    </ParentArticles.Column>
                    <ParentArticles.Column>
                        <ParentArticles.Text
                            label="Expiry"
                            value={state.inventory}
                            onChange={(event) => SERVICES.handleExpiry(event, setState)}
                        />
                    </ParentArticles.Column>
                </ParentArticles.Row>
                <ParentArticles.Row>
                    <ParentArticles.Column>
                        <ParentArticles.Text
                            label="Decription"
                            value={state.inventory}
                            onChange={(event) => SERVICES.handleDescription(event, setState)}
                        />
                    </ParentArticles.Column>
                    <ParentArticles.Column />
                    <ParentArticles.Column />
                </ParentArticles.Row>
            </ParentArticles.Section>

            <ParentArticles.Row>
                <ParentArticles.CreateButton
                    onClick={(event) => SERVICES.insertParentArticles(event, state, setState, parentArticle)}
                >Create</ParentArticles.CreateButton>
            </ParentArticles.Row>

            <ParentArticles.Row>
                <ParentArticles.Table>
                    <ParentArticles.TableRow>
                        <ParentArticles.TableHeader>S.No</ParentArticles.TableHeader>
                        <ParentArticles.TableHeader>Article code</ParentArticles.TableHeader>
                        <ParentArticles.TableHeader>Name</ParentArticles.TableHeader>
                        <ParentArticles.TableHeader>Class</ParentArticles.TableHeader>
                        <ParentArticles.TableHeader>Brick</ParentArticles.TableHeader>
                        <ParentArticles.TableHeader>Brand</ParentArticles.TableHeader>
                        <ParentArticles.TableHeader>Expiry</ParentArticles.TableHeader>
                        <ParentArticles.TableHeader>Description</ParentArticles.TableHeader>
                        <ParentArticles.TableHeader>Edit</ParentArticles.TableHeader>
                        <ParentArticles.TableHeader>Delete</ParentArticles.TableHeader>
                    </ParentArticles.TableRow>
                    {parentArticles.map((parentArticle, index) => (
                        <ParentArticles.TableRow key={index}>
                            <ParentArticles.TableData>{index + 1}</ParentArticles.TableData>
                            <ParentArticles.TableData>
                                {
                                    parentArticle.parentArticleIdentifier.family.familyId +
                                    parentArticle.parentArticleIdentifier.productId
                                }
                            </ParentArticles.TableData>
                            <ParentArticles.TableData>{parentArticle.productName}</ParentArticles.TableData>
                            <ParentArticles.TableData>{parentArticle.classId}</ParentArticles.TableData>
                            <ParentArticles.TableData>{parentArticle.brickId}</ParentArticles.TableData>
                            <ParentArticles.TableData>{parentArticle.brandId}</ParentArticles.TableData>
                            <ParentArticles.TableData>{parentArticle.expiry}</ParentArticles.TableData>
                            <ParentArticles.TableData>{parentArticle.description}</ParentArticles.TableData>
                            <ParentArticles.TableData>
                                <ParentArticles.EditDeleteButton
                                    onClick={event => SERVICES.editParentArticle(event, parentArticle, setState)}
                                ><FaPencilAlt /></ParentArticles.EditDeleteButton>
                            </ParentArticles.TableData>
                            <ParentArticles.TableData>
                                <ParentArticles.EditDeleteButton
                                    onClick={(event) => SERVICES.deleteParentArticle(event, parentArticle)}
                                ><FaTrash /></ParentArticles.EditDeleteButton>
                            </ParentArticles.TableData>
                        </ParentArticles.TableRow>
                    ))}

                </ParentArticles.Table>
            </ParentArticles.Row>
        </ParentArticles>
    )
}
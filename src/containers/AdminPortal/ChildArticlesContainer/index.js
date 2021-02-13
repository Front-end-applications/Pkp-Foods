import React, { useState, useEffect } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

import { ChildArticles } from "../../../components/adminPortal";
import * as SERVICES from "./ChildArticlesServices";

export default function ChildArticlesContainer() {

    const today = new Date();
    var formattedDate = today.getFullYear() + "-" +
        (today.getMonth() < 10 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1) + "-" +
        (today.getDate() < 10 ? "0" + today.getDate() : today.getDate());

    const product = {
        "childArticleIdentifier": {
            "parentArticles": {
                "parentArticleIdentifier": {
                    "parentArticleId": "01",
                    "brick": {
                        "brickIdentifier": {
                            "brickId": "",
                            "classEntity": {
                                "classIdentifier": {
                                    "classId": "",
                                    "family": {
                                        "familyId": ""
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "weight": 0,
        "unitOfMeasurement": "",
        "costPrice": 0,
        "margin": 0,
        "discount": 0,
        "discountType": "",
        "taxCode": "",
        "maximumRetailPrice": 0,
        "offerPrice": 0,
        "length": 0,
        "width": 0,
        "height": 0,
        "eanCode": "",
        "inventory": 0,
        "validFrom": formattedDate,
        "validTo": formattedDate,
        "display": true
    }

    const [state, setState] = useState(product);
    const [families, setFamilies] = useState([]);
    const [classes, setClasses] = useState([]);
    const [bricks, setBricks] = useState([]);
    const [taxes, setTaxes] = useState([]);
    const [parentArticles, setParentArticles] = useState([]);
    const [childArticles, setChildArticles] = useState([]);

    useEffect(() => {
        const familyId = state.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier.family.familyId;
        const classId = state.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier.classId;
        const brickId = state.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.brickId;

        SERVICES.fetchFamilies(setFamilies, setState);
        SERVICES.fetchClassesByFamilyId(familyId, setClasses, setState);
        SERVICES.fetchBricksByClassId(classId, setBricks, setState);
        SERVICES.fetchTaxes(setTaxes, setState);
        SERVICES.fetchParentArticlesByBrickId(brickId, setParentArticles, setState);

        SERVICES.fetchChildArticles(setChildArticles);
    }, []);

    useEffect(() => {
        const familyId = state.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier.family.familyId;
        SERVICES.fetchClassesByFamilyId(familyId, setClasses, setState);
    }, [state.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier.family.familyId]);

    useEffect(() => {
        const classId = state.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier.classId;
        SERVICES.fetchBricksByClassId(classId, setBricks, setState);
    }, [state.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier.classId]);

    useEffect(() => {
        const brickId = state.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.brickId;
        SERVICES.fetchParentArticlesByBrickId(brickId, setParentArticles, setState);
    }, [state.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.brickId]);

    return (
        <ChildArticles>
            <ChildArticles.Section>
                <ChildArticles.SectionTitle>Classification</ChildArticles.SectionTitle>
                <ChildArticles.Row>
                    <ChildArticles.Column>
                        <ChildArticles.Select
                            label="family"
                            value={state.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier.family.familyId}
                            onChange={(event) => SERVICES.handleFamily(event, setState)}
                        >
                            {families.map((family, index) => (
                                <ChildArticles.Option key={index} value={family.familyId}>
                                    {family.familyName}
                                </ChildArticles.Option>
                            ))}
                        </ChildArticles.Select>
                    </ChildArticles.Column>
                    <ChildArticles.Column>
                        <ChildArticles.Select
                            label="Class"
                            value={state.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier.classId}
                            onChange={(event) => SERVICES.handleClass(event, setState)}
                        >
                            {classes.map((cls, index) => (
                                <ChildArticles.Option key={index} value={cls.classIdentifier.classId}>
                                    {cls.className}
                                </ChildArticles.Option>
                            ))}
                        </ChildArticles.Select>
                    </ChildArticles.Column>
                    <ChildArticles.Column>
                        <ChildArticles.Select
                            label="Brick"
                            value={state.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.brickId}
                            onChange={(event) => SERVICES.handleBrick(event, setState)}
                        >
                            {bricks.map((brick, index) => (
                                <ChildArticles.Option key={index} value={brick.brickIdentifier.brickId}>
                                    {brick.brickName}
                                </ChildArticles.Option>
                            ))}
                        </ChildArticles.Select>
                    </ChildArticles.Column>
                    <ChildArticles.Column>
                        <ChildArticles.Select
                            label="Parent article"
                            value={state.childArticleIdentifier.parentArticles.parentArticleIdentifier.parentArticleId}
                            onChange={(event) => SERVICES.handleParentArticle(event, setState)}
                        >
                            {parentArticles.map((parentArticle, index) => (
                                <ChildArticles.Option key={index} value={parentArticle.parentArticleIdentifier.parentArticleId}>
                                    {parentArticle.parentArticleName}
                                </ChildArticles.Option>
                            ))}
                        </ChildArticles.Select>
                    </ChildArticles.Column>
                </ChildArticles.Row>
            </ChildArticles.Section>

            <ChildArticles.Section>
                <ChildArticles.SectionTitle>Product dimensions</ChildArticles.SectionTitle>
                <ChildArticles.Row>
                    <ChildArticles.Column>
                        <ChildArticles.Text
                            label="Weight"
                            value={state.weight}
                            onChange={(event) => SERVICES.handleWeight(event, setState)}
                        />
                    </ChildArticles.Column>
                    <ChildArticles.Column>
                        <ChildArticles.Text
                            label="Unit of Measurement"
                            value={state.unitOfMeasurement}
                            onChange={(event) => SERVICES.handleUnitOfMeasurement(event, setState)}
                        />
                    </ChildArticles.Column>
                    <ChildArticles.Column>
                        <ChildArticles.Text
                            label="Inventory"
                            value={state.inventory}
                            onChange={(event) => SERVICES.handleInventory(event, setState)}
                        />
                    </ChildArticles.Column>
                </ChildArticles.Row>
                <ChildArticles.Row>
                    <ChildArticles.Column>
                        <ChildArticles.Text
                            label="Length"
                            value={state.length}
                            onChange={(event) => SERVICES.handleLength(event, setState)}
                        />
                    </ChildArticles.Column>
                    <ChildArticles.Column>
                        <ChildArticles.Text
                            label="Width"
                            value={state.width}
                            onChange={(event) => SERVICES.handleWidth(event, setState)}
                        />
                    </ChildArticles.Column>
                    <ChildArticles.Column>
                        <ChildArticles.Text
                            label="Height"
                            value={state.height}
                            onChange={(event) => SERVICES.handleHeight(event, setState)}
                        />
                    </ChildArticles.Column>
                </ChildArticles.Row>
            </ChildArticles.Section>

            <ChildArticles.Section>
                <ChildArticles.SectionTitle>Price calculation</ChildArticles.SectionTitle>
                <ChildArticles.Row>
                    <ChildArticles.Column>
                        <ChildArticles.Text
                            label="EAN"
                            value={state.eanCode}
                            onChange={(event) => SERVICES.handleEANCode(event, setState)}
                        />
                    </ChildArticles.Column>
                    <ChildArticles.Column>
                        <ChildArticles.Select
                            label="Tax"
                            value={state.taxCode}
                            onChange={(event) => SERVICES.handleTax(event, setState)}
                        >
                            {taxes.map((tax, index) => (
                                <ChildArticles.Option key={index} value={tax.taxCode}>
                                    {tax.taxPercentage}
                                </ChildArticles.Option>
                            ))}
                        </ChildArticles.Select>
                    </ChildArticles.Column>
                    <ChildArticles.Column>
                        <ChildArticles.Text
                            label="Cost price"
                            value={state.costPrice}
                            onChange={(event) => SERVICES.handleCostPrice(event, setState)}
                        />
                    </ChildArticles.Column>
                    <ChildArticles.Column>
                        <ChildArticles.Text
                            label="Margin"
                            value={state.margin}
                            onChange={(event) => SERVICES.handleMargin(event, setState)}
                        />
                    </ChildArticles.Column>
                </ChildArticles.Row>
                <ChildArticles.Row>
                    <ChildArticles.Column>
                        <ChildArticles.Text
                            label="discount"
                            value={state.discount}
                            onChange={(event) => SERVICES.handleDiscount(event, setState)}
                        />
                    </ChildArticles.Column>
                    <ChildArticles.Column>
                        <ChildArticles.Select
                            label="Discount type"
                            value={state.discountType}
                            onChange={(event) => SERVICES.handleDiscountType(event, setState)}
                        >
                            <ChildArticles.Option value="Fixed">Fixed</ChildArticles.Option>
                            <ChildArticles.Option value="Percentage">Percentage</ChildArticles.Option>
                        </ChildArticles.Select>
                    </ChildArticles.Column>
                    <ChildArticles.Column>
                        <ChildArticles.Date
                            label="Valid from"
                            min={formattedDate}
                            value={state.validFrom}
                            onChange={(event) => SERVICES.handleValidFrom(event, setState)}
                        />
                    </ChildArticles.Column>
                    <ChildArticles.Column>
                        <ChildArticles.Date
                            label="Valid to"
                            min={state.validFrom}
                            value={state.validTo}
                            onChange={(event) => SERVICES.handleValidTo(event, setState)}
                        />
                    </ChildArticles.Column>
                </ChildArticles.Row>
            </ChildArticles.Section>

            <ChildArticles.Row>
                <ChildArticles.CreateButton
                    onClick={(event) => SERVICES.insertChildArticles(event, state, setState, product)}
                >Create</ChildArticles.CreateButton>
            </ChildArticles.Row>

            <ChildArticles.Row>
                <ChildArticles.Table>
                    <ChildArticles.TableRow>
                        <ChildArticles.TableHeader>S.No</ChildArticles.TableHeader>
                        <ChildArticles.TableHeader>Family</ChildArticles.TableHeader>
                        <ChildArticles.TableHeader>Parent article code</ChildArticles.TableHeader>
                        <ChildArticles.TableHeader>Child article code</ChildArticles.TableHeader>
                        <ChildArticles.TableHeader>Weight</ChildArticles.TableHeader>
                        <ChildArticles.TableHeader>UOM</ChildArticles.TableHeader>
                        <ChildArticles.TableHeader>M.R.P</ChildArticles.TableHeader>
                        <ChildArticles.TableHeader>Offer price</ChildArticles.TableHeader>
                        <ChildArticles.TableHeader>Inventory</ChildArticles.TableHeader>
                        <ChildArticles.TableHeader>Offer status</ChildArticles.TableHeader>
                        <ChildArticles.TableHeader>Edit</ChildArticles.TableHeader>
                        <ChildArticles.TableHeader>Delete</ChildArticles.TableHeader>
                    </ChildArticles.TableRow>
                    {childArticles.map((childArticle, index) => (
                        <ChildArticles.TableRow key={index}>
                            <ChildArticles.TableData>{index + 1}</ChildArticles.TableData>
                            <ChildArticles.TableData>
                                {childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier.family.familyName}
                            </ChildArticles.TableData>
                            <ChildArticles.TableData>
                                {
                                    childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier.family.familyId +
                                    childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier.classId +
                                    childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.brickId +
                                    childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.parentArticleId
                                }
                            </ChildArticles.TableData>
                            <ChildArticles.TableData>
                                {
                                    childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier.family.familyId +
                                    childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.classEntity.classIdentifier.classId +
                                    childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.brick.brickIdentifier.brickId +
                                    childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.parentArticleId +
                                    childArticle.childArticleIdentifier.childArticleId
                                }
                            </ChildArticles.TableData>
                            <ChildArticles.TableData>
                                {childArticle.weight}
                            </ChildArticles.TableData>
                            <ChildArticles.TableData>
                                {childArticle.unitOfMeasurement}
                            </ChildArticles.TableData>
                            <ChildArticles.TableData>{childArticle.maximumRetailPrice}</ChildArticles.TableData>
                            <ChildArticles.TableData>{childArticle.offerPrice}</ChildArticles.TableData>
                            <ChildArticles.TableData>{childArticle.inventory}</ChildArticles.TableData>
                            <ChildArticles.TableData></ChildArticles.TableData>
                            <ChildArticles.TableData>
                                <ChildArticles.EditDeleteButton
                                    onClick={(event) => SERVICES.editChildArticle(event, childArticle)}
                                ><FaPencilAlt /></ChildArticles.EditDeleteButton>
                            </ChildArticles.TableData>
                            <ChildArticles.TableData>
                                <ChildArticles.EditDeleteButton
                                    onClick={(event) => SERVICES.deleteChildArticle(event, childArticle)}
                                ><FaTrash /></ChildArticles.EditDeleteButton>
                            </ChildArticles.TableData>
                        </ChildArticles.TableRow>
                    ))}

                </ChildArticles.Table>
            </ChildArticles.Row>
        </ChildArticles>
    )
}
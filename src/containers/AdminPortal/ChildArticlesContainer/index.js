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
                    "productId": "",
                    "family": {
                        "familyId": ""
                    }
                }
            },
            "weights": {
                "weightCode": ""
            }
        },
        "costPrice": 0,
        "margin": 0,
        "discount": 0,
        "discountType": "",
        "taxCode": "TAX5",
        "maximumRetailPrice": 0,
        "offerPrice": 0,
        "length": 0,
        "width": 0,
        "height": 0,
        "EANCode": "",
        "inventory": 0,
        "validFrom": formattedDate,
        "validTo": formattedDate,
        "display": true
    }

    const [state, setState] = useState(product);
    const [families, setFamilies] = useState([]);
    const [taxes, setTaxes] = useState([]);
    const [weights, setWeights] = useState([]);
    const [parentArticles, setParentArticles] = useState([]);
    const [childArticles, setChildArticles] = useState([]);

    useEffect(() => {
        const familyId = state.childArticleIdentifier.parentArticles.parentArticleIdentifier.family.familyId;

        SERVICES.fetchFamilies(setFamilies, setState);
        SERVICES.fetchTaxes(setTaxes);
        SERVICES.fetchWeights(setWeights, setState);
        SERVICES.fetchChildArticles(setChildArticles);
        SERVICES.fetchParentArticlesByFamilyId(setParentArticles, familyId, setState);
    }, []);

    useEffect(() => {
        const familyId = state.childArticleIdentifier.parentArticles.parentArticleIdentifier.family.familyId;

        SERVICES.fetchParentArticlesByFamilyId(setParentArticles, familyId, setState);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.childArticleIdentifier.parentArticles.parentArticleIdentifier.family.familyId]);

    return (
        <ChildArticles>
            <ChildArticles.Section>
                <ChildArticles.SectionTitle>Classification</ChildArticles.SectionTitle>
                <ChildArticles.Row>
                    <ChildArticles.Column>
                        <ChildArticles.Select
                            label="family"
                            value={state.childArticleIdentifier.parentArticles.parentArticleIdentifier.family.familyId}
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
                            label="Parent article"
                            value={state.childArticleIdentifier.parentArticles.parentArticleIdentifier.productId}
                            onChange={(event) => SERVICES.handleParentArticle(event, setState)}
                        >
                            {parentArticles.map((parentArticle, index) => (
                                <ChildArticles.Option key={index} value={parentArticle.parentArticleIdentifier.productId}>
                                    {parentArticle.productName}
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
                        <ChildArticles.Select
                            label="Weights"
                            value={state.childArticleIdentifier.weights.weightCode}
                            onChange={(event) => SERVICES.handleWeights(event, setState)}
                        >
                            {weights.map((weight, index) => (
                                <ChildArticles.Option key={index} value={weight.weightCode}>
                                    {weight.weight + " " + weight.unitOfMeasurement}
                                </ChildArticles.Option>
                            ))}
                        </ChildArticles.Select>
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
                            value={state.EANCode}
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
                                {childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.family.familyName}
                            </ChildArticles.TableData>
                            <ChildArticles.TableData>
                                {
                                    childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.family.familyId +
                                    childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.productId
                                }
                            </ChildArticles.TableData>
                            <ChildArticles.TableData>
                                {
                                    childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.family.familyId +
                                    childArticle.childArticleIdentifier.parentArticles.parentArticleIdentifier.productId +
                                    childArticle.childArticleIdentifier.weights.weightCode
                                }
                            </ChildArticles.TableData>
                            <ChildArticles.TableData>
                                {childArticle.childArticleIdentifier.weights.weight}
                            </ChildArticles.TableData>
                            <ChildArticles.TableData>
                                {childArticle.childArticleIdentifier.weights.unitOfMeasurement}
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
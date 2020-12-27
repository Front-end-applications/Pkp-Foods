import React, { useState, useEffect } from "react";

import { ProductManagement } from "../../../components/adminPortal";
import * as SERVICES from "./ProductManagementServices";

export default function ProductManagementContainer() {

    const [families, setFamilies] = useState([]);
    const [classes, setClasses] = useState([]);
    const [bricks, setBricks] = useState([]);
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([])

    useEffect(() => {
        SERVICES.fetchFamilies(setFamilies);
        SERVICES.fetchClasses(setClasses);
        SERVICES.fetchBricks(setBricks);
        SERVICES.fetchBrands(setBrands);
        SERVICES.fetchProducts(setProducts);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(products);

    return (
        <ProductManagement>
            <ProductManagement.Section>
                <ProductManagement.SectionTitle>Classification</ProductManagement.SectionTitle>
                <ProductManagement.Row>
                    <ProductManagement.Column>
                        <ProductManagement.Select label="family">
                            {families.map((family, index) => (
                                <ProductManagement.Option key={index}>
                                    {family.familyName}
                                </ProductManagement.Option>
                            ))}
                        </ProductManagement.Select>
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Select label="Class">
                            {classes.map((_class, index) => (
                                <ProductManagement.Option key={index}>
                                    {_class.className}
                                </ProductManagement.Option>
                            ))}
                        </ProductManagement.Select>
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Select label="Brick">
                            {bricks.map((brick, index) => (
                                <ProductManagement.Option key={index}>
                                    {brick.brickName}
                                </ProductManagement.Option>
                            ))}
                        </ProductManagement.Select>
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Select label="Brand">
                            {brands.map((brand, index) => (
                                <ProductManagement.Option key={index}>
                                    {brand.brandName}
                                </ProductManagement.Option>
                            ))}
                        </ProductManagement.Select>
                    </ProductManagement.Column>
                </ProductManagement.Row>
            </ProductManagement.Section>

            <ProductManagement.Section>
                <ProductManagement.SectionTitle>Article code</ProductManagement.SectionTitle>
                <ProductManagement.Row>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="Parent article code" />
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="Description" />
                    </ProductManagement.Column>
                </ProductManagement.Row>
                <ProductManagement.Row>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="Child article code" />
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="Description" />
                    </ProductManagement.Column>
                </ProductManagement.Row>
            </ProductManagement.Section>

            <ProductManagement.Section>
                <ProductManagement.SectionTitle>Product dimensions</ProductManagement.SectionTitle>
                <ProductManagement.Row>
                    <ProductManagement.Column>
                        <ProductManagement.Select label="UOM">

                        </ProductManagement.Select>
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="Weight" />
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="Inventory" />
                    </ProductManagement.Column>
                </ProductManagement.Row>
                <ProductManagement.Row>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="Length" />
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="Width" />
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="Height" />
                    </ProductManagement.Column>
                </ProductManagement.Row>
            </ProductManagement.Section>

            <ProductManagement.Section>
                <ProductManagement.SectionTitle>Price calculation</ProductManagement.SectionTitle>
                <ProductManagement.Row>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="EAN" />
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="Tax" />
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="Cost price" />
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="Margin" />
                    </ProductManagement.Column>
                </ProductManagement.Row>
                <ProductManagement.Row>
                    <ProductManagement.Column>
                        <ProductManagement.Text label="discount" />
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Select label="Discount type">

                        </ProductManagement.Select>
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Date label="Valid from" />
                    </ProductManagement.Column>
                    <ProductManagement.Column>
                        <ProductManagement.Date label="Valid to" />
                    </ProductManagement.Column>
                </ProductManagement.Row>
            </ProductManagement.Section>

            <ProductManagement.Row>
                <ProductManagement.CreateButton>Create</ProductManagement.CreateButton>
            </ProductManagement.Row>

            <ProductManagement.Row>
                <ProductManagement.Table>
                    <ProductManagement.TableRow>
                        <ProductManagement.TableHeader>S.No</ProductManagement.TableHeader>
                        <ProductManagement.TableHeader>Family</ProductManagement.TableHeader>
                        <ProductManagement.TableHeader>Parent article code</ProductManagement.TableHeader>
                        <ProductManagement.TableHeader>Child article code</ProductManagement.TableHeader>
                        <ProductManagement.TableHeader>Child article description</ProductManagement.TableHeader>
                        <ProductManagement.TableHeader>UOM</ProductManagement.TableHeader>
                        <ProductManagement.TableHeader>Weight</ProductManagement.TableHeader>
                        <ProductManagement.TableHeader>M.R.P</ProductManagement.TableHeader>
                        <ProductManagement.TableHeader>Offer price</ProductManagement.TableHeader>
                        <ProductManagement.TableHeader>Inventory</ProductManagement.TableHeader>
                        <ProductManagement.TableHeader>Offer status</ProductManagement.TableHeader>
                        <ProductManagement.TableHeader>Edit</ProductManagement.TableHeader>
                        <ProductManagement.TableHeader>Delete</ProductManagement.TableHeader>
                    </ProductManagement.TableRow>
                    {products.map((product, index) => (
                        <ProductManagement.TableRow key={index}>
                            <ProductManagement.TableData>{index + 1}</ProductManagement.TableData>
                            <ProductManagement.TableData>
                                {product.childArticleIdentifier.parentArticles.parentArticleIdentifier.family.familyName}
                            </ProductManagement.TableData>
                            <ProductManagement.TableData>
                                {product.childArticleIdentifier.parentArticles.parentArticleIdentifier.family.familyId}
                            </ProductManagement.TableData>
                            <ProductManagement.TableData>
                                {
                                    product.childArticleIdentifier.parentArticles.parentArticleIdentifier.family.familyId +
                                    product.childArticleIdentifier.parentArticles.parentArticleIdentifier.productId +
                                    product.childArticleIdentifier.weights.weightCode
                                }
                            </ProductManagement.TableData>
                            <ProductManagement.TableData>
                                Article Desc
                            </ProductManagement.TableData>
                            <ProductManagement.TableData>
                                {product.childArticleIdentifier.weights.unitOfMeasurement}
                            </ProductManagement.TableData>
                            <ProductManagement.TableData>
                                {product.childArticleIdentifier.weights.weight}
                            </ProductManagement.TableData>
                            <ProductManagement.TableData>{product.maximumRetailPrice}</ProductManagement.TableData>
                            <ProductManagement.TableData></ProductManagement.TableData>
                            <ProductManagement.TableData>{product.inventory}</ProductManagement.TableData>
                            <ProductManagement.TableData></ProductManagement.TableData>
                            <ProductManagement.TableData></ProductManagement.TableData>
                            <ProductManagement.TableData></ProductManagement.TableData>
                        </ProductManagement.TableRow>
                    ))}

                </ProductManagement.Table>
            </ProductManagement.Row>
        </ProductManagement>
    )
}
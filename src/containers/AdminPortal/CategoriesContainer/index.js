import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa"

import { Categories } from "../../../components/adminPortal";
import * as SERVICES from "./CategoriesServices";

export default function CategoriesContainer() {

    const family = {
        "familyName": "",
        "familyImage": "",
        "description": ""
    };

    const _class = {
        "classIdentifier": {
            "family": {
                "familyId": ""
            }
        },
        "className": ""
    };


    const brick = {
        "brickIdentifier": {
            "classEntity": {
                "classIdentifier": {
                    "classId": "",
                    "family": {
                        "familyId": ""
                    }
                }
            }
        },
        "brickName": ""
    };

    const brand = {
        "brandId": "",
        "brandName": ""
    };

    const [familyState, setFamilyState] = useState(family);
    const [classState, setClassState] = useState(_class);
    const [brickState, setBrickState] = useState(brick);
    const [brandState, setBrandState] = useState(brand);
    const [families, setFamilies] = useState([]);
    const [classes, setClasses] = useState([]);
    const [classesByFamilyId, setClassesByFamilyId] = useState([]);
    const [bricks, setBricks] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        SERVICES.fetchFamilies(setFamilies, setClassState, setBrickState);
        SERVICES.fetchClasses(setClasses);
        SERVICES.fetchClassesByFamilyId(brickState.brickIdentifier.classEntity.classIdentifier.family.familyId, setClassesByFamilyId, setBrickState);
        SERVICES.fetchBricks(setBricks);
        SERVICES.fetchBrands(setBrands);
    }, []);

    useEffect(() => {
        const familyId = brickState.brickIdentifier.classEntity.classIdentifier.family.familyId;
        SERVICES.fetchClassesByFamilyId(familyId, setClassesByFamilyId, setBrickState);
    }, [brickState.brickIdentifier.classEntity.classIdentifier.family.familyId]);

    console.log(brickState)

    return (
        <Categories>
            <Categories.Section>
                <Categories.SectionTitle>Family</Categories.SectionTitle>
                <Categories.Row>
                    <Categories.Column>
                        <Categories.Row>
                            <Categories.Column>
                                <Categories.Text
                                    label="Family Name"
                                    value={familyState.familyName}
                                    onChange={(event) => SERVICES.handleFamilyName(event, setFamilyState)}
                                />
                            </Categories.Column>
                        </Categories.Row>
                        <Categories.Row>
                            <Categories.Column>
                                <Categories.Text
                                    label="Family Image"
                                    value={familyState.familyImage}
                                    onChange={(event) => SERVICES.handleFamilyImage(event, setFamilyState)}
                                />
                            </Categories.Column>
                            <Categories.Column>
                                <Categories.Text
                                    label="Description"
                                    value={familyState.description}
                                    onChange={(event) => SERVICES.handleFamilyDescription(event, setFamilyState)}
                                />
                            </Categories.Column>
                        </Categories.Row>
                        <Categories.Row>
                            <Categories.CreateButton
                                onClick={(event) => SERVICES.insertFamilies(event, familyState, setFamilyState, family)}
                            >Create</Categories.CreateButton>
                        </Categories.Row>
                    </Categories.Column>
                    <Categories.Column>
                        <Categories.Table>
                            <Categories.TableRow>
                                <Categories.TableHeader>S.No</Categories.TableHeader>
                                <Categories.TableHeader>Family Code</Categories.TableHeader>
                                <Categories.TableHeader>Family Name</Categories.TableHeader>
                                <Categories.TableHeader>Description</Categories.TableHeader>
                                <Categories.TableHeader>Delete</Categories.TableHeader>
                            </Categories.TableRow>
                            {families.map((family, index) => (
                                <Categories.TableRow key={index}>
                                    <Categories.TableData>{index + 1}</Categories.TableData>
                                    <Categories.TableData>{family.familyId}</Categories.TableData>
                                    <Categories.TableData>{family.familyName}</Categories.TableData>
                                    <Categories.TableData>{family.description}</Categories.TableData>
                                    <Categories.TableData>
                                        <Categories.EditDeleteButton
                                            onClick={(event) => SERVICES.deleteFamilies(event, family)}
                                        ><FaTrash /></Categories.EditDeleteButton>
                                    </Categories.TableData>
                                </Categories.TableRow>
                            ))}

                        </Categories.Table>
                    </Categories.Column>
                </Categories.Row>
            </Categories.Section>

            <Categories.Section>
                <Categories.SectionTitle>Class</Categories.SectionTitle>
                <Categories.Row>
                    <Categories.Column>
                        <Categories.Row>
                            <Categories.Column>
                                <Categories.Select
                                    label="family"
                                    value={classState.classIdentifier.family.familyId}
                                    onChange={(event) => SERVICES.handleClassFamily(event, setClassState)}
                                >
                                    {families.map((family, index) => (
                                        <Categories.Option key={index} value={family.familyId}>
                                            {family.familyName}
                                        </Categories.Option>
                                    ))}
                                </Categories.Select>
                            </Categories.Column>
                        </Categories.Row>
                        <Categories.Row>
                            <Categories.Column>
                                <Categories.Text
                                    label="Class Name"
                                    value={classState.className}
                                    onChange={(event) => SERVICES.handleClassName(event, setClassState)}
                                />
                            </Categories.Column>
                        </Categories.Row>
                        <Categories.Row>
                            <Categories.CreateButton
                                onClick={(event) => SERVICES.insertClasses(event, classState, setClassState, _class)}
                            >Create</Categories.CreateButton>
                        </Categories.Row>
                    </Categories.Column>
                    <Categories.Column>
                        <Categories.Table>
                            <Categories.TableRow>
                                <Categories.TableHeader>S.No</Categories.TableHeader>
                                <Categories.TableHeader>Class Code</Categories.TableHeader>
                                <Categories.TableHeader>Family Name</Categories.TableHeader>
                                <Categories.TableHeader>Class Name</Categories.TableHeader>
                                <Categories.TableHeader>Delete</Categories.TableHeader>
                            </Categories.TableRow>
                            {classes.map((_class, index) => (
                                <Categories.TableRow key={index}>
                                    <Categories.TableData>{index + 1}</Categories.TableData>
                                    <Categories.TableData>{_class.classIdentifier.classId}</Categories.TableData>
                                    <Categories.TableData>{_class.classIdentifier.family.familyName}</Categories.TableData>
                                    <Categories.TableData>{_class.className}</Categories.TableData>
                                    <Categories.TableData>
                                        <Categories.EditDeleteButton
                                            onClick={(event) => SERVICES.deleteClasses(event, _class)}
                                        ><FaTrash /></Categories.EditDeleteButton>
                                    </Categories.TableData>
                                </Categories.TableRow>
                            ))}

                        </Categories.Table>
                    </Categories.Column>
                </Categories.Row>
            </Categories.Section>

            <Categories.Section>
                <Categories.SectionTitle>Brick</Categories.SectionTitle>
                <Categories.Row>
                    <Categories.Column>
                        <Categories.Row>
                            <Categories.Column>
                                <Categories.Select
                                    label="family"
                                    value={brickState.brickIdentifier.classEntity.classIdentifier.family.familyId}
                                    onChange={(event) => SERVICES.handleBrickFamily(event, setBrickState)}
                                >
                                    {families.map((family, index) => (
                                        <Categories.Option key={index} value={family.familyId}>
                                            {family.familyName}
                                        </Categories.Option>
                                    ))}
                                </Categories.Select>
                            </Categories.Column>
                            <Categories.Column>
                                <Categories.Select
                                    label="class"
                                    value={brickState.brickIdentifier.classEntity.classIdentifier.classId}
                                    onChange={(event) => SERVICES.handleBrickClass(event, setBrickState)}
                                >
                                    {
                                        classesByFamilyId.map((_class, index) => (
                                            <Categories.Option key={index} value={_class.classIdentifier.classId}>
                                                {_class.className}
                                            </Categories.Option>
                                        ))
                                    }
                                </Categories.Select>
                            </Categories.Column>
                        </Categories.Row>
                        <Categories.Row>
                            <Categories.Column>
                                <Categories.Text
                                    label="Brick Name"
                                    value={brickState.brickName}
                                    onChange={(event) => SERVICES.handleBrickName(event, setBrickState)}
                                />
                            </Categories.Column>
                        </Categories.Row>
                        <Categories.Row>
                            <Categories.CreateButton
                                onClick={(event) => SERVICES.insertBricks(event, brickState, setBrickState, brick)}
                            >Create</Categories.CreateButton>
                        </Categories.Row>
                    </Categories.Column>
                    <Categories.Column>
                        <Categories.Table>
                            <Categories.TableRow>
                                <Categories.TableHeader>S.No</Categories.TableHeader>
                                <Categories.TableHeader>Brick Code</Categories.TableHeader>
                                <Categories.TableHeader>Family Name</Categories.TableHeader>
                                <Categories.TableHeader>Class Name</Categories.TableHeader>
                                <Categories.TableHeader>Brick Name</Categories.TableHeader>
                                <Categories.TableHeader>Delete</Categories.TableHeader>
                            </Categories.TableRow>
                            {bricks.map((brick, index) => (
                                <Categories.TableRow key={index}>
                                    <Categories.TableData>{index + 1}</Categories.TableData>
                                    <Categories.TableData>{brick.brickIdentifier.brickId}</Categories.TableData>
                                    <Categories.TableData>{brick.brickIdentifier.classEntity.classIdentifier.family.familyName}</Categories.TableData>
                                    <Categories.TableData>{brick.brickIdentifier.classEntity.className}</Categories.TableData>
                                    <Categories.TableData>{brick.brickName}</Categories.TableData>
                                    <Categories.TableData>
                                        <Categories.EditDeleteButton
                                            onClick={(event) => SERVICES.deleteBricks(event, brick)}
                                        ><FaTrash /></Categories.EditDeleteButton>
                                    </Categories.TableData>
                                </Categories.TableRow>
                            ))}

                        </Categories.Table>
                    </Categories.Column>
                </Categories.Row>
            </Categories.Section>

            <Categories.Section>
                <Categories.SectionTitle>Brand</Categories.SectionTitle>
                <Categories.Row>
                    <Categories.Column>
                        <Categories.Row>
                            <Categories.Column>
                                <Categories.Text
                                    label="Brand code"
                                    value={classState.brandId}
                                    onChange={(event) => SERVICES.handleBrandCode(event, setBrandState)}

                                />
                            </Categories.Column>
                            <Categories.Column>
                                <Categories.Text
                                    label="Brand Name"
                                    value={classState.brandName}
                                    onChange={(event) => SERVICES.handleBrandName(event, setBrandState)}

                                />
                            </Categories.Column>
                        </Categories.Row>
                        <Categories.Row>
                            <Categories.CreateButton
                                onClick={(event) => SERVICES.insertBrands(event, brandState, setBrandState, brand)}
                            >Create</Categories.CreateButton>
                        </Categories.Row>
                    </Categories.Column>
                    <Categories.Column>
                        <Categories.Table>
                            <Categories.TableRow>
                                <Categories.TableHeader>S.No</Categories.TableHeader>
                                <Categories.TableHeader>Brand Code</Categories.TableHeader>
                                <Categories.TableHeader>Brand Name</Categories.TableHeader>
                                <Categories.TableHeader>Delete</Categories.TableHeader>
                            </Categories.TableRow>
                            {brands.map((brand, index) => (
                                <Categories.TableRow key={index}>
                                    <Categories.TableData>{index + 1}</Categories.TableData>
                                    <Categories.TableData>{brand.brandId}</Categories.TableData>
                                    <Categories.TableData>{brand.brandName}</Categories.TableData>
                                    <Categories.TableData>
                                        <Categories.EditDeleteButton
                                            onClick={(event) => SERVICES.deleteBrands(event, brand)}
                                        ><FaTrash /></Categories.EditDeleteButton>
                                    </Categories.TableData>
                                </Categories.TableRow>
                            ))}
                        </Categories.Table>
                    </Categories.Column>
                </Categories.Row>
            </Categories.Section>
        </Categories >
    )
}
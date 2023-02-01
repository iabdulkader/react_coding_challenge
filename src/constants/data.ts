import { DataType } from './../types/index';

export const data: DataType[] = [
    {
        id: 1,
        value: "Manufacturing",
        children: [
            {
                id: 2,
                value: "Construction materials",
            },
            {
                id: 3,
                value: "Electronics and Optics",
            },
            {
                id: 4,
                value: "Food and Beverages",
                children: [
                    {
                        id: 5,
                        value: "Bakery & confectionery products",
                    },
                    {
                        id: 6,
                        value: "Beverages",
                    },
                    {
                        id: 7,
                        value: "Fish & fish products",
                    },
                    {
                        id: 8,
                        value: "Meat & meat products",
                    },
                    {
                        id: 9,
                        value: "Milk & dairy products",
                    },
                    {
                        id: 10,
                        value: "Other",
                    },
                    {
                        id: 11,
                        value: "Sweets & snack foods",
                    },
                ],
            },
            {
                id: 12,
                value: "Furniture",
                children: [
                    {
                        id: 13,
                        value: "Bathroom/sauna",
                    },
                    {
                        id: 14,
                        value: "Bedroom",
                    },
                    {
                        id: 15,
                        value: "Children's room",
                    },
                    {
                        id: 16,
                        value: "Kitchen",
                    },
                    {
                        id: 17,
                        value: "Living room",
                    },
                    {
                        id: 18,
                        value: "Office",
                    },
                    {
                        id: 19,
                        value: "Other (Furniture)",
                    },
                    {
                        id: 20,
                        value: "Outdoor",
                    },
                    {
                        id: 21,
                        value: "Project furniture",
                    },
                ],
            },
            {
                id: 22,
                value: "Machinery",
                children: [
                    {
                        id: 23,
                        value: "Machinery components",
                    },
                    {
                        id: 24,
                        value: "Machinery equipment/tools",
                    },
                    {
                        id: 25,
                        value: "Manufacture of machinery",
                    },
                    {
                        id: 26,
                        value: "Maritime",
                        children: [
                            {
                                id: 27,
                                value: "Aluminium and steel workboats",
                            },
                            {
                                id: 28,
                                value: "Boat/Yacht building",
                            },
                            {
                                id: 29,
                                value: "Ship repair and conversion",
                            },
                        ],
                    },
                    {
                        id: 30,
                        value: "Metal structures",
                    },
                    {
                        id: 31,
                        value: "Other",
                    },
                    {
                        id: 32,
                        value: "Repair and maintenance service",
                    },
                ],
            },
            {
                id: 33,
                value: "Metalworking",
                children: [
                    {
                        id: 34,
                        value: "Construction of metal structures",
                    },
                    {
                        id: 35,
                        value: "Houses and buildings",
                    },
                    {
                        id: 36,
                        value: "Metal products",
                    },
                    {
                        id: 37,
                        value: "Metal works",
                        children: [
                            {
                                id: 38,
                                value: "CNC-machining",
                            },
                            {
                                id: 39,
                                value: "Forgings, Fasteners",
                            },
                            {
                                id: 40,
                                value: "Gas, Plasma, Laser cutting",
                            },
                            {
                                id: 41,
                                value: "MIG, TIG, Aluminum welding",
                            },
                        ],
                    },
                ],
            },
            {
                id: 42,
                value: "Plastic and Rubber",
                children: [
                    {
                        id: 43,
                        value: "Packaging",
                    },
                    {
                        id: 44,
                        value: "Plastic goods",
                    },
                    {
                        id: 45,
                        value: "Plastic profiles",
                    },
                    {
                        id: 46,
                        value: "Plastic processing technology",
                        children: [
                            {
                                id: 47,
                                value: "Blowing",
                            },
                            {
                                id: 48,
                                value: "Moulding",
                            },
                            {
                                id: 49,
                                value: "Plastics welding and processing",
                            },
                        ],
                    },
                ],
            },
            {
                id: 50,
                value: "Printing",
                children: [
                    {
                        id: 51,
                        value: "Advertising",
                    },
                    {
                        id: 52,
                        value: "Book/Periodical printing",
                    },
                    {
                        id: 53,
                        value: "Labeling and packaging printing",
                    },
                ],
            },
            {
                id: 54,
                value: "Textile and Clothing",
                children: [
                    {
                        id: 55,
                        value: "Clothing",
                    },
                    {
                        id: 56,
                        value: "Textile",
                    },
                ],
            },
            {
                id: 57,
                value: "Wood",
                children: [
                    {
                        id: 58,
                        value: "Other (Wood)",
                    },
                    {
                        id: 59,
                        value: "Wooden building materials",
                    },
                    {
                        id: 60,
                        value: "Wooden houses",
                    },
                ]
            },
        ],
    },
    {
        id: 61,
        value: "Services",
        children: [
            {
                id: 62,
                value: "Business services",
            },
            {
                id: 63,
                value: "Engineering services",
            },
            {
                id: 64,
                value: "Information technology and telecommunications",
                children: [
                    {
                        id: 65,
                        value: "Data processing, web portals and E-marketing",
                    },
                    {
                        id: 66,
                        value: "Programming, consultancy",
                    },
                    {
                        id: 67,
                        value: "Software, Hardware",
                    },
                    {
                        id: 68,
                        value: "Telecommunications",
                    }
                ],
            },
            {
                id: 69,
                value: "Tourism",
            },
            {
                id: 70,
                value: "Translation services",
            },
            {
                id: 71,
                value: "Transport and logistics",
                children: [
                    {
                        id: 72,
                        value: "Air"
                    },
                    {
                        id: 73,
                        value: "Rail"
                    },
                    {
                        id: 74,
                        value: "Road"
                    },
                    {
                        id: 75,
                        value: "Water"
                    },
                ],
            }
        ],
    },
    {
        id: 76,
        value: "Other",
        children: [
            {
                id: 77,
                value: "Creative industries",
            },
            {
                id: 78,
                value: "Energy technologies",
            },
            {
                id: 79,
                value: "Environment",
            },
        ]
    }

]






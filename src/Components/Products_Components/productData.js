import assets from "../../../public/assets/assets";

// Define main categories and their subcategories
export const categories = {
    'Continuous Casting Machines': {
        name: 'Continuous Casting Machines',
        subcategories: [
            '3-6 Radius CCM',
            '4-7 Radius CCM',
            '6-11 Radius CCM'
        ]
    },
    'Major Equipment': {
        name: 'Major Equipment',
        subcategories: [
            'Withdrawal Units',
            'Hydraulic Systems',
            'Rollers & Tables',
            'Mould Components',
            'Tundish Systems'
        ]
    },
    'Products By Application': {
        name: 'Products By Application',
        subcategories: [
            'Billets',
            'Blooms',
            'Rounds',
            'Beam Blanks'
        ]
    }
};

export const products = [
    {
        id: 1,
        name: '3-6 Radius Continuous Casting Machine',
        description: 'Ideal for small to medium-scale production. High precision and reliability.',
        category: ['Continuous Casting Machines', '3-6 Radius CCM'],
        image: assets.product1
    },
    {
        id: 2,
        name: '4-7 Radius Continuous Casting Machine',
        description: 'Perfect for medium to large-scale operations. Enhanced performance and longevity.',
        category: ['Continuous Casting Machines', '4-7 Radius CCM'],
        image: assets.product2
    },
    {
        id: 3,
        name: '6-11 Radius Continuous Casting Machine',
        description: 'Suitable for large-scale and high-demand production. Maximum efficiency and robust design.',
        category: ['Continuous Casting Machines', '6-11 Radius CCM'],
        image: assets.product3
    },
    {
        id: 4,
        name: 'Withdrawal Straighten Unit',
        description: 'Ensures smooth and precise withdrawal and straightening.',
        category: ['Major Equipment', 'Withdrawal Units'],
        image: assets.withdrawal_unit
    },
    {
        id: 5,
        name: 'Hydraulic Cylinder for CCM',
        description: 'Robust hydraulic cylinders for reliable operations.',
        category: ['Major Equipment', 'Hydraulic Systems'],
        image: assets.hydraulic_cylinder
    },
    {
        id: 6,
        name: 'Roller',
        description: 'High-quality rollers for consistent performance.',
        category: ['Major Equipment', 'Rollers & Tables'],
        image: assets.roller
    },
    // Add more products with proper categorization...
];

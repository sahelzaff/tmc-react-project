import assets from "../../../public/assets/assets";

const products = [
    {
        id: 1,
        name: '3-6 Radius Continuous Casting Machine',
        description: 'Ideal for small to medium-scale production. High precision and reliability.',
        category: ['Continuous Casting Machines (CCM)',
            'Machine Radius',
            '3-6 Radius',
            'Production Scale',
            'Small-scale',
            'Specialised Operations',

        ],
        image: assets.product1
    },
    {
        id: 2,
        name: '4-7 Radius Continuous Casting Machine',
        description: 'Perfect for medium to large-scale operations. Enhanced performance and longevity.',
        category: [
            'Continuous Casting Machines (CCM)',
            'Machine Radius',
            '4-7 Radius',
            'Production Scale',
            'Medium-scale',
            'Heavy Duty'
        ],
        image: assets.product2
    },
    {
        id: 3,
        name: '6-11 Radius Continuous Casting Machine',
        description: 'Suitable for large-scale and high-demand production. Maximum efficiency and robust design.',
        category: [
            'Continuous Casting Machines (CCM)',
            'Machine Radius',
            '6-11 Radius',
            'Production Scale',
            'Large-scale',
            'Heavy Duty'
        ],
        image: assets.product3
    },
    {
        id: 4,
        name: 'Withdrawal Straighten Unit',
        description: 'Ensures smooth and precise withdrawal and straightening.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.withdrawal_unit
    },
    {
        id: 5,
        name: 'Cam Unit',
        description: 'Facilitates accurate cam operations for better control.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.product1
    },
    {
        id: 6,
        name: 'Roller',
        description: 'High-quality rollers for consistent performance.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.roller
    },
    {
        id: 7,
        name: 'Roller Table',
        description: 'Durable roller tables for efficient material handling.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.drt_roller
    },
    {
        id: 8,
        name: 'Hydraulic Cylinder for CCM',
        description: 'Robust hydraulic cylinders for reliable operations.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.hydraulic_cylinder
    },
    {
        id: 9,
        name: 'Mould Jacket',
        description: 'Superior mould jackets for perfect casting shapes.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.product1
    },
    {
        id: 10,
        name: 'Plummer Block',
        description: 'Sturdy plummer blocks for stable mounting.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.product2
    },
    {
        id: 11,
        name: 'Hydraulic Power Pack',
        description: 'Efficient power packs for hydraulic systems.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.hydraulic_power
    },
    {
        id: 12,
        name: 'Cardan Shaft',
        description: 'High-performance cardan shafts for power transmission.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.product4
    },
    {
        id: 13,
        name: 'Rigid Dummy Bar',
        description: 'Essential for the initial casting process.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.dummy_bar
    },
    {
        id: 14,
        name: 'Radius Check Aluminum Template',
        description: 'Precision templates for accurate radius checks.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.product1
    },
    {
        id: 15,
        name: 'Dummy Bar Receiver & Pusher',
        description: 'Reliable receivers and pushers for dummy bars.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.dummy_bar
    },
    {
        id: 16,
        name: 'Ladle and Bell Alarm',
        description: 'Advanced alarm systems for safe operations.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.Ladle_and_Bell_Alarm
    },
    {
        id: 17,
        name: 'Tundish',
        description: 'High-quality tundishes for molten metal handling.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.tundish_car
    },
    {
        id: 18,
        name: 'Spray Nozzle',
        description: 'Precision nozzles for uniform spray distribution.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.spray_nozzle
    },
    {
        id: 19,
        name: 'Strand Guide Roller Assembly',
        description: 'Robust assemblies for guiding strands.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.drt_roller
    },
    {
        id: 20,
        name: 'Billet Shearing Machine',
        description: 'Efficient machines for shearing billets.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.billet
    },
    {
        id: 21,
        name: 'Shearing Machine Blade',
        description: 'Shearing Machine Blade',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.shearing_machine
    },
    {
        id: 22,
        name: 'Slide Gate Cylinder',
        description: 'Reliable cylinders for slide gate operations.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.sligate_cylinder
    },
    {
        id: 23,
        name: 'Operational Power Pack',
        description: 'Power packs designed for operational efficiency.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.Operational_Power_Pack
    },
    {
        id: 24,
        name: 'Eye Bolt',
        description: 'High-strength eye bolts for secure fastening.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.product3
    },
    {
        id: 25,
        name: 'Copper Mould Tube',
        description: 'Premium quality tubes for efficient casting.',
        category: [
            'Major Equipment'
        ]
        ,
        image: assets.product4
    },
    {
        id: 26,
        name: 'Billets 100mm x 160mm',
        description: 'Small, versatile billets for precise machining and forging.',
        category:  [
            'Billets',
            'Application'
        ],
        image: assets.billet
    },
    {
        id: 27,
        name: 'Blooms 200mm up to 300mm',
        description: ' Semi-finished products for rolling into structural shapes.',
        category: [
            'Blooms',
            'Application'
        ]
        ,
        image: assets.product2
    },
    {
        id: 28,
        name: 'Rounds 85mm',
        description: 'Circular sections for shafts and mechanical components.',
        category: [
            'Rounds',
            'Application'
        ]
        ,
        image: assets.product3
    },
    {
        id: 29,
        name: 'Rounds 85mm',
        description: 'Circular sections for shafts and mechanical components.',
        category: [
            'Rounds',
            'Application'
        ]
        ,
        image: assets.product4
    },
    {
        id: 30,
        name: 'Beam Blanks 150x150x100mm to 1150x490x130mm ',
        description: 'Rectangular blanks for structural beams and supports.',
        category: [
            'Beam Blanks',
            'Application'
        ]
        ,
        image: assets.product1
    },

];

// productData.js
const categories = {
    'Continuous Casting Machines (CCM)': [
        'Billets',
        'Blooms',
        'Rounds',
        'Beam Blanks',
        'Major Equipment',
    ],
    'Machine Radius': [
        '3-6 Radius',
        '4-7 Radius',
        '6-11 Radius'
    ],
    'Production Scale': [
        'Small-scale',
        'Medium-scale',
        'Large-scale'
    ],
    'Application': [
        'General Purpose',
        'Heavy Duty',
        'Specialised Operations'
    ]
};


export { products, categories };

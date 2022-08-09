import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'productList',
    initialState: [
        {
            id: 1,
            name: 'Macbook Air M2',
            name_detail: 'Macbook Air M2 10GPU 16GB 256GB - Midnight',
            price: '2000',
            description: 'M2 8CPU 10GPU 16GB 256GB 13.6 inch (2560x1664) IPS, Led Backlit, True Tone Touch ID ',
            imageUrl:
                'https://product.hstatic.net/1000026716/product/r_m2_13_6_inch_2022_midnight_0_98db5d74968b46a89ef9094eccaec48e_master_b58ca6a737da4d36b34176e74d46280f.png',
        },
        {
            id: 2,
            name: 'MacBook Pro 13 M2',
            breed: 'MacBook Pro 13 M2',
            price: '2500',
            description: 'M2 8CPU 10GPU 16GB 256GB 13.6 inch (2560x1664) IPS, Led Backlit, True Tone Touch ID ',
            imageUrl:
                'https://product.hstatic.net/1000026716/product/gearvn-macbook-pro-13-m2-10gpu-16gb-256gb-space-gray-2_bfbb7d6c7bd8475ab2af5ffd09579dc4.png',
        },
        {
            id: 3,
            name: 'Macbook Air M2',
            breed: 'Macbook Air M2',
            price: '2000',
            description: 'M2 8CPU 10GPU 16GB 256GB 13.6 inch (2560x1664) IPS, Led Backlit, True Tone Touch ID ',
            imageUrl:
                'https://product.hstatic.net/1000026716/product/acbook_air_m2_2022_starlight_0_8235e59985a24fe2bed24cb1bc82877e_master_941e3b9a14db4b3080ab63add42ff807.png',
        },
        {
            id: 4,
            name: 'Macbook Air M2 16GB',
            breed: 'Macbook Air M2 16GB',
            price: '2000',
            description: 'M2 8CPU 10GPU 16GB 256GB 13.6 inch (2560x1664) IPS, Led Backlit, True Tone Touch ID ',
            imageUrl:
                'https://product.hstatic.net/1000026716/product/r_m2_13_6_inch_2022_midnight_0_98db5d74968b46a89ef9094eccaec48e_master_b58ca6a737da4d36b34176e74d46280f.png',
        },
        {
            id: 5,
            name: 'MSI Katana GF66',
            breed: 'MSI Katana GF66',
            price: '1000',
            description: 'M2 8CPU 10GPU 16GB 256GB 13.6 inch (2560x1664) IPS, Led Backlit, True Tone Touch ID ',
            imageUrl: 'https://product.hstatic.net/1000026716/product/676vn--w10_0f88dc9216454c2a914c2c9b0438097e.png',
        },
        {
            id: 6,
            name: 'ASUS TUF Gaming',
            breed: 'ASUS TUF Gaming',
            price: '800',
            description: 'M2 8CPU 10GPU 16GB 256GB 13.6 inch (2560x1664) IPS, Led Backlit, True Tone Touch ID ',
            imageUrl:
                'https://product.hstatic.net/1000026716/product/fx506lh-hn188w_cd7936a34e974a3ba9e07503e4fcda53.jpg',
        },
        {
            id: 7,
            name: 'Nitro 5 Eagle',
            breed: 'Nitro 5 Eagle',
            price: '1000',
            description: 'M2 8CPU 10GPU 16GB 256GB 13.6 inch (2560x1664) IPS, Led Backlit, True Tone Touch ID ',
            imageUrl:
                'https://product.hstatic.net/1000026716/product/laptop_gaming_acer_nitro_5_eagle_an515_57_5669_a1581d79b72e45239cf8ffaad2c866f4.jpg',
        },
        {
            id: 8,
            name: 'Acer Nitro 5 Eagle',
            breed: 'Acer Nitro 5 Eagle',
            price: '1000',
            description: 'M2 8CPU 10GPU 16GB 256GB 13.6 inch (2560x1664) IPS, Led Backlit, True Tone Touch ID ',
            imageUrl:
                'https://product.hstatic.net/1000026716/product/laptop_gaming_acer_nitro_5_eagle_an515_57_54mv_3e5cc4ba80be4c8595540963d469ccc3.jpg',
        },
        {
            id: 9,
            name: 'GVN PHANTOM i3060',
            breed: 'GVN PHANTOM i3060',
            price: '4000',
            description: 'M2 8CPU 10GPU 16GB 256GB 13.6 inch (2560x1664) IPS, Led Backlit, True Tone Touch ID ',
            imageUrl: 'https://product.hstatic.net/1000026716/product/1_59b0109a9a474d1ea14c2895bcd4f39a.jpg',
        },
        {
            id: 10,
            name: 'GVN VIPER Plus i3060',
            breed: 'GVN VIPER Plus i3060',
            price: '2500',
            description: 'M2 8CPU 10GPU 16GB 256GB 13.6 inch (2560x1664) IPS, Led Backlit, True Tone Touch ID ',
            imageUrl: 'https://product.hstatic.net/1000026716/product/post-04_3016b31d5504452695b6640e7196a3ab.jpg',
        },
        {
            id: 11,
            name: 'GVN VIPER i3050',
            breed: 'GVN VIPER i3050',
            price: '1100',
            description: 'M2 8CPU 10GPU 16GB 256GB 13.6 inch (2560x1664) IPS, Led Backlit, True Tone Touch ID ',
            imageUrl: 'https://product.hstatic.net/1000026716/product/post-13_0a3a4e9a6be242b4a1946242f42e05ad.jpg',
        },
        {
            id: 12,
            name: 'GVN VIPER i1660S',
            breed: 'GVN VIPER i1660S',
            price: '1000',
            description: 'M2 8CPU 10GPU 16GB 256GB 13.6 inch (2560x1664) IPS, Led Backlit, True Tone Touch ID ',
            imageUrl: 'https://product.hstatic.net/1000026716/product/post-13_6eeeed955a5a497f922ac1719c1822f5.jpg',
        },
    ],
    reducers: {},
});

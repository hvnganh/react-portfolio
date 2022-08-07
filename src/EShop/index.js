import classNames from 'classnames/bind';
import styles from './EShop.module.scss';
import Checkout from './ShopComponents/Checkout';
import ShopTitle from './ShopComponents/ShopTitle';
import ShopItems from './ShopComponents/ShopItems';
import { context } from './ShopComponents/Context';
import { useState } from 'react';

const cx = classNames.bind(styles);

const dogs = [
    {
        id: 1,
        name: 'Macbook Air M2',
        breed: 'Macbook Air M2',
        price: '2000',
        description: 'This is a crazy tiny dog with big alien eyes',
        imageUrl:
            'https://product.hstatic.net/1000026716/product/r_m2_13_6_inch_2022_midnight_0_98db5d74968b46a89ef9094eccaec48e_master_b58ca6a737da4d36b34176e74d46280f.png',
    },
    {
        id: 2,
        name: 'MacBook Pro 13 M2',
        breed: 'MacBook Pro 13 M2',
        price: '2500',
        description: 'This is a cute dog with a heart-shaped butt',
        imageUrl:
            'https://product.hstatic.net/1000026716/product/gearvn-macbook-pro-13-m2-10gpu-16gb-256gb-space-gray-2_bfbb7d6c7bd8475ab2af5ffd09579dc4.png',
    },
    {
        id: 3,
        name: 'Macbook Air M2',
        breed: 'Macbook Air M2',
        price: '2000',
        description: 'A dangerous breed but everyone loves to have one of them cause they look cool',
        imageUrl:
            'https://product.hstatic.net/1000026716/product/acbook_air_m2_2022_starlight_0_8235e59985a24fe2bed24cb1bc82877e_master_941e3b9a14db4b3080ab63add42ff807.png',
    },
    {
        id: 4,
        name: 'Macbook Air M2 16GB',
        breed: 'Macbook Air M2 16GB',
        price: '2000',
        description: 'A sad looking dog that actually very energetic and love being cuddled',
        imageUrl:
            'https://product.hstatic.net/1000026716/product/r_m2_13_6_inch_2022_midnight_0_98db5d74968b46a89ef9094eccaec48e_master_b58ca6a737da4d36b34176e74d46280f.png',
    },
    {
        id: 5,
        name: 'MSI Katana GF66',
        breed: 'MSI Katana GF66',
        price: '1000',
        description: 'A maltese dog',
        imageUrl: 'https://product.hstatic.net/1000026716/product/676vn--w10_0f88dc9216454c2a914c2c9b0438097e.png',
    },
    {
        id: 6,
        name: 'ASUS TUF Gaming',
        breed: 'ASUS TUF Gaming',
        price: '800',
        description: 'A dog looks like a sausage',
        imageUrl: 'https://product.hstatic.net/1000026716/product/fx506lh-hn188w_cd7936a34e974a3ba9e07503e4fcda53.jpg',
    },
    {
        id: 7,
        name: 'Nitro 5 Eagle',
        breed: 'Nitro 5 Eagle',
        price: '1000',
        description: 'A dog looks like a wolf',
        imageUrl:
            'https://product.hstatic.net/1000026716/product/laptop_gaming_acer_nitro_5_eagle_an515_57_5669_a1581d79b72e45239cf8ffaad2c866f4.jpg',
    },
    {
        id: 8,
        name: 'Acer Nitro 5 Eagle',
        breed: 'Acer Nitro 5 Eagle',
        price: '1000',
        description: 'A dog knows how to fight',
        imageUrl:
            'https://product.hstatic.net/1000026716/product/laptop_gaming_acer_nitro_5_eagle_an515_57_54mv_3e5cc4ba80be4c8595540963d469ccc3.jpg',
    },
    {
        id: 9,
        name: 'GVN PHANTOM i3060',
        breed: 'GVN PHANTOM i3060',
        price: '4000',
        description: 'A maltese dog',
        imageUrl: 'https://product.hstatic.net/1000026716/product/1_59b0109a9a474d1ea14c2895bcd4f39a.jpg',
    },
    {
        id: 10,
        name: 'GVN VIPER Plus i3060',
        breed: 'GVN VIPER Plus i3060',
        price: '2500',
        description: 'A dog looks like a sausage',
        imageUrl: 'https://product.hstatic.net/1000026716/product/post-04_3016b31d5504452695b6640e7196a3ab.jpg',
    },
    {
        id: 11,
        name: 'GVN VIPER i3050',
        breed: 'GVN VIPER i3050',
        price: '1100',
        description: 'A dog looks like a wolf',
        imageUrl: 'https://product.hstatic.net/1000026716/product/post-13_0a3a4e9a6be242b4a1946242f42e05ad.jpg',
    },
    {
        id: 12,
        name: 'GVN VIPER i1660S',
        breed: 'GVN VIPER i1660S',
        price: '1000',
        description: 'A dog knows how to fight',
        imageUrl: 'https://product.hstatic.net/1000026716/product/post-13_6eeeed955a5a497f922ac1719c1822f5.jpg',
    },
];

function EShop() {
    const [total, setTotal] = useState(0);
    const [numberItems, setNumberItems] = useState([]);
    const [addToCart, setAddToCart] = useState([{}]);

    return (
        <context.Provider value={{ total, setTotal, numberItems, setNumberItems, addToCart, setAddToCart }}>
            <div className={cx('wrapper')}>
                <div className={cx('components')}>
                    <ShopTitle />
                </div>
                <div className={cx('components')}>
                    <ShopItems data={dogs} />
                </div>
                <div className={cx('components')}>
                    <Checkout />
                </div>
            </div>
        </context.Provider>
    );
}

export default EShop;

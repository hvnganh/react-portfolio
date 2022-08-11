import classNames from 'classnames/bind';
import styles from './EShop.module.scss';
import Checkout from './ShopComponents/Checkout';
import ShopTitle from './ShopComponents/ShopTitle';
import ShopItems from './ShopComponents/ShopItems';
import { context } from './ShopComponents/Context';
import { useState, memo } from 'react';

const cx = classNames.bind(styles);

function EShop() {
    const [total, setTotal] = useState(0);
    const [numberItems, setNumberItems] = useState([]);
    const [addToCart, setAddToCart] = useState([{}]);

    console.log('re render ESHOP');

    return (
        <context.Provider value={{ total, setTotal, numberItems, setNumberItems, addToCart, setAddToCart }}>
            <div className={cx('wrapper')}>
                <div className={cx('components')}>
                    <ShopTitle />
                </div>
                <div className={cx('components')}>
                    <ShopItems />
                </div>
                <div className={cx('components')}>
                    <Checkout />
                </div>
            </div>
        </context.Provider>
    );
}

export default memo(EShop);

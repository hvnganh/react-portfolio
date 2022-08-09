import classNames from 'classnames/bind';
import styles from './ShopItems.module.scss';
import ProductCart from './ProductCart';
import { useSelector } from 'react-redux';
import { productListSelector } from '~/store/selector';

const cx = classNames.bind(styles);

function ShopItems() {
    const productList = useSelector(productListSelector);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                {productList.map((item) => (
                    <div key={item.id} className={cx('col')}>
                        <ProductCart id={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopItems;

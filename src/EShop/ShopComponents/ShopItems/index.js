import classNames from 'classnames/bind';
import styles from './ShopItems.module.scss';
import ProductCart from './ProductCart';

const cx = classNames.bind(styles);

function ShopItems(props) {
    const { data } = props;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                {data.map((item) => (
                    <div key={item.id} className={cx('col')}>
                        <ProductCart id={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopItems;

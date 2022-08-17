import classNames from 'classnames/bind';
import styles from './ShopItems.module.scss';
import { useCallback, useState } from 'react';
import { useContext, memo } from 'react';
import { context } from '../Context';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductCart(props) {
    const { name, price, imageUrl, id } = props;
    const { setTotal, setNumberItems, setAddToCart, addToCart } = useContext(context);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddItem = useCallback(() => {
        setIsAdded(true);
        const newItems = {
            id: id,
            name: name,
            price: price,
            imageURL: imageUrl,
        };
        setAddToCart((item) => [...item, newItems]);
        setTotal((total) => (total += Number(price)));
        setNumberItems(addToCart);
    }, [id, name, price, imageUrl, setAddToCart, setTotal, setNumberItems, addToCart]);

    return (
        <div className={cx('wrapper-dog')}>
            <div className={cx('item')}>
                <Link to={`/eshop/cart/${id}`}>
                    <img className={cx('img')} src={imageUrl} alt="Dog" />
                    <div className={cx('infor')}>
                        <h3 className={cx('name')}>{name}</h3>
                        <h4 className={cx('price')}>{price} $</h4>
                    </div>
                </Link>
                {isAdded ? (
                    <button disabled className={cx('button', 'button-disabled')}>
                        Added
                    </button>
                ) : (
                    <button onClick={handleAddItem} className={cx('button')}>
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
}

export default memo(ProductCart);

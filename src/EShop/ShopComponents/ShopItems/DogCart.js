import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './ShopItems.module.scss';
import { useContext } from 'react';
import { context } from '../Context';

const cx = classNames.bind(styles);

function DogCard(props) {
    const { name, price, imageUrl } = props;
    const { setTotal, setNumberItems, setAddToCart, addToCart } = useContext(context);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddItem = () => {
        setIsAdded(true);
        const newItems = {
            name: name,
            price: price,
            imageURL: imageUrl,
        };
        setAddToCart((item) => [...item, newItems]);
        setTotal((total) => (total += Number(price)));
        setNumberItems(addToCart);
    };

    return (
        <div className={cx('wrapper-dog')}>
            <div className={cx('item')}>
                <img className={cx('img')} src={imageUrl} alt="Dog" />
                <div className={cx('infor')}>
                    <h3 className={cx('name')}>{name}</h3>
                    <h4 className={cx('price')}>{price} $</h4>
                </div>
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

export default DogCard;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { context } from '../Context';

const cx = classNames.bind(styles);

function Checkout() {
    const { numberItems, addToCart, total, setAddToCart, setTotal, setNumberItems } = useContext(context);
    const handleSubmit = () => {
        setAddToCart([{}]);
        setTotal(0);
        setNumberItems([]);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('checkout-wrapper')}>
                    <h1 className={cx('checkout-text')}>CHECKOUT</h1>
                </div>
            </div>
            <div className={cx('row')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} />
                <h1 className={cx('products')}>{numberItems.length}</h1>
            </div>
            <div className={cx('row')}>
                <div className={cx('col')}>
                    <h1 className={cx('product')}>Product</h1>
                </div>
                <div className={cx('col')}>
                    <h1 className={cx('price')}>Price</h1>
                </div>
            </div>
            <div className={cx('row', 'cart-items')}>
                {addToCart.slice(1).map((item) => {
                    return (
                        <div className={cx('cart')} key={item.name}>
                            <div className={cx('col')}>
                                <h1 className={cx('product')}>
                                    <img className={cx('img')} alt="Dog" src={item.imageURL} />
                                    <span className={cx('name')}>{item.name}</span>
                                </h1>
                            </div>
                            <div className={cx('col')}>
                                <h1 className={cx('price')}>{item.price}$</h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cx('row')}>
                <div className={cx('total-wrapper')}>
                    <h1 className={cx('total')}>
                        Total: <span className={cx('total-money')}>{total}$</span>
                    </h1>
                    <button onClick={handleSubmit} className={cx('button')}>
                        ORDER
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;

import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState, useCallback, memo } from 'react';
import { context } from '../Context';

const cx = classNames.bind(styles);

function Checkout() {
    const { numberItems, addToCart, total, setAddToCart, setTotal, setNumberItems } = useContext(context);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = useCallback(() => {
        setAddToCart([{}]);
        setTotal(0);
        setNumberItems([]);
        setIsModalOpen(true);
    }, [setAddToCart, setNumberItems, setTotal]);

    const handleClose = () => {
        setIsModalOpen(false);
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
                {addToCart.length > 1 ? (
                    addToCart.slice(1).map((item) => {
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
                    })
                ) : (
                    <div className={cx('cart')}>
                        <div className={cx('cart-empty-wrapper')}>
                            <img
                                className={cx('img-bag')}
                                src={
                                    'https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs='
                                }
                                alt="Buy"
                            />
                        </div>
                    </div>
                )}
            </div>
            <div className={cx('row')}>
                <div className={cx('total-wrapper')}>
                    <h1 className={cx('total')}>
                        Total: <span className={cx('total-money')}>{total}$</span>
                    </h1>
                    {numberItems.length >= 1 ? (
                        <button onClick={handleSubmit} className={cx('button')}>
                            ORDER
                        </button>
                    ) : (
                        <button disabled onClick={handleSubmit} className={cx('button', 'button-disabled')}>
                            ORDER
                        </button>
                    )}
                </div>
            </div>
            {isModalOpen && (
                <div className={cx('modal-wrapper')}>
                    <div className={cx('container')}>
                        <div className={cx('modal-text-wrapper')}>
                            <h1 className={cx('modal-text')}>Order Succesful</h1>
                        </div>
                        <div>
                            <img
                                className={cx('img-modal')}
                                src={
                                    'https://media.istockphoto.com/vectors/order-success-icon-vector-id930371388?k=20&m=930371388&s=170667a&w=0&h=YwRESJwiGU-iDMO4qho6BDKvB1xAo-uhe8DVMsrvkbI='
                                }
                                alt="bought"
                            />
                        </div>
                        <div className={cx('btn-close-wrapper')}>
                            <button onClick={handleClose} className={cx('close')}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default memo(Checkout);

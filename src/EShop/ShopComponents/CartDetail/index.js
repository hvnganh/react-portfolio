import classNames from 'classnames/bind';
import styles from './CartDetail.module.scss';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { productListSelector } from '~/store/selector';

const cx = classNames.bind(styles);

function CartDetail() {
    const data = useParams();

    const productList = useSelector(productListSelector);

    const navigate = useNavigate();

    const handleBackEShop = () => {
        navigate('/eshop');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <div className={cx('text-wrapper')}>
                    <h1 className={cx('text')}>Item Detail</h1>
                </div>
                {productList
                    .filter((product) => product.id === Number(data.id))
                    .map((item) => (
                        <div key={item.id} className={cx('detail-wrapper')}>
                            <div key={item.id} className={cx('image-wrapper')}>
                                <img className={cx('image')} src={item.imageUrl} alt="Item" />
                            </div>
                            <div className={cx('info')}>
                                <h1 className={cx('name')}>Name: {item.name}</h1>
                                <p className={cx('desc')}>Description: {item.description}</p>
                                <div className={cx('btn-wrapper')}>
                                    <button onClick={handleBackEShop} className={cx('btn')}>
                                        Go back to order
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default CartDetail;

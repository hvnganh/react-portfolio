import classNames from 'classnames/bind';
import styles from './ShopTitle.module.scss';
import { faShop, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function ShopTitle() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('icon', 'house')} icon={faShop} />
            <h1 className={cx('title')}>Welcome to my E-Shop</h1>
            <FontAwesomeIcon className={cx('icon', 'heart')} icon={faHeart} />
        </div>
    );
}

export default ShopTitle;

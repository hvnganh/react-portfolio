import classNames from 'classnames/bind';
import styles from './ShopItems.module.scss';
import DogCard from './DogCart';

const cx = classNames.bind(styles);

function ShopItems(props) {
    const { data } = props;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                {data.map((item) => (
                    <div key={item.id} className={cx('col')}>
                        <DogCard name={item.name} price={item.price} imageUrl={item.imageUrl} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopItems;

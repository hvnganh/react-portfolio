/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import logoReact from '../../assets/images/React.svg.png';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('text')}>Welcome to my Website</h1>
            <img className={cx('icon')} src={logoReact} />
        </div>
    );
}

export default Home;

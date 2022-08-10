import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';
import avt from '../../assets/images/avt.jpg';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '~/layouts/components/Header/ThemeContext/ThemeContext';

const cx = classNames.bind(styles);

function Introduce() {
    const { theme } = useContext(ThemeContext);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
        const handleScroll = () => {
            if (window.scrollY <= 400) {
                setAnimation(true);
            } else {
                setAnimation(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx(animation ? 'container' : 'hide')}>
            <div className={cx('avatar')}>
                <img className={cx('img')} src={avt} alt="Hùng Anh" />{' '}
            </div>
            <div className={cx('information')}>
                <p className={cx('name', theme)}>Nguyen Hung Anh</p>
                <p className={cx('title', theme)}>Web Developer</p>
                <p className={cx('desc')}>
                    Detail-oriented, organized and meticulous employee. Works at fast pace to meet tight deadlines.
                    Enthusiastic team player ready to contribute to company success.
                </p>
                <p className={cx('desc')}>
                    Driven Web Developer skilled in team collaboration to formulate and conceptualize corporate web
                    presence. Embraces challenging projects requiring detailed coding changes, search engine-related
                    considerations and security.
                </p>

                <p className={cx('desc')}>
                    Integrates knowledge of visual arts to develop functional, appealing, custom-made web products and
                    services.
                </p>
            </div>
        </div>
    );
}

export default Introduce;

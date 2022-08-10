import classNames from 'classnames/bind';
import styles from './Experience.module.scss';
import bodybyjovie from '../../assets/images/bodybyjovie.jpg';
import trans from '../../assets/images/trans.jpg';
import newyork from '../../assets/images/newyork.jpg';
import { useContext } from 'react';
import { ThemeContext } from '~/layouts/components/Header/ThemeContext/ThemeContext';

const cx = classNames.bind(styles);

function Experience() {
    const value = useContext(ThemeContext);

    console.log(window.scrollY);

    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('exp')}>
                    <div className={cx('img-wrapper')}>
                        <img className={cx('img')} src={trans} alt="HA" />
                    </div>
                    <div className={cx('infor')}>
                        <p className={cx('name', value.theme)}>Freelance Transcriptionist</p>
                        <p className={cx('title', value.theme)}>09/2021 - 05/2022</p>
                        <p className={cx('desc')}>
                            Undertake other duties, of a similar professional nature and commensurate with the role, at
                            the request of the Fitness Centre Manager. Attentive to details and well organized. Good at
                            planning and organizing
                        </p>
                    </div>
                </div>

                <div className={cx('exp', 'mobile-body')}>
                    <div className={cx('infor')}>
                        <p className={cx('name', value.theme)}>Front-desk Receptionist</p>
                        <p className={cx('title', value.theme)}>02/2020 - 03/2021</p>
                        <p className={cx('desc')}>
                            Provide customer service experience to all members, non-members and users of the facility.
                            Greeting members and users of the gym as they come through reception. department
                        </p>
                        <p className={cx('desc')}>
                            Welcoming members and visitors to the gym and providing accurate information concerning
                            programmes and activities. Recording and keeping clear and accurate records of all queries,
                            complaints, lost property and repairs and ensuring the information is delegated to, and
                            resolved by, the relevant
                        </p>
                    </div>

                    <div className={cx('img-wrapper')}>
                        <img className={cx('img')} src={bodybyjovie} alt="HA" />
                    </div>
                </div>

                <div className={cx('exp', 'pc-body')}>
                    <div className={cx('img-wrapper')}>
                        <img className={cx('img')} src={bodybyjovie} alt="HA" />
                    </div>
                    <div className={cx('infor')}>
                        <p className={cx('name', value.theme)}>Front-desk Receptionist</p>
                        <p className={cx('title', value.theme)}>02/2020 - 03/2021</p>
                        <p className={cx('desc')}>
                            Provide customer service experience to all members, non-members and users of the facility.
                            Greeting members and users of the gym as they come through reception. department
                        </p>
                        <p className={cx('desc')}>
                            Welcoming members and visitors to the gym and providing accurate information concerning
                            programmes and activities. Recording and keeping clear and accurate records of all queries,
                            complaints, lost property and repairs and ensuring the information is delegated to, and
                            resolved by, the relevant
                        </p>
                    </div>
                </div>

                <div className={cx('exp')}>
                    <div className={cx('img-wrapper')}>
                        <img className={cx('img')} src={newyork} alt="HA" />
                    </div>
                    <div className={cx('infor')}>
                        <p className={cx('name', value.theme)}>Teaching Assistant Intern</p>
                        <p className={cx('title', value.theme)}>09/2019 - 12/2019</p>
                        <p className={cx('desc')}>
                            Comfortable working independently and collaboratively with other team members. Able to meet
                            aggressive deadlines. Communication and collaboration. Convey knowledge to learners
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;

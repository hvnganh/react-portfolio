import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './UseState.module.scss';

const cx = classNames.bind(styles);

function UseState() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount((prev) => prev + 1);
    };
    // =============================================================
    const [countInfinity, setCountInfinity] = useState(0);
    const handleCountInfinity = () => {
        setInterval(() => {
            setCountInfinity((prev) => prev + 1);
        }, 1000);
    };
    // =============================================================

    const [gift, setGift] = useState('');
    const gifts = ['Iphone 13', 'Iphone 12', 'Iphone 11'];
    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);

        setGift(gifts[index]);
    };
    // =============================================================

    const [name, setName] = useState('');
    const handleSubmit = () => {
        console.log({ name });
    };
    // =============================================================

    const courses = [
        {
            id: 1,
            name: 'JS',
        },
        {
            id: 2,
            name: 'HTML',
        },
        {
            id: 3,
            name: 'CSS',
        },
    ];
    const [checkedRadio, setCheckedRadio] = useState();
    const [checkedBox, setCheckedBox] = useState([]);

    const handleCheckRadio = () => {
        console.log({ checkedRadio });
    };

    const handleCheckBoxSubmit = () => {
        console.log({ checkedBox });
    };

    const handleCheckBox = (id) => {
        setCheckedBox((prev) => {
            const isChecked = checkedBox.includes(id);
            if (isChecked) {
                return checkedBox.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };
    // =============================================================

    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'));
        return storageJobs ?? [];
    });

    const handleSubmitJobs = () => {
        setJobs((prev) => {
            const newJobs = [...prev, job];

            // Save to local Storage
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem('jobs', jsonJobs);

            return newJobs;
        });
        setJob('');
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('practice')}>
                <div className={cx('example')}>
                    <h1>Increase when clicked</h1>
                    <h2 className={cx('count')}>{count}</h2>
                    <button className={cx('button')} onClick={handleCount}>
                        + 1
                    </button>
                </div>
                {/* ======================================================================== */}
                <div className={cx('example')}>
                    <h1>Increase Infinity</h1>
                    <h2 className={cx('countinfinity')}>{countInfinity}</h2>
                    <button className={cx('button')} onClick={handleCountInfinity}>
                        1++
                    </button>
                </div>
                {/* ======================================================================== */}
                <div className={cx('example')}>
                    <h1>{gift || 'None'}</h1>
                    <button className={cx('button')} onClick={randomGift}>
                        Receive
                    </button>
                </div>
                {/* ======================================================================== */}
                <div className={cx('example')}>
                    <input
                        className={cx('input-text')}
                        type={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <button className={cx('button')} onClick={handleSubmit}>
                        Register
                    </button>
                </div>
                {/* ======================================================================== */}
                <div className={cx('example')}>
                    {courses.map((course) => (
                        <div key={course.id}>
                            <input
                                className={cx('input')}
                                type="radio"
                                checked={checkedRadio === course.id}
                                onChange={() => {
                                    setCheckedRadio(course.id);
                                }}
                            />
                            {course.name}
                        </div>
                    ))}
                    <button className={cx('button')} onClick={handleCheckRadio}>
                        Check Course
                    </button>
                </div>
                {/* ======================================================================== */}
                <div className={cx('example')}>
                    {courses.map((course) => (
                        <div key={course.id}>
                            <input
                                className={cx('input')}
                                type="checkbox"
                                checked={checkedBox.includes(course.id)}
                                onChange={() => {
                                    handleCheckBox(course.id);
                                }}
                            />
                            {course.name}
                        </div>
                    ))}
                    <button className={cx('button')} onClick={handleCheckBoxSubmit}>
                        Check Course
                    </button>
                </div>
                {/* ======================================================================== */}
                <div className={cx('example')}>
                    <input className={cx('input-text')} value={job} onChange={(e) => setJob(e.target.value)} />
                    <button onClick={handleSubmitJobs} className={cx('button')}>
                        Add
                    </button>

                    <ul>
                        {jobs.map((job, index) => (
                            <li key={index}>{job}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UseState;

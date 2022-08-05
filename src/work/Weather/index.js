import classNames from 'classnames/bind';
import styles from './Weather.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
import moment from 'moment';
import axios from 'axios';

const cx = classNames.bind(styles);

function Weather() {
    const [searchInput, setSearchInput] = useState('');
    const [cityName, setCityName] = useState('');
    const [weatherState, setWeatherState] = useState('');
    const [weatherIcon, setWeatherIcon] = useState();
    const [temperature, setTemperature] = useState();
    const [sunrise, setSunrise] = useState();
    const [sunset, setSunset] = useState();
    const [humidity, setHumidity] = useState();
    const [windSpeed, setWindSpeed] = useState();

    const APP_ID = '2150fef1a2ffa78510fb14bfacad060f';
    const DEFAULT_VALUE = '--';

    const debouncedValue = useDebounce(searchInput, 1000);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${
                    debouncedValue ? debouncedValue : 'ho chi minh'
                }&appid=${APP_ID}&units=metric&lang=vi` ?? {},
            );
            setCityName(response.data.name);
            setWeatherState(response.data.weather[0].description);
            setWeatherIcon(response.data.weather[0].icon);
            setTemperature(response.data.main.temp);
            setSunrise(response.data.sys.sunrise);
            setSunset(response.data.sys.sunset);
            setHumidity(response.data.main.humidity);
            setWindSpeed(response.data.wind.speed);
        };
        fetchApi();

        return () => {};
    }, [debouncedValue]);

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('main-section')}>
                <div className={cx('search-bar')}>
                    <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                    <input
                        className={cx('search-input')}
                        type="text"
                        value={searchInput}
                        onChange={handleSearchInput}
                        name="search-city"
                        placeholder="Tìm kiếm thành phố...."
                    />
                </div>
                <div className={cx('info-wrapper')}>
                    <p className={cx('city-name')}>{cityName ? cityName : DEFAULT_VALUE}</p>
                    <p className={cx('weather-state')}>{weatherState ? weatherState : DEFAULT_VALUE}</p>
                    <img
                        src={`http://openweathermap.org/img/wn/${weatherIcon ? weatherIcon : '10d@2x'}.png`}
                        className={cx('weather-icon')}
                        alt="--"
                    />
                    <p className={cx('temperature')}>{temperature ? Math.round(temperature) : DEFAULT_VALUE}</p>
                </div>
            </div>
            <div className={cx('additional-section')}>
                <div className={cx('row')}>
                    <div className={cx('item')}>
                        <div className={cx('label')}>MT Mộc</div>
                        <div className={cx('value sunrise')}>
                            {sunrise ? moment.unix(sunrise).format('H:mm') : DEFAULT_VALUE}
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('label')}>MT Lặn</div>
                        <div className={cx('value sunset')}>
                            {sunset ? moment.unix(sunset).format('H:mm') : DEFAULT_VALUE}
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('item')}>
                        <div className={cx('label')}>Độ Ẩm</div>
                        <div className={cx('value')}>
                            <span className={cx('humidity')}>{humidity ? humidity : DEFAULT_VALUE}</span>%
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('label')}>Gió</div>
                        <div className={cx('value')}>
                            <span className={cx('wind-speed')}>
                                {windSpeed ? Number(windSpeed * 3.6).toFixed(2) : DEFAULT_VALUE}
                            </span>
                            km/h
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;

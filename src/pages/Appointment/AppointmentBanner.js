
import chair from '../../assets/images/chair.png'
import background from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
            }}
            className="hero min-h-screen ">
            <div className="hero-content flex-col lg:gap-40 lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
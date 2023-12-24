import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AnnouceCard = () => {
  const [targetDate] = useState(new Date("2023-09-30T23:59:59"));
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      const newDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const newHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const newMinutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const newSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  return (
    <div className="bg-neutral text-center py-20  text-neutral-content">
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">
          Annoucement
        </span>
        <div className="card p-5 w-full bg-neutral text-neutral-content shadow-2xl">
          <div className="card-body">
            <h2 className="card-title text-4xl">Registration Deadline</h2>
            <h6 className="text-2xl">25 Sep 2023</h6>
            <div>
              <div className="countdown-timer">
                <div className="timer-box">
                  <div className="timer">
                    <span>{days}</span>
                    <p>Days</p>
                  </div>
                  <div className="timer">
                    <span>{hours}</span>
                    <p>Hours</p>
                  </div>
                  <div className="timer">
                    <span>{minutes}</span>
                    <p>Minutes</p>
                  </div>
                  <div className="timer">
                    <span>{seconds}</span>
                    <p>Seconds</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <Link to="/all/course" className="btn btn-primary">
                Take Seat<i className="fas mx-1 fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouceCard;

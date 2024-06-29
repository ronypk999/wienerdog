import { useTimer } from "react-timer-hook";
import { useInfoContext } from "../hook/ContextHook";

export default function Timer() {
  const { presaleEndTime } = useInfoContext();
  let expiryTimestamp;

  if (presaleEndTime) {
    expiryTimestamp = new Date(presaleEndTime);
  } else {
    expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 100000);
  }

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("Presale time is finished"),
  });

  return (
    <div className="flex justify-around bg-[#966CF2] p-3 rounded-box">
      <div className="flex flex-col">
        <span>Days</span>
        <span className="text-3xl">{days}</span>
      </div>
      <div className="flex flex-col">
        <span>Hours</span>
        <span className="text-3xl">{hours}</span>
      </div>
      <div className="flex flex-col">
        <span>Minutes</span>
        <span className="text-3xl">{minutes}</span>
      </div>
      <div className="flex flex-col">
        <span>Seconds</span>
        <span className="text-3xl">{seconds}</span>
      </div>
    </div>
  );
}

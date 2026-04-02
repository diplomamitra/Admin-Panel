import Statecardui from "./Statecardui";
import DashboardCard from "./Statecardui";

export default function Statecardmac({StateValues}) {
 

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
      {StateValues.map((stat, index) => (
        <Statecardui key={index} {...stat} />
      ))}
    </div>
  );
}
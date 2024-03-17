import { subtractThreeHours } from "./subtractThreeHours";

export function dateTimeSplit(dateTime) {
    let dateTimeParts = dateTime.split('T');
    let date = dateTimeParts[0];
    let time = dateTimeParts[1]?.slice(0, 5);
    return (`D${date} H${subtractThreeHours(time)}`);
}
  
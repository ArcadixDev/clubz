export const fun = (value: {
  day: string;
  openingHours: string;
  closingHours: string;
}) => {
  const days = ["monday", "tuesday"];

  const { day, openingHours, closingHours } = value;

  switch (key) {
    case "everday":
      let res = {};
      for (let day of days) {
        res[day] = { openingHours, closingHours };
      }
      break;

    default:
      break;
  }
};

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

const getDayMonthYear = (dateString) => {
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: months[date.getMonth()],
    yearDay: `${days[date.getDay()]}, ${date.getDate()}`,
  };
};

export default getDayMonthYear;

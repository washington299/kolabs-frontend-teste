export const parseDate = (date: string | undefined) => {
	if (!date) return "";

	const year = new Date(date).getFullYear();
	const month = new Date(date).getMonth() + 1;
	const day = new Date(date).getDate() + 1;

	const event = new Date(Date.UTC(year, month, day));

	const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };

	return event.toLocaleDateString("pt-BR", options);
};

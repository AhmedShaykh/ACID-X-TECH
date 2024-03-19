export function formatDate(dateString: string | number | Date) {

    const { format } = new Intl.DateTimeFormat("en-US");

    return format(new Date(dateString));

};
const getTimestamp = (date) =>{
    const timezoneOffset = new Date().getTimezoneOffset()
    const  oneDay = 60 * 60 * 24 * 1000;
    return date - (date % oneDay) + (timezoneOffset * 1000 * 60);
}
export default getTimestamp;

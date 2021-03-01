const getNumberOfDays = (year, month) => {
    return 40 - new Date(year, month, 40).getDate();
}
export default getNumberOfDays;

const timestampToDate = timestamp => {
    let dateObject = new Date(timestamp);
    let year = dateObject.getFullYear();
    let month = dateObject.getMonth() + 1;
    let date = dateObject.getDate();
    return `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
}
export default timestampToDate;

const isUniqRange = (multiRange, newRange) => {
    return !multiRange.some(range => range.startDate === newRange.startDate && range.endDate === newRange.endDate)
}
export default isUniqRange

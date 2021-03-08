const changeMonth = (month, year, offset) => {
    const newMonth = month + offset;

    switch (newMonth) {
        case -1:
            return {year: year - 1, month: 11}

        case 12:
            return {year: year + 1, month: 0}

        default:
            return {year: year, month: newMonth}
    }
}

export default changeMonth
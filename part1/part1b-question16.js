for (const field in statistics) {
    if (field[0] == 'r' || statistics[field] % 2 == 1) {
        console.log(statistics[field]);
    }
}

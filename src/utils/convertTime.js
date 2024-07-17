const convertTime = time => {
    const timeParts = time.split(':');
    let hrs = timeParts[0];
    let min = timeParts[1];

    let meridian = 'am';
    if (hrs >= 12) {
        meridian = 'pm';
        if (hrs > 12) {
            hrs -= 12;
        }
    }
    return hrs.toString().padStart(2, '0') +':'+ min.toString().padStart(2, '0') + " " + meridian;
}
export default convertTime;
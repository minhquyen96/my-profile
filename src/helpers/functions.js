export function checkScreen(width) {
    if (width) {
        if (width < 768) {
            return 'small';
        }
        else if (width >= 768 &&  width <= 992) {
            return 'medium';
        }
        else if (width > 992 &&  width <= 1200) {
            return 'large';
        }
        else if (width > 1200 &&  width <= 1400) {
            return 'laptop';
        }
        else if (width > 1400 &&  width <= 1600) {
            return 'laptopL';
        }
    }
    return 'huge';
}

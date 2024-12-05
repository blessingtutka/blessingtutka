const truncater = (text: string, maxLength: number = 10): string => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    } else {
        return text;
    }
};

export { truncater };

const isLetter = (str:string) => {
    if (str.length === 0) return true
    return /[A-Za-z0-9]/.test(str)
};

const generateToken = () => {
    return Math.random().toString(36).substring(2) + Math.floor(Date.now() / 1000);
};

export {isLetter,generateToken};
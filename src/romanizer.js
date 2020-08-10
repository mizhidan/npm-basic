export {
    romanizeTranslator
} 
const romanizeTranslator = (num) => {
    var romanize = require('romanize');
    return romanize(num);
}

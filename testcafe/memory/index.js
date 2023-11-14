class Constants {
    wikipediaUrl = 'https://www.wikipedia.org/';
    number = numberLike => parseFloat(numberLike);
    boolean = booleanLike => {
        if (booleanLike === 'true') return true
        if (booleanLike === 'false') return false
        throw Error('Passed value is not boolean-like')
    }
}

module.exports = Constants;

export default class Constants {
    value1 = '42';
    value2 = '42';
    value3 = '12';

    wikipediaUrl = 'https://www.wikipedia.org/';
    number = (numberLike: string): number => parseFloat(numberLike);
    boolean = (booleanLike: string): boolean => {
        if (booleanLike === 'true') return true
        if (booleanLike === 'false') return false
        throw Error('Passed value is not boolean-like')
    }
}

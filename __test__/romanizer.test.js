import {romanizeTranslator} from "../src/romanizer";

describe('translate to romanize', () => {
    it('should return X when input 10', () => {
        const result = romanizeTranslator(10);

        expect(result).toEqual('X');
    });
})
import { assert} from 'chai';
import { f, main } from './index';

describe('로그인', () => {
    
    it('페이지 열기', (done) => {
        main();
        console.log(1)
        assert.isTrue(true);
        done();
    });

    it('2' , (done) => {
        f();
        console.log(2)
        assert.isTrue(true)
        done();
    });
})
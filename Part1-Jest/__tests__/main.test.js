const formatVolumeIconPath = require('../assets/scripts/main');

describe('unit tests for formatVolumeIconPath ', () => {
    test('test slider volume > 66', ()=> {
        expect(formatVolumeIconPath(100)).toContain('3');
    });

    test('test slider volume > 33', ()=> {
        expect(formatVolumeIconPath(50)).toContain('2');
    });

    test('test slider volume > 0', ()=> {
        expect(formatVolumeIconPath(10)).toContain('1');
    });

    test('test slider volume == 0', ()=> {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
});
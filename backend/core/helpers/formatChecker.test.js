const { isLocation } = require('./formatChecker');

describe('[CASE-0] - isLocation ', () => {
    it('should return true', () => {
        // Arrange
        const param = '{97,79}';
        // Act
        const result = isLocation(param);
        // Assert
        expect(result).toBe(true);
    });
});
describe('[CASE-1] - isLocation ', () => {
    it('should return false', () => {
        // Arrange
        const param = '{97,79';
        // Act
        const result = isLocation(param);
        // Assert
        expect(result).toBe(false);
    });
});
describe('[CASE-2] - isLocation ', () => {
    it('should return false', () => {
        // Arrange
        const param = '97,79}';
        // Act
        const result = isLocation(param);
        // Assert
        expect(result).toBe(false);
    });
});
describe('[CASE-3] - isLocation ', () => {
    it('should return false', () => {
        // Arrange
        const param = '{97 79}';
        // Act
        const result = isLocation(param);
        // Assert
        expect(result).toBe(false);
    });
});

const { isLocation, isEmail } = require('./formatChecker');

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

describe('[CASE-4] - isEmail ', () => {
    it('should return true', () => {
        // Arrange
        const param = 'gui@gmail.com';
        // Act
        const result = isEmail(param);
        // Assert
        expect(result).toBe(true);
    });
});

describe('[CASE-5] - isEmail ', () => {
    it('should return true', () => {
        // Arrange
        const param = 'gui@edu.ece.fr';
        // Act
        const result = isEmail(param);
        // Assert
        expect(result).toBe(true);
    });
});

describe('[CASE-6] - isEmail ', () => {
    it('should return false', () => {
        // Arrange
        const param = 'guiedu.fr';
        // Act
        const result = isEmail(param);
        // Assert
        expect(result).toBe(false);
    });
});

describe('[CASE-7] - isEmail ', () => {
    it('should return false', () => {
        // Arrange
        const param = 'gui@edufr';
        // Act
        const result = isEmail(param);
        // Assert
        expect(result).toBe(false);
    });
});

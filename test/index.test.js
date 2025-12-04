const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
  it('should capitalize the first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  it('should handle an empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });

  it('should handle a string with special characters', () => {
    expect(capitalizeWords('hello-world')).toBe('Hello-World');
  });

  it('should handle a string with one word', () => {
    const input = 'hello';
    const expectedOutput = 'Hello';
    const result = capitalizeWords(input);
    expect(result).toBe(expectedOutput);
  });
});

describe('filterActiveUsers', () => {
  it('should filter an array of objects returning only active users', () => {
    const users = [
      { name: 'Alice', isActive: true },
      { name: 'Bob', isActive: false }
    ];
    const expectedOutput = [{ name: 'Alice', isActive: true }];
    const result = filterActiveUsers(users);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle an array with mixed active and inactive users', () => {
    const users = [
      { name: 'Alice', isActive: true },
      { name: 'Bob', isActive: false },
      { name: 'Carol', isActive: true }
    ];
    const expectedOutput = [
      { name: 'Alice', isActive: true },
      { name: 'Carol', isActive: true }
    ];
    const result = filterActiveUsers(users);
    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty array if there are no active users', () => {
    const users = [{ name: 'Bob', isActive: false }];
    const result = filterActiveUsers(users);
    expect(result).toEqual([]);
  });

  it('should handle an empty array', () => {
    const users = [];
    const result = filterActiveUsers(users);
    expect(result).toEqual([]);
  });
});

describe('logAction', () => {
  it('should log an action performed by a user with a timestamp', () => {
    const username = 'melang';
    const action = 'login';
    const timestamp = new Date().toISOString();
    expect(logAction(action, username)).toBe(
      `User ${username} performed ${action} at ${timestamp}`
    );
  });

  it('should return an error message if username or action is empty', () => {
    expect(logAction('', 'login')).toBe('Error: Missing username or action');
    expect(logAction('melang', '')).toBe('Error: Missing username or action');
    expect(logAction('', '')).toBe('Error: Missing username or action');
  });
});

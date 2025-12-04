// 1. Capitalize each word (handles special characters)
function capitalizeWords(str) {
  if (!str) return '';

  return str.replace(/(^|\W)(\w)/g, (match, before, letter) => {
    return before + letter.toUpperCase();
  });
}

// 2. Filter active users
function filterActiveUsers(users) {
  return users.filter(user => user.isActive);
}

// 3. Log action
function logAction(action, username) {
  if (!action || !username) {
    return 'Error: Missing username or action';
  }

  const timestamp = new Date().toISOString();
  return `User ${username} performed ${action} at ${timestamp}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };

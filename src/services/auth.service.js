  exports.login = (username, password) => {
  if (!username || !password) {
    throw new Error('USERNAME_PASSWORD_REQUIRED')
  }

  // simulasi user
  if (username !== 'admin' || password !== '123') {
    throw new Error('INVALID_CREDENTIALS')
  }

  return {
    token: 'fake-jwt-token'
  }
}

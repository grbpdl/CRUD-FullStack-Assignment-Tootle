async function createUser(req, res) {
    try {
      console.log("user created")
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'An internal server error occurred.' });
    }
  }

  module.exports = {
    createUser,
  };
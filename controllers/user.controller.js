import User from "../mongodb/models/user.js";

const getAllUsers = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

const createUser = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) return res.status(200).json(userExist);

    const newUser = await User.create({ email, name, avatar });

    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserInfoByID = async (req, res) => {};

export { getAllUsers, createUser, getUserInfoByID };

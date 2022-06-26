module.exports.createUser = (req, res) => {
    try {
        return res.status(200).json({ message: 'User created successfully ✅' });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error 😭' });
    }
}

module.exports.getUser = (req, res) => {
    try {
        const { _id } = req.params;
        const user = { _id };

        if (!_id) return res.status(400).json({ message: 'Missing required field' });

        return res.status(200).json({ message: 'User found', user: user });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error 😭' });
    }
}

module.exports.updateUser = (req, res) => {
    try {
        const { _id } = req.params;
        const { name, lastname } = req.body;

        if (!_id || !name || !lastname) return res.status(400).json({ message: 'Missing required fields' });

        return res.status(200).json({ message: 'User updated successfully 🔝', user: { _id, name, lastname } });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error 😭' });
    }
}

module.exports.deleteUser = (req, res) => {
    try {
        const { _id } = req.params;

        if (!_id) return res.status(400).json({ message: 'Missing required field' });

        return res.status(200).json({ message: 'User deleted successfully 😟' })
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error 😭' })
    }
}
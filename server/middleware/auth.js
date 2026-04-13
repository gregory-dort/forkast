const verifyAuth = (req, res, next) => {
    /*
        This module verifies the user is authenticated before allowing them to access protected routes. It checks for the presence for an authenticated JWT token, if the token is valid the user is able to use the routes. If the token is invalid / missing an error is returned and the user is not able to access any protected routes.
    */

    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'No token provided' });
        }

        const token = authHeader.split(' ')[1];

        const { data: { user }, error } = supabase.auth.getUser(token);
        if (error || !user) {
            console.error('Authentication error: ', error);
            return res.status(401).json({ error: 'Invalid or expired token' });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error('Auth middleware error: ', error);
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }

};

module.exports = verifyAuth;
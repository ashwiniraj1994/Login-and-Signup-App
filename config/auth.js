module.exports = {

    'facebookAuth' : {
        'clientID'        : '216010562297471',
        'clientSecret'    : 'c00f7c7917755d55d87d4bea2ce4153d',
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'name'] 

    },

    'twitterAuth' : {
        'consumerKey'        : 'u3GkYq7l5IRp3s1zMvEQ6zyPt',
        'consumerSecret'     : 'UeC8g6L1WjoMzaCeWOL0T9rAM2NhGinu8Qyqrk6SHfzKKwsxEe',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '133912861895-vuede6u47lsluklra8765qq5ceqrffgi.apps.googleusercontent.com',
        'clientSecret'     : '8RftQUWY3-R1JKbeWgnOjUCr',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};

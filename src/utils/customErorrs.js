class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.message = message
    }
}

class Forbidden extends Error {
    constructor(message) {
        super(message);
        this.message = message
    }
}

class NotFound extends Error {
    constructor(message) {
        super(message);
        this.message = message
    }
}

class BadToken extends Error {
    constructor(message) {
        super(message);
        this.message = message
    }
}

module.exports = {
    BadRequestError,
    Forbidden,
    NotFound,
    BadToken
}
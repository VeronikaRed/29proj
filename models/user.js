const db_bookshelf = require('../src/utils/db')

const User = db_bookshelf.model('User', {
    tableName: 'users',
    serialize(){
        return {
            id: this.attributes.id,
            is_admin: this.attributes.is_admin,
            nickname: this.attributes.nickname
        }
    }
})

module.exports = User;
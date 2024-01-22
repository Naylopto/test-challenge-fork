// You already have the methods imported
const users = require('../data')
const { default: expect } = require('expect');
const {getUserById} = require('../getUserdata');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation
describe('User functions test', () => {
    it('should get the user by its id', () => {
        const user = getUserById(2);
        expect(user).toEqual({
            id: 2,
            username: "piderman",
            email: "parkerdapete@gmail.com",
            password: "2D$aLzX9(_2"
        })
    })
})


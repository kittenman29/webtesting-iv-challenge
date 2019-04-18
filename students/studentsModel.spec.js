const db = require('../data/dbConfig.js')
const studentsDb = require('./studentsModel.js')

describe('students model', () => {


    describe('insert()', () => {
        afterEach(async () => {
            await db('students').truncate()
        })
    
        it('should insert the provided students into the db', async () => {
            await studentsDb.insert({ name: 'Loser' })
            await studentsDb.insert({ name: 'Frank' })

            const students = await db('students')
            expect(students).toHaveLength(2)
        })

        it('should insert the provided student into the db', async () => {
           let student = await studentsDb.insert({ name: 'Loser' })
            expect(student.name).toBe('Loser')

            student = await studentsDb.insert({ name: 'Frank' })
            expect(student.name).toBe('Frank')
        })
    })


})
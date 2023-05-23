import InvalidUuidError from "../../@seedwork/errors/invalid-uuid.error"
import UniqueEntityId from "./unique-entity-id.vo"
import { validate, validate as validateUUID } from 'uuid'

// function spyValidate(){

//     return jest.spyOn(UniqueEntityId.prototype as any, 'validate')
// }

const spyValidate = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
//beforeEach(()=>spyValidate.mockClear())

describe("Entity id unit tests ", ()=>{
    it("shuold throw error when uuid  is invalid", ()=>{

       // const spyVal = spyValidate()

        expect(()=> new UniqueEntityId('invalid force')).toThrow(new InvalidUuidError())

        expect(spyValidate).toHaveBeenCalled()
    })

    it('should accept a uuid passed in constructor', ()=>{
        //const spyVal = spyValidate()

        const uuid = 'f3eecd4e-c26c-4a29-b62f-c58969710b44'
        const uuidObject = new UniqueEntityId(uuid)

        expect(uuidObject.id).toBe(uuid)
        expect(spyValidate).toHaveBeenCalled()
    })

    it('should accept a uuid passed in constructor', ()=>{
        //const spyVal = spyValidate()
        const uuidObject = new UniqueEntityId()

        expect(validate(uuidObject.id)).toBeTruthy()
        expect(spyValidate).toHaveBeenCalled()
    })
})
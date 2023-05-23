
import UniqueEntityId from "../../@seedwork/domain/unique-entity-id.vo";
import { Category, CategoryProperties } from "./category"
import {omit} from "lodash"


describe("Category Unit Test", () => {
    it('constructor of category', () => {

        //triple AAA Arrange Act Assert
        //Arrange
    
        //act
        let category = new Category({name: 'Movie'})

        //assert

        //o teste passa se add nova propriedade no props em Arrange
        // expect(category.props).toMatchObject(props)

        let props = omit(category.props, 'created_at')

        expect(props).toStrictEqual({
            name: "Movie",
            description: null,
            is_active: true
        })

        expect(category.props.created_at).toBeInstanceOf(Date)

        category = new Category({
            name: 'Movie',
            description: 'description value',
            is_active: false
        })

        let created_at = new Date()

        expect(category.props).toStrictEqual({
            name: 'Movie',
            description: 'description value',
            is_active: false,
            created_at
        })


        category = new Category({
            name: 'Movie',
            description: 'description value',

        })
        expect(category.props).toMatchObject({
            name: 'Movie',
            description: 'description value',
        })

        category = new Category({
            name: 'Movie',
            is_active: false

        })
        expect(category.props).toMatchObject({
            name: 'Movie',
            is_active: false
        })


        category = new Category({
            name: 'Movie',
            created_at

        })
        expect(category.props).toMatchObject({
            name: 'Movie',
            created_at
        })

    })

    it('getter of name field',() => {
        const category = new Category({name: 'Movie'})

        expect(category.name).toBe('Movie')
    });

    it('getter and setter of description field', ()=>{
        let category = new Category({name: 'Movie'})
        expect(category.description).toBeNull()

        category = new Category({name: 'Movie', description: 'description test'})
        expect(category.description).toBe('description test')

        category = new Category({name: 'Movie'})
        category['description'] = 'description test'
        expect(category.description).toBe('description test')

    })

    it('getter and setter of is_active field', ()=>{
        let category = new Category({name: 'Movie'})
        expect(category.is_active).toBeTruthy()

        category = new Category({name: 'Movie', is_active: false})
        expect(category.is_active).toBeFalsy()

        category = new Category({name: 'Movie', is_active: true})
        expect(category.is_active).toBeTruthy()

    })

    it('getter of created_at field',() => {
        let category = new Category({name: 'Movie'})

        expect(category.created_at).toBeInstanceOf(Date)

        const created_at = new Date()
        category = new Category({name:'Movie', created_at})
        expect(category.created_at).toBe(created_at)
    });

    it('test id field', ()=>{
        type CategoryData = {props: CategoryProperties, id?:UniqueEntityId}
        const data: CategoryData[] = [
            {props: {name: 'Movie'}},
            {props: {name: 'Movie'}, id: null },
            {props: {name: 'Movie'}, id: undefined},
            {props: {name: 'Movie'}, id: new UniqueEntityId()}

        ]

        data.forEach(i => {

            const category = new Category(i.props, i.id as any)
            expect(category.id).not.toBeNull()
            expect(category.id).toBeInstanceOf(UniqueEntityId)
        })

        // let category = new Category({name:'Movie'})
        // expect(category.id).not.toBeNull()
        // expect(validateUUID(category.id)).toBeTruthy()

        // category = new Category({name:'Movie'}, null)
        // expect(category.id).not.toBeNull()
        // expect(validateUUID(category.id)).toBeTruthy()

        // category = new Category({name:'Movie'}, undefined)
        // expect(category.id).not.toBeNull()
        // expect(validateUUID(category.id)).toBeTruthy()

        // category = new Category({name:'Movie'}, '941472a8-f1e9-470f-b8e3-d680a0fe8d10')
        // expect(category.id).not.toBeNull()
        // expect(validateUUID(category.id)).toBeTruthy()
    })

});
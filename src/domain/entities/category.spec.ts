import { Category } from "./category"
import {omit} from "lodash"

describe("Category Unit Test", () => {
    it('constructor of category', () => {

        //triple AAA Arrange Act Assert
        //Arrange
        // const props = {name: 'Movie', 
        // description: 'teste description',
        // created_at: new Date(),
        // is_active: true}

        //wconst props = {name: 'Movie'}
        //act
        //const category = new Category(props);
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
        // expect(category.props).toStrictEqual({
        //     name: "Movie",
        //     description: null,
        //     is_active: true
        // })

        // expect(category.name).toBe('Movie');
        // expect(category.description).toBe('teste description')
        // expect(category.is_active).toBeTruthy()
        // expect(category.create_at).toBe(props.created_at)
    })
})
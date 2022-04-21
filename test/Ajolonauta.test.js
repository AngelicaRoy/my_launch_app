const Ajolonauta=require('./../app/Ajolonauta')


//Ejemplo de prueba de Test
describe("Pruebas de unidad de Ajolonauta", () => {
    test('Caso de prueba 1: Creación de objeto', () => {
        const woopa=new Ajolonauta("Woopa")

        //validar el resultado esperado
        expect(woopa.name).toBe("Woopa");
    })
})


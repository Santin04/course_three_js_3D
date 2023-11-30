//criando o material que os objetos vão usar
const material = new THREE.MeshLambertMaterial(
    {
        color: 0x348feb,
        side: THREE.DoubleSide //deixa o plane e circle visivel por todos ângulos
        //isto também deixa os materiais preenchido por dentro, um cubo para de ser oco com isso
    }
)


//criando um cilindro
const cylinder = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(
        //raio de cima, raio de baixo e altura
        0.5, 0.5, 1
    ),
    material
)
scene.add(cylinder)


//criando um plano (parede/chãos)
const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(
        //lado e comprimento
        1.5, 1.5,
    ),
    material
)
plane.position.x = 2
scene.add(plane)
//para usa-lo como chão, bosta rotacionar ele 90°


//criando uma esfera
const sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(
        //raio, qntd de lado na largura, qntd de lados na altura
        //quanto maior o valor do segundo e terceiro item, mais redondo fica
        0.5, 15, 15
    ),
    material
)
sphere.position.x = -2
scene.add(sphere)

renderer.setAnimationLoop(() => {

    x3.tick()

    x3.fps(()=>{
        renderer.render(scene, camera)
    })
    
})
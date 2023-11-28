//criando um cone
const material = new THREE.MeshLambertMaterial(
    {color: 0x348feb}
)
const cube = new THREE.Mesh(new THREE.BoxBufferGeometry(), material)

scene.add(cube)


//criando um circulo
const circle = new THREE.Mesh(
    //primeiro campo dentro do parenteses é o raio e o segundo é a quantia de lado
    new THREE.CircleBufferGeometry(1, 20),
    material
)

circle.position.x = -2
//é necessário passar os graus dessa forma, se não ele usa radiano
circle.rotation.x = THREE.MathUtils.degToRad(-90)


//criando um cone
const cone = new THREE.Mesh(
    //dentro do parenteses (raio, altura, e qntd de lados)
    new THREE.ConeBufferGeometry(1, 2, 20), material
)

cone.position.x = 2

scene.add(cone)

scene.add(circle)

x3.add(cube)

renderer.setAnimationLoop(() => {

    x3.tick()

    x3.fps(()=>{
        renderer.render(scene, camera)
    })
    
})
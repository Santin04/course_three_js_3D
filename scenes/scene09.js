//criando um cubo
const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshLambertMaterial({ color: 0x368ed1})
)
//movendo o local do cubo
cube.position.y = 1
//dizendo que o cube emite sombra
cube.castShadow = true
scene.add(cube)

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide })
)
//girando o floor para deixar como o chão
floor.rotation.x = THREE.MathUtils.degToRad(-90)
//dizendo que o chão recebe sombra
floor.receiveShadow = true
scene.add(floor)
x3.add(cube)

//criando a iluminação da cena, definindo a cor e a altura de onde vem a luz
const sun = new THREE.DirectionalLight(0xFFFFFF, 8)
//ajustando de que direção vem a iluminação
sun.position.y = 4
//dizendo que a luz é capaz de gerar sombra nos objetos
sun.castShadow = true
//fazendo com que a luz do sol siga o cubo
sun.target = cube
scene.add(sun)

//faz com que fique visivel o ponto de onde vem a iluminação e você consegue
//alterar pelo web para o jeito que achar melhor, o helper false é tirando o
//objeto que indica de onde vem o ponto de luz
x3.add(sun)


renderer.setAnimationLoop(() => {

    x3.tick()

    x3.fps(()=>{
        renderer.render(scene, camera)
    })
    
}) 
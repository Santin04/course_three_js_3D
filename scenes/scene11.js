//criando um cubo
const ball = new THREE.Mesh(
    new THREE.SphereBufferGeometry(0.5, 60, 60),
    new THREE.MeshStandardMaterial({ color: 0xFFFFFF})
)
//movendo o local do cubo
ball.position.y = 1
//dizendo que a bola emite sombra
ball.castShadow = true
scene.add(ball)

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    //o primeiro controla se o objeto espalha ou não a luz que recebe
    //o segundo controla se o objeto é totalmente liso ou áspero
    new THREE.MeshStandardMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide, metalness: 1, roughness: 0 })
)
//girando o floor para deixar como o chão
floor.rotation.x = THREE.MathUtils.degToRad(-90)
//dizendo que o chão recebe sombra
floor.receiveShadow = true
scene.add(floor)
x3.add(ball)

//criando a iluminação da cena, definindo a cor, intensidade, distância e ângulo
const olofote = new THREE.PointLight(0xFFFFFF, 0.75)
//ajustando de que direção vem a iluminação
olofote.position.y = 4
//dizendo que a luz é capaz de gerar sombra nos objetos
olofote.castShadow = true
//fazendo com que a luz do olofote siga o cubo
olofote.target = ball
scene.add(olofote)

//faz com que fique visivel o ponto de onde vem a iluminação e você consegue
//alterar pelo web para o jeito que achar melhor, o helper false é tirando o
//objeto que indica de onde vem o ponto de luz
x3.add(olofote)


renderer.setAnimationLoop(() => {

    x3.tick()

    x3.fps(()=>{
        renderer.render(scene, camera)
    })
    
}) 
const options = {
    //onde você quer desenhar os objetos 3d
    targetSelector: '#scene',
    //definindo altura e largura da cena
    width: 800,
    height: 800,
    //definindo a cor do background da cena
    //pegar a cor e trocar o '#' por 0x
    backgroundColor: 0x222222,
}

// criando o renderer para renderizar o desenho 3d
const renderer = new THREE.WebGLRenderer({
    //otimiza, deixa mais leve
    antialias: true
})
//otimizando a tela deixando mais leve
renderer.setPixelRatio(window.setPixelRatio)
// definindo o tamanho da onde vai ser renderizado
renderer.setSize(options.width, options.height)
//ativando as sombras no projeto
renderer.shadowMap.enabled = true
//deixando a sombra mais suave e mais realista
renderer.shadowMap.type = THREE.PCFSoftShadowMap
//deixa com que as luzes sigam as leis da física, usado com Standard e Physical
renderer.physicallyCorrectLights = true

//criando o elmento na tela
document.querySelector(options.targetSelector).appendChild(renderer.domElement)

//criando uma cena onde vai ser colocado os objetos
const scene = new THREE.Scene()
scene.background = new THREE.Color(options.backgroundColor)

//criando a camera que vai fazer com que seja possível visualizar o objeto 3d
const camera = new THREE.PerspectiveCamera(50, options.width / options.height)
camera.position.x = 3.38
camera.position.y = 12.77
camera.position.z = 9.04

//criando a luz, definindo a cor, a intensidade
const light = new THREE.HemisphereLight(0xFFFFFF, 0x080820, 2.5)
//scene.add(light) //adicionando a luz na cena

//melhor visualização das 3 dimensões do desenho 3d
const x3 = new THREEx3(
    {THREE, OrbitControls: THREE.OrbitControls, camera, renderer, scene},
    //tirando o quadriculado e o indicadores dos eixos x, y e z
    {grid: {visible: false}, axes: {visible: false}}
)

//aparece as posição da camera
x3.add(camera)
//aparece as posição da luz e tirando o objeto que aparece no meio
//x3.add(light, { helper: {visible: false} })
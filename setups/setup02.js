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
renderer.setSize(
    options.width, options.height
)

//criando o elmento na tela
document.querySelector(options.targetSelector).appendChild(renderer.domElement)

//criando uma cena onde vai ser colocado os objetos
const scene = new THREE.Scene()
scene.background = new THREE.Color(options.backgroundColor)

//criando a camera que vai fazer com que seja possível visualizar o objeto 3d
const camera = new THREE.PerspectiveCamera(50, options.width / options.height)
camera.position.z = 5

//criando a luz, definindo a cor, a intensidade
const light = new THREE.HemisphereLight(0xFFFFBB, 0x080820, 4)
scene.add(light) //adicionando a luz na cena

//melhor visualização das 3 dimensões do desenho 3d
const x3 = new THREEx3({
    THREE, OrbitControls: THREE.OrbitControls, camera, renderer, scene
})

//aparece as posição da camera
x3.add(camera)
//aparece as posição da luz
x3.add(light)
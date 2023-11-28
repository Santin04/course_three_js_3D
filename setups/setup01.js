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
const renderer = new THREE.WebGLRenderer()
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

//criando a luz, definindo a cor e a intensidade
const light = new THREE.AmbientLight(0x404040, 4)
scene.add(light) //adicionando a luz na cena
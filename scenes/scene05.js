//path serve para armazenar os posicionamentos do desenho livre
//recomendado o uso de um plano cartesiano de auxilio
const path = new THREE.Path()
//criando a linha de desenho livre
path.moveTo(1, 3)
//movendo a linha
path.lineTo(3, 3)
path.lineTo(3, 1)
//Fazendo linha com curva, coloca primeiro a coordenada que vai
//puxar a linha e depois do destino da linha 
path.quadraticCurveTo(2, 0, 1, 1)
//essa curva de linha abaixo é feita com dois pontos de curva
//(pontos que puxa a linha fora da reta)
path.bezierCurveTo(0, 1, 2, 3, 1, 3)

const geometry = new THREE.BufferGeometry()
//passando os pontos em que a forma que criamos vai passar
geometry.setFromPoints(path.getPoints())

//Criando o material da linha
const material = new THREE.LineBasicMaterial(
    {color: 0xFFFFFF}
)

//juntando o material com o desenho
const draw = new THREE.Line(geometry, material)

//adicionando a cena
scene.add(draw)

renderer.setAnimationLoop(() => {

    x3.tick()

    x3.fps(()=>{
        renderer.render(scene, camera)
    })
    
})
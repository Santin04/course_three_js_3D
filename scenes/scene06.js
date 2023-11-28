//Desenhando um coração
const path = new THREE.Path()

path.moveTo(-11, 15)
path.quadraticCurveTo(-11, 22, -5, 22)
path.quadraticCurveTo(-1, 22, 0, 17)
path.quadraticCurveTo(1, 22, 5, 22)
path.quadraticCurveTo(11, 22, 11, 15)
path.quadraticCurveTo(11, 10, 0, 3)
path.quadraticCurveTo(-11, 10, -11, 15)


const geometry = new THREE.BufferGeometry()
geometry.setFromPoints(path.getPoints())

const material = new THREE.LineBasicMaterial(
    {color: 0xFFFFFF}
)

const draw = new THREE.Line(geometry, material)

scene.add(draw)

renderer.setAnimationLoop(() => {

    x3.tick()

    x3.fps(()=>{
        renderer.render(scene, camera)
    })
    
})
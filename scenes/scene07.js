//Desenhando um coração
const path = new THREE.Shape()

path.moveTo(-11, 9)
path.quadraticCurveTo(-11, 16, -5, 16)
path.quadraticCurveTo(-1, 16, 0, 11)
path.quadraticCurveTo(1, 16, 5, 16)
path.quadraticCurveTo(11, 16, 11, 9)
path.quadraticCurveTo(11, 4, 0, -3)
path.quadraticCurveTo(-11, 4, -11, 9)

//criando um desenho 2d
// const geometry = new THREE.ShapeBufferGeometry(path)

//deixando o desenho 3d
const geometry = new THREE.ExtrudeBufferGeometry(
    path, {
        //tamanho no exio y
        depth: 2,
        //arredondamento do objeto ou não
        bevelEnabled: true,
        //ajustes do arredondamento
        bevelSize: 2,
        bevelThickness: 2
    }
)

const material = new THREE.MeshLambertMaterial(
    {
        color: 0xeb3452,
        side: THREE.DoubleSide,
    }
)

const draw = new THREE.Mesh(geometry, material)

scene.add(draw)

renderer.setAnimationLoop(() => {

    x3.tick()

    x3.fps(()=>{
        renderer.render(scene, camera)
    })
    
})
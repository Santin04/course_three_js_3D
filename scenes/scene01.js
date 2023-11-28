const geometry = new THREE.BoxBufferGeometry() //criando o cubo
const material = new THREE.MeshBasicMaterial(
    {color: 0xeb3468} //mudando a cor do cubo
) //criando o materia do cubo
const cube = new THREE.Mesh(geometry, material) //juntando os dois de cima

scene.add(cube) //adicionando o cubo na cena

//fazendo com que o cube se movimente
cube.rotation.x = 90 //move o cube 90° e o deixa parado
//para fazer com que ele se movimente, basta colocar a rotação dentro do
//loop de renderização


//fazendo com que o renderer renderize a cena agora com o cubo
//essa função faz com que seja renderiza diversas vezes assim dando a
//sensação de movimento
renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
})

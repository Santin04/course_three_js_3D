//baixando um material da internet e usando no projeto
const loader = new THREE.TextureLoader()

//POLYESTER
const polyester = new THREE.MeshStandardMaterial({ 
    //definindo o desenho do material
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/basecolor.jpg'),
    //definindo a textura do material
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/normal.jpg')
})

//criando material do chão
//MADEIRA
const wood = new THREE.MeshStandardMaterial({
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/basecolor.jpg'),
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/normal.jpg')
})

//METAL
// METAL
const metal = new THREE.MeshStandardMaterial({
    transparent: true, side: THREE.DoubleSide,
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/basecolor.jpg'),
    alphaMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/opacity.jpg'),
    metalnessMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/metallic.jpg'),
    emissiveMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/emissive.jpg'),
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/normal.jpg'),
    aoMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/occlusion.jpg'),
    roughnessMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/roughness.jpg'),
});

// Criando uma esfera
const ballGeometry = new THREE.SphereBufferGeometry(1, 60, 60);
const ballMaterial = new THREE.MeshPhysicalMaterial({ color: 0x354096 });
const ball = new THREE.Mesh(ballGeometry, polyester);

// Movendo a esfera para cima
ball.position.y = 2;

// Habilitando sombra para a esfera
ball.castShadow = true;

// Adicionando a esfera à cena
scene.add(ball);

// Criando um plano (chão)
const floorGeometry = new THREE.PlaneBufferGeometry(10, 10);
const floorMaterial = new THREE.MeshPhysicalMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide, metalness: 0.48, roughness: 0.57 });
const floor = new THREE.Mesh(floorGeometry, metal);

// Girando o plano para que ele seja o chão
floor.rotation.x = THREE.MathUtils.degToRad(-90);

// Habilitando sombra para o chão
floor.receiveShadow = true;

// Adicionando o chão à cena
scene.add(floor);

// Criando a iluminação da cena (ponto de luz)
const pointLight = new THREE.PointLight(0xFFFFFF, 7);
pointLight.position.y = 4; // Ajustando a posição da luz
pointLight.position.x = -1.15; // Ajustando a posição da luz

// Habilitando sombra para a luz
pointLight.castShadow = true;

// Fazendo com que a luz do ponto siga a esfera
pointLight.target = ball;

// Adicionando a luz à cena
scene.add(pointLight);

// Configurando a renderização para lidar com objetos transparentes
renderer.sortObjects = false;

x3.add(pointLight, {helper: {visible: false}})

// Configurando o loop de animação
renderer.setAnimationLoop(() => {
    // Atualizando o objeto 3D
    x3.tick();

    // Renderizando a cena
    x3.fps(() => {
        renderer.render(scene, camera);
    });
});

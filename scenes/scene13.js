//baixando um material da internet e usando no projeto
const loader = new THREE.TextureLoader()

const polyester = new THREE.MeshStandardMaterial({ map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/basecolor.jpg') })

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
const floorMaterial = new THREE.MeshPhysicalMaterial({ color: 0xff0909, side: THREE.DoubleSide, metalness: 0.48, roughness: 0.57 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);

// Girando o plano para que ele seja o chão
floor.rotation.x = THREE.MathUtils.degToRad(-90);

// Habilitando sombra para o chão
floor.receiveShadow = true;

// Adicionando o chão à cena
scene.add(floor);

// Criando a iluminação da cena (ponto de luz)
const pointLight = new THREE.PointLight(0xFFFFFF, 0.75);
pointLight.position.y = 4; // Ajustando a posição da luz

// Habilitando sombra para a luz
pointLight.castShadow = true;

// Fazendo com que a luz do ponto siga a esfera
pointLight.target = ball;

// Adicionando a luz à cena
scene.add(pointLight);

// Configurando a renderização para lidar com objetos transparentes
renderer.sortObjects = false;

// Configurando o loop de animação
renderer.setAnimationLoop(() => {
    // Atualizando o objeto 3D
    x3.tick();

    // Renderizando a cena
    x3.fps(() => {
        renderer.render(scene, camera);
    });
});

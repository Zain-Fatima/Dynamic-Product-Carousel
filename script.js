let scene, camera, renderer, carouselGroup;
const models = [
    { url: 'assets/car_scene/scene.gltf', info: "Car Scene" }, 
    {url: 'assets/vintage_car/scene.gltf', info: "Vintage Car" },
    { url: 'assets/destroyed_car/scene.gltf', info: "Destroyed Car" },
    { url: 'assets/beetle_car/scene.gltf', info: "Beetle Car" }, 
    { url: 'assets/car_scene/scene.gltf', info: "Car Scene" }, 
    { url: 'assets/cartoon_car/scene.gltf', info: "Cartoon Car" }, 
    { url: 'assets/vintage_car/scene.gltf', info: "Vintage Car" },
];
const modelsPerPage = 3; //to show three models at one slider
let currentIndex = 0;

function init() {
    scene = new THREE.Scene(); // initializes the scene
    scene.background = new THREE.Color(0xffffff);
    //setting up the perspective camera
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;
    //WEBGL Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth * 0.8, 400);
    renderer.setPixelRatio(window.devicePixelRatio);
    //TO append the models in the caraousel container
    document.querySelector('.carousel-container').appendChild(renderer.domElement);
    //light effects so that they don't appear in pitch black color
    const ambientLight = new THREE.AmbientLight(0xffffff,  1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    //grouping the caraousel models
    carouselGroup = new THREE.Group();
    scene.add(carouselGroup);

    loadModels(); //to load 3d models
    createNavDots(); // for navigation

    //Some Event Listeners
    document.getElementById('prevBtn').addEventListener('click', prevModel);
    document.getElementById('nextBtn').addEventListener('click', nextModel);
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove); // Added mouse move listener for hover effect but it's not working

    animate();
}

//To handle window resizing
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth * 0.8, 400);
}

//Took this part from Chatgpt but still didn't work
function onMouseMove(event) {
    const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(carouselGroup.children);

    // Reset cursor
    document.body.style.cursor = 'auto';

    if (intersects.length > 0) {
        // Change cursor to pointer
        document.body.style.cursor = 'pointer';

        // Add click event listener for the intersected model
        const model = intersects[0].object;
        model.onClick = () => {
            alert(model.userData.info); // Show the model info in a popup
        };

        // Check for click on model
        window.addEventListener('click', () => {
            if (model.onClick) model.onClick();
        });
    }
}

//GLTF LOADER
function loadModels() {
    const loader = new THREE.GLTFLoader();
    models.forEach((model) => {
        loader.load(model.url, (gltf) => {
            const modelMesh = gltf.scene;
            scaleModel(modelMesh);
            modelMesh.position.y = -1; 
            modelMesh.userData = { info: model.info }; 
            modelMesh.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
            carouselGroup.add(modelMesh);
            updateVisibleModels();
        }, undefined, (error) => {
            console.error('An error happened:', error);
        });
    });
}

//To Scaled uniformly for consistent size for individual models
function scaleModel(modelMesh) {
    const box = new THREE.Box3().setFromObject(modelMesh);
    const size = Math.max(box.getSize(new THREE.Vector3()).x, box.getSize(new THREE.Vector3()).y, box.getSize(new THREE.Vector3()).z);
    modelMesh.scale.set(2.2 / size, 2.2 / size, 2.2 / size); 
}

//Updaing the models according to their index
function updateVisibleModels() {
    carouselGroup.children.forEach((modelMesh, index) => {
        modelMesh.visible = index >= currentIndex && index < currentIndex + modelsPerPage;
        if (modelMesh.visible) {
            const spacing = 5; // More space between models
            modelMesh.position.x = (index - currentIndex) * spacing - spacing; // Position models correctly
        }
    });
    updateNavDots();
}

function prevModel() {
    if (currentIndex > 0) {
        currentIndex -= modelsPerPage;
        updateVisibleModels();
    }
}

function nextModel() {
    if (currentIndex + modelsPerPage < models.length) {
        currentIndex += modelsPerPage;
        updateVisibleModels();
    }
}

//for the navigation dots
function createNavDots() {
    const navDotsContainer = document.querySelector('.nav-dots');
    const totalDots = Math.ceil(models.length / modelsPerPage);
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('nav-dot');
        dot.addEventListener('click', () => {
            currentIndex = i * modelsPerPage;
            updateVisibleModels();
        });
        navDotsContainer.appendChild(dot);
    }
    updateNavDots();
}

function updateNavDots() {
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === Math.floor(currentIndex / modelsPerPage));
    });
}

function animate() {
    requestAnimationFrame(animate);
    carouselGroup.children.forEach(modelMesh => {
        if (modelMesh.visible) {
            modelMesh.rotation.y += 0.01; //rotation for the models to rotate independently
        }
    });
    renderer.render(scene, camera);
}

init(); //starting the initialization process

### **3D Product Carousel Documentation**

#### **Overview**
Developed a 3D product carousel in Three.js to display GLTF models with carousel navigation, hover effects, and clickable popups showing model details.

#### **Development Steps**
1. **Research**: Explored Three.js documentation, especially GLTFLoader and raycasting, with additional help from community forums and tutorials.
2. **Implementation**:
   - **Model Loading & Carousel Setup**: Built a modular structure with `loadModel`, `updateVisibleModels`, and `scaleModel` for clarity.
   - **Interactive Elements**: Integrated raycasting to detect clicks on models, allowing for popups with model information.

#### **Challenges**
1. **Model Positioning**: Initial inconsistencies in model loading and alignment were solved by implementing a scaling function.
2. **Click Interactions**: Mouse events required custom raycasting setup for interactivity in 3D, which I implemented with help from Three.js community examples.

#### **Future Enhancements**
Potential improvements include adding carousel animations and further refining interactive popups.

#### **Resources**
Three.js Documentation, online forums, community tutorials, and 3D models from Sketchfab.  
https://threejs.org/docs/index.html#api/en/core/Raycaster  
https://threejs.org/docs/index.html#manual/en/introduction/Loading-3D-models
https://threejs.org/examples/  
https://stackoverflow.com/questions/73983106/making-imported-3d-objects-clickable-with-three-js 
https://discourse.threejs.org/t/zoom-into-object-and-open-popup-on-click/40337  
https://discourse.threejs.org/t/hot-to-get-pop-up-modal-after-clicking-on-the-object-solved/1255/5  

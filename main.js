// We need 3 things everytime we use Three.js

 // Scene + Camera + Renderer

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer({ antialias: true})



renderer.setSize( window.innerWidth, window.innerHeight )

// sets renderer background color

renderer.setClearColor("#eb176b")

document.body.appendChild( renderer.domElement )

camera.position.z = 5



// resize canvas on resize window

window.addEventListener( 'resize', () => {

	let width = window.innerWidth

	let height = window.innerHeight

	renderer.setSize( width, height )

	camera.aspect = width / height

	camera.updateProjectionMatrix()

})



// basic cube
//cambiamos por un cilindro, los dos primeros parametros son el tamaño de los circulos, el tercero la altura, el ultimo el numero de caras que lo componen
var geometry = new THREE.CylinderGeometry( 1, 1, 2, 50 );

var material = new THREE.MeshStandardMaterial( { color: 0xFFFFFF, flatShading: true, metalness: .5, roughness: 1 })

var cube = new THREE.Mesh ( geometry, material )

scene.add( cube )



// wireframe cube

var geometry = new THREE.CylinderGeometry( 3, 3, 6)

var material = new THREE.MeshBasicMaterial( {

	color: "#FFFFFF", wireframe: true, transparent: true

})

var wireframeCube = new THREE.Mesh ( geometry, material )

scene.add( wireframeCube )



// ambient light

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)

scene.add( ambientLight )



// point light

var pointLight = new THREE.PointLight( 0xffffff, 1 );

pointLight.position.set( 25, 50, 25 );

scene.add( pointLight );





function animate() {

	requestAnimationFrame( animate )

	cube.rotation.x += 0.04;

	cube.rotation.y += 0.04;

  cube.rotation.z += 0.04; //cambiamos la animacion de giro
  //cambiamos la rotacion
	//wireframeCube.rotation.x -= 0.01;

	wireframeCube.rotation.y -= 0.03;

	renderer.render( scene, camera )

}

animate()

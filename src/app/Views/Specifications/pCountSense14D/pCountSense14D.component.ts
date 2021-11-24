import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import { SceneService } from 'src/providers/scene.service';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pCountSense14D',
  templateUrl: './pCountSense14D.component.html',
  styleUrls: ['./pCountSense14D.component.css']
})
export class PCountSense14DComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.main1();
  }

  main1() {
    const canvas = document.querySelector('#c') as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({canvas});

    const fov = 45;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 10, 20);

    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 5, 0);
    controls.update();

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#212424');

    // {
    //   const planeSize = 4000;

    //   const loader = new THREE.TextureLoader();
    //   const texture = loader.load('');
    //   texture.wrapS = THREE.RepeatWrapping;
    //   texture.wrapT = THREE.RepeatWrapping;
    //   texture.magFilter = THREE.NearestFilter;
    //   const repeats = planeSize / 200;
    //   texture.repeat.set(repeats, repeats);

    //   const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    //   const planeMat = new THREE.MeshPhongMaterial({
    //     map: texture,
    //     side: THREE.DoubleSide,
    //   });
    //   const mesh = new THREE.Mesh(planeGeo, planeMat);
    //   mesh.rotation.x = Math.PI * -.5;
    //   scene.add(mesh);
    // }

    {
      const skyColor ='#BFD5EC';  // light blue
      const groundColor = '#BFD5EC';  // brownish orange
      const intensity = 0.5;
      const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
      scene.add(light);
    }


    {
      const color =  '#BFD5EC';
      const intensity = 0.8;
      const light = new THREE.DirectionalLight(color, intensity);


      light.position.set(4, 4, 4);
      scene.add(light);
      scene.add(light.target);
    }
    {
      const color =  '#BFD5EC';
      const intensity = 0.8;
      const light = new THREE.DirectionalLight(color, intensity);

      light.position.set(-4, -4, -4);

      scene.add(light);
      scene.add(light.target);
    }

    function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
      const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
      const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
      const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
      // compute a unit vector that points in the direction the camera is now
      // in the xz plane from the center of the box
      const direction = (new THREE.Vector3())
          .subVectors(camera.position, boxCenter)
          .multiply(new THREE.Vector3(1, 1, 1))
          .normalize();

      // move the camera to a position distance units way from the center
      // in whatever direction the camera was from the center already
      camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

      // pick some near and far values for the frustum that
      // will contain the box.
      camera.near = boxSize / 100;
      camera.far = boxSize * 100;

      camera.updateProjectionMatrix();

      // point the camera to look at the center of the box
      camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
    }

    {
      const objLoader = new OBJLoader();
      objLoader.load('http://173.248.136.206:2250/assets/Models/IN2.obj', (root) => {
        root.updateMatrixWorld();
        scene.add(root);
        // compute the box that contains all the stuff
        // from root and below
        const box = new THREE.Box3().setFromObject(root);

        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());

        // set the camera to frame the box
        frameArea(boxSize * 1.2, boxSize, boxCenter, camera);

        // update the Trackball controls to handle the new size
        controls.maxDistance = boxSize * 10;
        controls.target.copy(boxCenter);
        controls.update();
      });
    }

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    function render() {

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

}

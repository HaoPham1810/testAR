import {
  Scene,
  Entity,
  MarkerCamera,
  Camera,
  Cursor,
} from "react-aframe-ar";

export default function Test() {
  return (
    <Scene>
      <a-marker-camera preset="hiro">
        <Entity
          gltf-model="https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf" // Đảm bảo URL hợp lệ
          position={{ x: 0, y: 0, z: -2 }} // Đặt mô hình gần camera hơn
          scale="0.04 0.04 0.04" // Giảm kích thước mô hình
          rotation="10 -10 2"
          animation={{
            property: "rotation",
            from: "0 0 0",
            to: "0 360 0",
            dur: 2000,
            dir: "alternate",
            loop: true
          }}
        />
      </a-marker-camera>
      <Camera>
        <Cursor></Cursor>
      </Camera>
    </Scene>
  );
}

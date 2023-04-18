import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Banana from './models/Banana'
import Lemon from './models/Lemon'
import Hamburger from './models/Hamburger'
import VideoWall from './videoWall'
import AlbumWall from './AlbumWall'
export default function Experience() {
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow shadow-normalBias={ 0.04 } position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Sky />
        <Hamburger position-x = {0} scale={0.08}/>
        <Banana position-x = {-1} scale={0.1}/>
        <VideoWall/>
        <AlbumWall/>
        <Lemon position-x = {1} scale={0.1}/>
    </>
}
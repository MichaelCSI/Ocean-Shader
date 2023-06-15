import './style.css'
import ReactDOM from 'react-dom/client'

import { Canvas } from '@react-three/fiber'
import ShaderDemo from './ShaderDemo.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        flat
        camera={{
            fov: 10,
            near: 0.1,
            far: 2000,
            position: [ 0, 0.5, 11 ]
        }}
    >
        <ShaderDemo/>
    </Canvas>
)
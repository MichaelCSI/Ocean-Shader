import './style.css'
import ReactDOM from 'react-dom/client'

import { Suspense } from 'react'

import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ShaderDemo from './ShaderDemo.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        {/* <Suspense fallback={ null }>
            <></>
        </Suspense> */}
        <Loader
            containerStyles={{ backgroundColor: 'white' }}
            innerStyles={{ width: '200px', height: '4px', background: 'black' }}
            barStyles={{ background: 'black' }}
            dataStyles={{ color: 'black' }}
            dataInterpolation={(p) => `Loading: ${p.toFixed(0)}%`}
        />
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
    </>
)
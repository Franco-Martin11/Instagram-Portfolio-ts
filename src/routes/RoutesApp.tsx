import { Projects, Stack } from '@/pages'
import { Routes, Route } from 'react-router-dom'
type Props = {}

const RoutesApp = (props: Props) => {
  return (
    <Routes>
      <Route path="/tolls" element={<Stack/>} />
      <Route index path="/publish" element={<Projects />} />
      <Route path="/" element={<div className="min-h-[50vh]">
        <h1 className="font-lg">vamos a ver si es que funciona esto3</h1>
      </div>} />
      <Route path="*" element={<div className="min-h-[50vh]">
        <h1 className="font-lg">vamos a ver si es que funciona esto4</h1>
      </div>} />
    </Routes>)
}

export default RoutesApp


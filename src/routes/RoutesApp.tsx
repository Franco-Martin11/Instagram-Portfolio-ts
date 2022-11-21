import { Routes, Route } from 'react-router-dom'
type Props = {}

const RoutesApp = (props: Props) => {
  return (
    <Routes>
      <Route path="/tolls" element={<h1>asd4</h1>} />
      <Route index path="/publish" element={<div>vampos</div>} />
      <Route path="/" element={<h1>asfg5</h1>} />
      <Route path="*" element={<h1>asdqwe6</h1>} />
    </Routes>)
}

export default RoutesApp
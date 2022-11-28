import { Slides } from "@/components";
import { publishData } from "@/types/types"

type modalType = { handleToggle: () => void, imgUrl: string, imgAlt: string, slides?: publishData };

const ProjectModal = ({ handleToggle, imgUrl, imgAlt, slides }: modalType) => {
  console.log(slides)
  return (
    <div onClick={handleToggle} className="w-full min-h-screen fixed top-0 left-0 z-10 grid place-items-center bg-[rgba(0,0,0,0.83)]">

      {slides &&
        <Slides imgWidth={682}>
          <img src={imgUrl} alt={imgAlt} loading='lazy' className=' snap-center aspect-square object-cover w-96 md:w-full md:aspect-video h-96 bg-slate-600' />
          {slides?.map(element => <img src={element.imgUrl} alt={element.imgAlt} loading='lazy' className=' snap-center aspect-square md:aspect-video object-cover w-96 md:w-full  h-96 bg-slate-600' />)}
        </Slides>
      }
    </div>
  )
}

export default ProjectModal
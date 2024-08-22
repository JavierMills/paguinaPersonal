import Image from "next/image";
import bg from  "../../../../public/background/tree.png";
import { projectsData } from "../../data";
import ProjectsList from "../../components/projects";
import {Staff} from "../../components/models/Staff";
import RenderModel from "../../components/RenderModel";


export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"></Image>
    <ProjectsList projects={projectsData} />
    <div className="flex items-center justify-center fixed top-20 -left-24 h-screen">
    <RenderModel>
        <Staff />
      </RenderModel>
    </div>
    </>
  );
}

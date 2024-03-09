import data from '../../public/data.json';
import Image from 'next/image';
export default function Projects() {
  return (
    <>
      <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Projects">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5  md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest  lg:sr-only">Projects</h2>
        </div>
        <div>
          <ol>
            <li className="mb-12">
              {data.projects.map((datum:any,index:any)=>datum.selected?<Card key={index} data={datum}/>:'')}
         </li>
         </ol>
        </div>
        <a href='/projects' className='aachen text-xl' target='_blank'>View Projects Archive <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-6 w-6 shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
          </span></a>
      </section>
    </>
  );
}

function Card({data}:any){
  return (  <div className="w-full h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white mb-4">
   <a href={data.link} target='_blank' className=" cursor-pointer flex">
      <div style={{borderRight:'1px solid black'}} className="time w-fit pl-2 opacity-75  pr-2 ">
        <Image src={data.img} alt={data.name} width={300} height={100}/>
      </div>
      <div className="content pl-2 pb-2">
        <h4 className="name aachen-bold text-xl">{data.name} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-6 w-6 shrink-0" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></h4>
        <p className="desc text-sm opacity-75">{data.desc}</p>
        <ul className="flex flex-wrap gap-2 mt-2">{data.techTags.map((tag:String,index:any)=><li className="h-max  border-black border-2 pl-1.5 pr-1.5 pt-1 pb-1 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] w-fit" key={index}><p className='text-sm'>{tag}</p></li>)}</ul>
      </div>
   </a>
</div>)
}
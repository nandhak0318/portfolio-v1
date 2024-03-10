import Cursor from "@/components/ui/Cursor";
import data from "../../public/data.json";

export default function Projects() {
  return (
    <>
      <Cursor />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:py-24">
          <a
            className="group mb-2 inline-flex items-center font-semibold leading-tight text-black"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              ></path>
            </svg>
            Nandha Kumar
          </a>
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            All Projects
          </h1>
          <table
            id="content"
            className="mt-12 w-full border-collapse text-left"
          >
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-[#F2D027] px-6 py-5 backdrop-blur">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                  Year
                </th>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                  Project
                </th>
                {/* <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>  */}
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                  Built with
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                  Link
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                  Source Code
                </th>
              </tr>
            </thead>
            <tbody>
              {data.projects.map((proj, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b border-slate-300/10 last:border-none"
                  >
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">{proj.year}</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-black">
                      <div>
                        <div className="block sm:hidden">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-blak hover:text-teal-300 focus-visible:text-teal-300  sm:hidden group/link text-base"
                            href={proj.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Emerson Collective (opens in a new tab)"
                          >
                            <span>
                              {proj.name}{" "}
                              <span className="inline-block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="hidden sm:block">
                          {proj.name}
                        </div>
                      </div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top lg:table-cell">
                      <ul className="flex -translate-y-1.5 flex-wrap">
                        {proj.techTags.map((tag,index)=><li key={index} className="my-1 mr-1.5">
                          <div className="h-max  border-black border-2 pl-1.5 pr-1.5 pt-1 pb-1 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] w-fit ">
                            {tag}
                          </div>
                        </li>)}
                      </ul>
                    </td>
                    <td className="hidden py-4 align-top sm:table-cell">
                      <ul className="translate-y-1">
                        <li className="mb-1 flex items-center">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-black hover:text-teal-300 focus-visible:text-teal-300 text-sm group/link "
                            href={proj.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="emersoncollective.com (opens in a new tab)"
                          >
                            <span>
                              {" "}
                              <span className="inline-block">
                                {proj.link}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </td>
                     <td className="hidden py-4 align-top sm:table-cell">
                      <ul className="translate-y-1">
                        <li className="mb-1 flex items-center">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-black hover:text-teal-300 focus-visible:text-teal-300 text-sm group/link "
                            href={proj.source}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="emersoncollective.com (opens in a new tab)"
                          >
                            <span>
                              {" "}
                              <span className="inline-block">
                                {proj.source}
                                {proj?.source?<svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>:''}
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

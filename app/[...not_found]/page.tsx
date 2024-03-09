import Link from "next/link";
import Image from 'next/image';

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-screen justify-center items-center">
          <Image className="block" src={'https://http.cat/404'} alt="cannot load a cat" width={250} height={250} />
      </div>
    </>
  );
}

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div className="text-xl w-2xl leading">
        <p className="text-8xl mb-16">⚠️</p>
        <p className="font-bold mb-7">
          Sorry to Let You Down. <br />
          This Page is Under Construction
        </p>
        <Link href="/">
          <p className="underline">Take me home</p>
        </Link>
      </div>

      {/* <div style={{ backgroundImage: "url(/assets/image.png)" }} className="lg:h-[calc(100%-52px)] bg-repeat-x bg-contain bg-top flex items-center justify-center bg-red-300">
        <div className="max-w-3xl mx-auto w-full h-full bg-top ">
          <Image src="/assets/bg.png" className="h-auto max-h-full  max-w-full bg-contain" height={960} width={1440} alt="bg" />
        </div>
      </div>
      <div className="flex gap-5 flex-col px-13 py-18 items-center bg-amber-500 justify-center h-auto w-full">
        <h1 className="text-4xl text-center">
          Hi, im <br /> Derren Amadeo
        </h1>
        <p className="  w-96 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In magni unde quas, reiciendis inventore minus et, vitae blanditiis culpa dolore eos laudantium doloribus, repellat autem cumque quos porro possimus tempore ut aperiam
          delectus harum consequatur molestias. Omnis nobis amet quibusdam unde ea molestias, labore sint voluptatum voluptatibus, ipsa placeat necessitatibus?
        </p>
      </div>
      <h1></h1> */}
    </div>
  );
};

export default page;

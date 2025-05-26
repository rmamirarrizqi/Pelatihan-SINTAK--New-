import React from "react";
import { FaWikipediaW } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

function NameCard() {
  return (
    <div className="h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-4 rounded-md">
        <div className="flex justify-center items-center flex-col">
          <img
            src="src/assets/Foto Amir.jpg"
            alt="R. M. Amir Arrizqi"
            className="w-24 h-24 rounded-full border"
          />
          <h1 className="text-xl font-bold mt-2">R. M. Amir Arrizqi</h1>
          <p className="font-mono text-gray-400">Mahasiswa</p>
        </div>
        <div className="text-justify mt-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id a
            nesciunt, quasi necessitatibus nostrum possimus laboriosam animi ad
            magnam, aliquid eaque voluptatem fuga alias dolorem nihil sed beatae
            iusto?
          </p>
        </div>
        <LinkSocial
          text="Wikipedia"
          icon={<FaWikipediaW className="mr-2 text-white" />}
          link="https://www.wikipedia.org/"
        />
        <LinkSocial
          text="YouTube"
          icon={<GrYoutube className="mr-2 text-red-600" />}
          link="https://www.youtube.com/"
        />
      </div>
    </div>
  );
}

export default NameCard;

function LinkSocial(props) {
  return (
    <div className="mt-5 flex justify-center items-center">
      <a
        className="bg-black text-white p-2 w-full rounded-lg text-center flex justify-center items-center gap-5"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.icon}
        <span>{props.text}</span>
      </a>
    </div>
  );
}

"use client";

import Image from "next/image";
import type React from "react";

/**
 * Popup Video
 * @param {any} props - component props
 * @param {string} props.id - The html id of the dialog
 * @param {string} props.preview - The url of the preview image
 * @param {string} props.src - The source url of the video
 * @returns {React.JSX.Element}
 */
export default function Video({ id, preview, src }: { id: string, preview: string, src: string }) {
  const showModal = () => {
    document.getElementById(id)!.showModal();
  };

  return (
    <div>
      <div className="relative">
        <Image
          src={preview}
          alt="Preview"
          width={1280}
          height={720}
        />
        <div className="absolute w-full h-full top-0">
          <button role="button" onClick={showModal} className="mx-auto my-auto w-24 h-24 mt-48 bg-white rounded-full p-2 flex items-center justify-center cursor-pointer">
            <Image
              className="pl-1"
              src="/Play Button Orange.svg"
              alt="Play"
              width={36}
              height={36}
            />
          </button>
        </div>
        <dialog id={id} className="modal">
          <div className="modal-box max-w-full w-full lg:w-3/4 xl:w-1/2 mx-12 p-0">
            <iframe className="w-full h-[36rem]" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div >
    </div >
  );
}

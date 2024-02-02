import Image from "next/image";
import a from '../public/1.jpeg'
import b from '../public/2.jpg'
import c from '../public/3.jpg'
import d from '../public/4.jpg'
import e from '../public/5.jpg'
import f from '../public/6.jpg'
import g from '../public/7.jpg'
import h from '../public/8.jpg'

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-gray-100 text-6xl p-6">Michael Lee 3D Portfolio</h1>
      <div className="flex flex-wrap w-full justify-center [&>*]:max-w-96 [&>*]:p-2">
        <div><Image className="rounded-lg" src={a} alt="a" /></div>
        <div><Image className="rounded-lg" src={b} alt="b" /></div>
        <div><Image className="rounded-lg" src={c} alt="c" /></div>
        <div><Image className="rounded-lg" src={d} alt="d" /></div>
        <div><Image className="rounded-lg" src={e} alt="e" /></div>
        <div><Image className="rounded-lg" src={f} alt="f" /></div>
        <div><Image className="rounded-lg" src={g} alt="g" /></div>
        <div><Image className="rounded-lg" src={h} alt="h" /></div>
      </div>
      <div className="flex flex-wrap w-full justify-center [&>*]:p-2 [&>*]:min-w-96 mb-2">
        <div className="aspect-video"><iframe className="h-full w-full" width="100%" src="https://www.youtube.com/embed/WUZVEckYZAU?si=LangxwRe1sLXqFK5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        <div className="aspect-video"><iframe className="h-full w-full" width="100%" src="https://player.vimeo.com/video/444084452?h=2e7fbbeb15" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe></div>
        <div className="aspect-video"><iframe className="h-full w-full" width="100%" src="https://player.vimeo.com/video/414935057?h=5b8896b28d" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe></div>
        <div className="aspect-video"><iframe className="h-full w-full" width="100%" src="https://player.vimeo.com/video/346878279?h=58dc3773f6" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe></div>
        <div className="aspect-video"><iframe className="h-full w-full" width="100%" src="https://player.vimeo.com/video/328047394?h=398b0504e9" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe></div>
        <div className="aspect-video"><iframe className="h-full w-full" width="100%" src="https://www.youtube.com/embed/4yEYPrYMU14?si=8L3r2qJqHd7HF3PJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        <div className="aspect-video"><iframe className="h-full w-full" width="100%" src="https://www.youtube.com/embed/EEvuVo8wGhU?si=tkdU-WduY6YcDwfE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        <div className="aspect-video"><iframe className="h-full w-full" width="100%" src="https://www.youtube.com/embed/PmK9b9r1Bno?si=O26nvlnVWjfPIycU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        <div className="aspect-video"><iframe className="h-full w-full" width="100%" src="https://www.youtube.com/embed/SE3zVO6fwu0" allowFullScreen></iframe></div>
      </div>
      <br/>
    </>
  );
}

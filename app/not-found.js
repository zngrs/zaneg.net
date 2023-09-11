"use client"
import Link from 'next/link'
import {useEffect} from 'react'


export default function NotFound() {
useEffect(() => {
       document.title = "Zane / Not Found 404"
    })
  return <div className='relative'>
		<div className="bold px-6 py-4 newspaper-bg center flex-col h-[fit-content] m-4 ">
		<div className="center flex-col">
		<p className="text-black font-serif mb-6 border-b-[1px] border-t-[1px] w-[800px] max-w-screen text-center border-black ">September 4th, 1992 | Daily Issue</p>
			<h1 className='font-bold newspaper-header text-black text-5xl border-b-[1px] border-black mb-6 pb-3 text-center'>PAGE NOT FOUND!</h1>
			<h2 className="font-semibold italic newspaper-header text-xl text-black m-0 text-center tracking-wide">'AFTER A LONG SEARCH, THE REQUESTED PAGE WAS NOT FOUND'</h2>
			<a href="/" className='hover:underline font-serif text-black italic'>-Says zaneg.net</a>
		</div>

		<p className='font-serif text-black mx-3 w-[50%] '>Like a scene straight out of a classic noir thriller, we must report that, despite the most diligent and fervent efforts, the tenacious server entrusted with the mission to locate the elusive file you sought has, regrettably, returned to the digital newsroom empty-handed.

<br/>
		<br/>
Picture, if you will, the server as a relentless detective, its electronic gaze fixed unwaveringly upon the digital landscape, scanning directory after directory, chasing elusive lines of code through the cyber-alleys in pursuit of a trail gone cold. Alas, the outcome of this high-stakes investigation is a matter of disappointment, as the file remained stubbornly elusive, evading even the most sophisticated digital dragnet.

<br/>
In a world where bytes flow like ink and lines of code weave a tapestry of interconnected intrigue, the server's quest mirrors the timeless pursuit of truth in a noir thriller. With each passing moment, the tension grew, akin to the suspense of a blockbuster movie, leading us to believe that the ultimate revelation was just around the digital corner. However, fate had other plans.

		<img src="https://zngrs.github.io/zaneg.net--assets/static/imgs/newspaper.png" className="my-4 grayscale"/>
As the digital minutes turned into hours, and the hours into days, the anticipation mounted. Much like a front-page exposé on the brink of unveiling a shocking revelation, the server's tireless efforts raised expectations, only to leave us yearning for closure.

<br/>
<br/>
In this realm where binary digits whisper secrets and algorithms hold the keys to the kingdom, the tale of the missing file continues to unfold. Just as an unsolved mystery keeps us on the edge of our seats, this digital enigma lingers, promising the possibility of resolution in the pages of future developments.

<br/>
<br/>
Do not despair, dear reader, for the server, akin to a determined hero in a timeless narrative, remains steadfast in its mission. In the ever-evolving landscape of the digital frontier, the story is far from over, and the next chapter may yet hold the answers we seek. Until then, we bid you farewell, and may your own digital escapades be filled with intrigue and revelation, as you navigate this cyber-noir world of shadows and secrets.</p>
		</div>
		<div className='flex-grow w-[35%]'>
		</div>


  </div>
}

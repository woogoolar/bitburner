import {_song} from "./song.js"
export async function main(ns) {
	ns.disableLog('ALL')
	ns.clearLog()
	let audio=[
		new Audio("data:audio/wav;base64,"+ _song()),
	]
	audio[0].play();
}
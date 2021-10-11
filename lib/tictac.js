"use strict"
const { color } = require('./color')
const { isTicTacToe, getPosTic, KeisiSemua, cekIsi, cekTicTac } = require('./tictactoe');

module.exports = async (prefix, tictactoe, from, sender, nino, mek) => {
	try {
		// TicTacToe
		if (isTicTacToe(from, tictactoe)) {
			let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
			let posi = tictactoe[getPosTic(from, tictactoe)]
			let anu = posi.TicTacToe
			if (posi.status === null) {
				if (sender === posi.ditantang) {
					if (mek.text.toLowerCase() == 'y') {
						let txt = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
    
Giliran @${posi.penantang.split('@')[0]}`
						nino.reply(from, txt, mek, { contextInfo: { mentionedJid: nino.parseMention(txt) }})
						tictactoe[getPosTic(from, tictactoe)].status = true
					} else if (mek.text.toLowerCase() == 't') {
						let txt = `Yah @${posi.ditantang.split('@')[0]} menolak`
						nino.reply(from, txt, mek, { contextInfo: { mentionedJid: nino.parseMention(txt) }})
						tictactoe.splice(getPosTic(from, tictactoe), 1)
					}
				}
			} else if (posi.status === true) {
				if (sender === posi.penantang) {
					for (let i of nomor) {
						if (Number(mek.text) === i) {
							if (cekIsi(Number(mek.text) - 1, anu)) return nino.reply(from, `Nomor tersebut sudah terisi`, mek)
							tictactoe[getPosTic(from, tictactoe)].TicTacToe[Number(mek.text) - 1] = '❎'
							if (cekTicTac(tictactoe[getPosTic(from, tictactoe)].TicTacToe)) {
								let txt = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
`
								nino.reply(from, txt, mek, { contextInfo: { mentionedJid: nino.parseMention(txt) }})
								tictactoe.splice(getPosTic(from, tictactoe), 1)
							} else if (KeisiSemua(anu)) {
								let txt = `Hasil seri

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
`
								nino.reply(from, txt, mek, { contextInfo: { mentionedJid: nino.parseMention(txt) }})
								tictactoe.splice(getPosTic(from, tictactoe), 1)
							} else {
								let txt = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
    
Giliran @${posi.ditantang.split('@')[0]}`
								nino.reply(from, txt, mek, { contextInfo: { mentionedJid: nino.parseMention(txt) }})
								tictactoe[getPosTic(from, tictactoe)].status = false

							}
						}
					}
				}
			} else if (posi.status === false) {
				if (sender === posi.ditantang) {
					for (let i of nomor) {
						if (Number(mek.text) === i) {
							if (cekIsi(Number(mek.text) - 1, anu)) return nino.reply(from, `Nomor tersebut sudah terisi`, mek)
							tictactoe[getPosTic(from, tictactoe)].TicTacToe[Number(mek.text) - 1] = '⭕'
							if (cekTicTac(anu)) {
								let txt = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
`
								nino.reply(from, txt, mek, { contextInfo: { mentionedJid: nino.parseMention(txt) }})
								tictactoe.splice(getPosTic(from, tictactoe), 1)
							} else if (KeisiSemua(anu)) {
								let txt = `Hasil seri

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
`
								nino.reply(from, txt, mek, { contextInfo: { mentionedJid: nino.parseMention(txt) }})
								tictactoe.splice(getPosTic(from, tictactoe), 1)
							} else {
								let txt = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
    
Giliran @${posi.penantang.split('@')[0]}`
								nino.reply(from, txt, mek, { contextInfo: { mentionedJid: nino.parseMention(txt) }})
								tictactoe[getPosTic(from, tictactoe)].status = true
							}
						}
					}
				}
			}
		}
	} catch (err) {
		console.log(color('[ ERR ]', 'red'), err)
	}
}
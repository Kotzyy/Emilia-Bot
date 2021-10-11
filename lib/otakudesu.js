const axios = require('axios');
const cheerio = require('cheerio');

async function Otakudesu(querry) {
	try {
	const link = await axios.get(`https://otakudesu.moe/?s=${querry}&post_type=anime`)
	const c = cheerio.load(link.data)
	let id = c('#venkonten > div > div.venser > div > div > ul > li:nth-child(1) > h2 > a').attr('href')
	const Link = await axios.get(id)
	const $ = cheerio.load(Link.data)
	let judul = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(1) > span').text().trim()
	let judulJpn = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(2) > span').text().trim()
	let score = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(3) > span').text().trim()
	let Produser = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(4) > span').text().trim()
	let Type = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(5) > span').text().trim()
	let Status = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(6) > span').text().trim()
	let TotalEpisode = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(7) > span').text().trim()
	let durasi = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(8) > span').text().trim()
	let Rilis = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(9) > span').text().trim()
	let studio = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(10) > span').text().trim()
	let genre = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(11) > span').text().trim()
	let thumb = $('#venkonten > div.venser > div.fotoanime').find('img').attr('src')
	let Sinopsis = $('#venkonten > div.venser > div.fotoanime > div.sinopc').find('p').text().trim()
	let LinkDown = $('#venkonten').find('div.venser > div:nth-child(8) > ul > li:nth-child(4) > span:nth-child(1) > a').attr('href')
	const data = {
		creator: '@Franky',
		status: link.status,
		result: {
			judul: judul,
			thumb: thumb,
			japan: judulJpn,
			rating: score,
			produser: Produser,
			type: Type,
			status: Status,
			episode: TotalEpisode,
			durasi: durasi,
			rilis: Rilis,
			studio: studio,
			genre: genre,
			link: LinkDown,
			sinopsis: Sinopsis
		}
	}
	return data
} catch (err) {
	var notFond = {
		creator: '@Franky',
		status: link.status,
		Pesan: 'sorry cuk lagi eror :('
	}
	return notFond
}
}
module.exports.Otakudesu = Otakudesu
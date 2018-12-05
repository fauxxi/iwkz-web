const endPoint = 'https://iwkz.de/wp-json/wp/v2';
const jadwalShalatURL = 'https://iwkz.de';
const mjuanJadwalShalatURL = 'https://api.mjuan.info/jadwalshalat';
const wpAPI = {
	posts: `${endPoint}/posts?_embed`,
	ibmus: `${jadwalShalatURL}/jdwlshalat_ibmus/`,
	mjuan: `${mjuanJadwalShalatURL}/berlin`,
	documents: `${endPoint}/media?search=.pdf`
}

export {wpAPI}

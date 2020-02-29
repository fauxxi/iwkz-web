const iwkz = "https://old.iwkz.de";
const endPoint = `${iwkz}/wp-json/wp/v2`;
const mjuanJadwalShalatURL = 'https://api.mjuan.info/jadwalshalat';
const wpAPI = {
  posts: `${endPoint}/posts`,
  ibmus: `${iwkz}/jdwlshalat_ibmus/`,
  mjuan: `${mjuanJadwalShalatURL}/berlin`,
  documents: `${endPoint}/media?search=.pdf`
};

export { wpAPI };

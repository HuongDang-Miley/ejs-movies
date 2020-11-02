
const router = require('express').Router()
const axios = require('axios')


router.get('/movies', (req, res) => {
    axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=cae775d051b73090cfed63ee124b959d&language=en-US&page=1`)
    .then((results) => {
        let myData = results.data.results
        console.log({ myData })
        return res.render('./main/index', { data: myData })
    })

})

module.exports = router
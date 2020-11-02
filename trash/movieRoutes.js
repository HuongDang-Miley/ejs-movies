const router = require('express').Router()
const axios = require('axios')
const key = 'cae775d051b73090cfed63ee124b959d'
const key4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWU3NzVkMDUxYjczMDkwY2ZlZDYzZWUxMjRiOTU5ZCIsInN1YiI6IjVmOGU3Y2NkNzY0NmZkMDAzODkzN2ZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mxXpWVotfBbakkfC4cniiQKuNrhjTDuogQvC5UMpDos'

const url = 'https://api.themoviedb.org/3/movie/550?api_key=cae775d051b73090cfed63ee124b959d'

const image = 'https://api.themoviedb.org/3/configuration?api_key=cae775d051b73090cfed63ee124b959d'


const list = `https://api.themoviedb.org/4/list/3?page=1&api_key=${key4}`


router.get('/movies', (req, res) => {
    axios
        .get(`https://api.themoviedb.org/3/movie/550?api_key=cae775d051b73090cfed63ee124b959d`)
        .then((results) => {
            let myData = results.data
            console.log({ myData })
            let backdrop = `http://image.tmdb.org/t/p/w500${myData.backdrop_path}`
            return res.render('./main/index', { myData: myData, backdrop: backdrop })
        })

})

module.exports = router
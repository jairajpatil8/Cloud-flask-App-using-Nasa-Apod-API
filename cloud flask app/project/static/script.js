const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = 'DEMO_KEY'

const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${api_key}`)
    const data = await response.json()
    console.log('NASA APOD data', data)
    displayData(data)
  } catch (error) {
    console.log(error)
  }
}

const displayData = data => {
  document.getElementById('title').textContent = data.title
  document.getElementById('date').textContent = data.date
  document.getElementById('picture').src = data.hdurl
  document.getElementById('explanation').textContent = data.explanation
}

fetchNASAData()


document.querySelector("#random-day-generator").addEventListener("click", () => {
 const fetchData = async () => {
 //utility function to generate a random date after 2010 (before 2010 causes bugs)
 function randomDate(start, end) {
 return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
 }
 let randomRolledDate = randomDate(new Date(2010, 0, 1), new Date())
 randomRolledDate = "&date=" + randomRolledDate.toISOString().slice(0, 10) + "&"

 try {
 //new API response
  const response = await fetch(url + api_key + randomRolledDate)
  const data = await response.json()
  console.log('NASA data', data)
   displayData(data)
  } catch (error) {
    console.log(error)
  }
}
 fetchData()
})